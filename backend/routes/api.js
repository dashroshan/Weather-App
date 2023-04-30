const express = require("express");
const router = express.Router();

const months = [0, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

router.get(
    "/weather",
    async (req, res) => {
        try {
            const address = encodeURI(req.query.address);
            const today = req.query.today;
            const axios = req.app.get("axios")

            const { data: search } = await axios.get(`https://atlas.microsoft.com/search/fuzzy/json?&api-version=1.0&subscription-key=${process.env.KEY}&language=en-US&query=${address}`);
            const bestMatch = search.results[0];
            const coordinates = `${bestMatch.position.lat},${bestMatch.position.lon}`;

            const { data: weather } = await axios.get(`https://atlas.microsoft.com/weather/forecast/daily/json?api-version=1.0&query=${coordinates}&duration=10&subscription-key=${process.env.KEY}`);
            const upcoming = weather.forecasts.map(e => {
                [yyyy, mm, dd, hh, mi] = e.date.split(/[/:\-T]/);
                return {
                    date: `${dd} ${months[parseInt(mm, 10)]}`,
                    temp: ((e.temperature.minimum.value + e.temperature.maximum.value) / 2).toFixed(1),
                    icon: e.day.iconCode
                };
            });

            let wData = {};
            for (let day of weather.forecasts) {
                [yyyy, mm, dd, hh, mi] = day.date.split(/[/:\-T]/);
                if (dd === today) {
                    wData = {
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

            res.send({ today: wData, upcoming: upcoming, location: bestMatch.address.freeformAddress });
        } catch (error) {
            console.log(error);
        }
    }
);

module.exports = router;