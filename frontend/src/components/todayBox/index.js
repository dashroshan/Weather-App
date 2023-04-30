import classes from "./index.module.css";
import weatherIcon from "../../assets/17.png";
import locationIcon from "../../assets/location.svg";
import searchIcon from "../../assets/search.svg";

export default function TodayBox(props) {
    return (
        <div className={classes.left}>
            <div className={classes.addressBox}>
                <div className={classes.degreec}>
                    <sup>o</sup>C
                </div>

                <div className={classes.degreef}>
                    <sup>o</sup>F
                </div>

                <div className={classes.address}>
                    <img src={locationIcon} alt="location" />
                    <input type="text" value={props.data.location} onChange={(e) => {
                        props.setData({ ...props.data, location: e.target.value });
                    }} />
                </div>

                <div className={classes.editAddress} onClick={props.updateLocation}>
                    <img src={searchIcon} alt="search" />
                </div>
            </div>


            <div className={classes.weatherIcon}>
                <img src={weatherIcon} alt="weather" />
            </div>


            <div className={classes.details}>
                <div className={classes.temp}>{props.data.today.temp}</div>
                <div className={classes.weatherName}>{props.data.today.condition}</div>
                <div className={classes.feelsLike}>Feels like {props.data.today.tempFeels}<sup>o</sup></div>
            </div>
        </div>
    );
}