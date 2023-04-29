import DetailsBox from "../../components/detailsBox";
import TodayBox from "../../components/todayBox";

import classes from "./index.module.css";


export default function HomePage() {
    return (
        <section className={classes.home}>
            <TodayBox />
            <DetailsBox />
            <footer>Made with 💙 by Roshan</footer>
        </section>
    );
}