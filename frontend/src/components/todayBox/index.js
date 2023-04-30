import classes from "./index.module.css";
import weatherIcon from "../../assets/17.webp";
import locationIcon from "../../assets/location.svg";
import searchIcon from "../../assets/search.svg";

import TextTransition, { presets } from 'react-text-transition';

// Blue box showing the current day primary weather details with search box
export default function TodayBox(props) {
    return (
        <div className={classes.left}>
            <div className={classes.addressBox}>
                <div className={classes.degreec}>
                    <sup>o</sup>C
                </div>

                {/* Address input box */}
                <div className={classes.address}>
                    <img src={locationIcon} alt="location" />
                    <input type="text" value={props.location} onChange={(e) => {
                        props.setLocation(e.target.value);
                    }} onKeyDown={
                        (e) => {
                            if (e.key === "Enter") props.updateLocation();
                        }
                    } />
                </div>

                {/* Search button */}
                <div className={classes.editAddress} onClick={props.updateLocation}>
                    <img src={searchIcon} alt="search" />
                </div>
            </div>

            {/* Large current day weather image */}
            <div className={classes.weatherIcon}>
                <img src={weatherIcon} alt="weather" />
            </div>

            {/* Current day primary weather details */}
            <div className={classes.details}>
                <div className={classes.tempWrap}><div className={classes.temp}><TextTransition springConfig={presets.wobbly}>{props.data.today.temp}</TextTransition></div></div>
                <div className={classes.weatherName}><TextTransition springConfig={presets.wobbly}>{props.data.today.condition}</TextTransition></div>
                <div className={classes.feelsLike}>Feels like {props.data.today.tempFeels}<sup>o</sup></div>
            </div>
        </div>
    );
}