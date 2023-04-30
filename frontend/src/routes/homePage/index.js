import DetailsBox from "../../components/detailsBox";
import TodayBox from "../../components/todayBox";
import axios from "axios";
import { useState, useEffect } from "react";

import classes from "./index.module.css";

const getSavedData = (data, value) =>
    localStorage.getItem(data) === null
        ? value
        : localStorage.getItem(data);

export default function HomePage() {
    const [data, setData] = useState(null);

    async function updateLocation() {
        try {
            const { data: res } = await axios.get(window.APIROOT + 'weather', { params: { address: data?.location || getSavedData("weatherAppAddress", "Puri,Odisha"), today: "30" } });
            setData(res);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            await updateLocation();
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
                <TodayBox updateLocation={updateLocation} data={data} setData={setData} />
                <DetailsBox data={data} />
            </> : null}
            <footer>Made with 💙 by Roshan</footer>
        </section>
    );
}