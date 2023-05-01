import axios from "axios";
import { useState, useEffect } from "react";
import DetailsBox from "../../components/detailsBox";
import TodayBox from "../../components/todayBox";
import classes from "./index.module.css";

// Return the value for the given key from the browser's local storage
// If key not found, returns a default value
const getSavedData = (data, value) =>
    localStorage.getItem(data) === null
        ? value
        : localStorage.getItem(data);

export default function HomePage() {
    // Stores the global data regarding weather for the current location
    const [data, setData] = useState(null);

    // Stores the current location
    const [location, setLocation] = useState(getSavedData("weatherAppAddress", "Puri,Odisha"));

    // Updates the weather data for the new location and saves the location in localstorage
    async function updateLocation() {
        try {
            const date = new Date();
            const { data: res } = await axios.get(window.APIROOT + 'weather', { params: { address: location, today: date.getDate().toString() } });
            setData(res);
            setLocation(res.location);
            localStorage.setItem("weatherAppAddress", res.location);
        } catch (error) {
            console.log(error);
        }
    }

    // Run the updateLocation function once on page load and then hides the loading screen
    useEffect(() => {
        const fetchData = async () => {
            await updateLocation();

            // First makes the opacity of loading screen 0 then makes it's display none after 0.3s for a smooth fade
            setTimeout(() => {
                document.getElementById("loader_block").style.opacity = 0;
                setTimeout(() => {
                    document.getElementById("loader_block").style.display = "none";
                }, 310);
            }, 200);
        }

        fetchData();
    }, []);

    return (
        <section className={classes.home}>
            {data ? <>
                <TodayBox updateLocation={updateLocation} setLocation={setLocation} data={data} location={location} setData={setData} />
                <DetailsBox data={data} />
            </> : null}
            <footer>Made with 💙 by Roshan</footer>
        </section>
    );
}