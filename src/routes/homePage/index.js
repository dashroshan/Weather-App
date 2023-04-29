import classes from "./index.module.css";
import weatherIcon from "../../assets/17.png";
import locationIcon from "../../assets/location.svg";

export default function HomePage() {
    return (
        <section className={classes.home}>
            <div className={classes.left}>
                <div className={classes.address}>
                    <img src={locationIcon} alt="location" />
                    <span>Puri, Odisha</span>
                </div>
                <div className={classes.weatherIcon}>
                    <img src={weatherIcon} alt="weather" />
                </div>
                <div className={classes.details}>
                    <div className={classes.temp}>28</div>
                    <div className={classes.weatherName}>Partly Cloudy with Thunderstorms</div>
                    <div className={classes.feelsLike}>Feels like 20<sup>o</sup>C</div>
                </div>
            </div>
            <div className={classes.right}>

            </div>
        </section>
    );
}