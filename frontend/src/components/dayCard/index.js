import classes from "./index.module.css";
import weatherIcon from "../../assets/17.png";

export default function DayCard(props) {
    return (
        <div className={classes.dayCard}>
            <div className={classes.dayName}>{props.day}</div>
            <div className={classes.weatherImg}>
                <img src={weatherIcon} alt="weather" />
            </div>
            <div className={classes.temp}>{props.temp}<sup>o</sup></div>
        </div>
    );
}