const express = require("express");
const router = express.Router();

// Used to convert month number to text
const months = [0, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Returns the weather information on getting the address and current local date
router.get(
    "/weather",
    async (req, res) => {
        try {
            // Get the queries provided
            const address = encodeURI(req.query.address);
            const today = req.query.today;

            // Use the global axios instance
            const axios = req.app.get("axios")

            // Find coordinates of location from its name
            const { data: search } = await axios.get(`https://atlas.microsoft.com/search/fuzzy/json?&api-version=1.0&subscription-key=${process.env.KEY}&language=en-US&query=${address}`);
            const bestMatch = search.results[0];
            const coordinates = `${bestMatch.position.lat},${bestMatch.position.lon}`;

            // Get the weather details for the coordinate
            const { data: weather } = await axios.get(`https://atlas.microsoft.com/weather/forecast/daily/json?api-version=1.0&query=${coordinates}&duration=10&subscription-key=${process.env.KEY}`);

            // Basic data about next 10 days
            const upcoming = weather.forecasts.map(e => {
                [yyyy, mm, dd, hh, mi] = e.date.split(/[/:\-T]/);
                return {
                    date: `${dd} ${months[parseInt(mm, 10)]}`,
                    temp: ((e.temperature.minimum.value + e.temperature.maximum.value) / 2).toFixed(1),
                    icon: e.day.iconCode
                };
            });

            // Detailed data about the current day
            let wData = {};
            for (let day of weather.forecasts) {
                [yyyy, mm, dd, hh, mi] = day.date.split(/[/:\-T]/);
                if (parseInt(dd, 10) === parseInt(today, 10)) {
                    wData = {
                        icon: day.day.iconCode,
                        temp: ((day.temperature.minimum.value + day.temperature.maximum.value) / 2).toFixed(1),
                        condition: day.day.iconPhrase,
                        tempFeels: ((day.realFeelTemperature.minimum.value + day.realFeelTemperature.maximum.value) / 2).toFixed(1),
                        sunlight: day.hoursOfSun,
                        rainProbability: day.day.rainProbability,
                        windSpeed: day.day.wind.speed.value,
                        cloudCover: day.day.cloudCover,
                        precipitation: day.day.totalLiquid.value,
                        rainfallDuration: day.day.hoursOfPrecipitation,
                    };
                }
            }

            // Return the weather info
            res.send({ today: wData, upcoming: upcoming, location: bestMatch.address.freeformAddress });
        } catch (error) {
            console.log(error);
        }
    }
);

module.exports = router;