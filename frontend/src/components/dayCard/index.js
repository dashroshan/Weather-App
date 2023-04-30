import classes from "./index.module.css";

// Icons for different weather conditions
import i_1_30 from "../../assets/weather/1 30.webp";
import i_2_3_4 from "../../assets/weather/2 3 4.webp";
import i_5 from "../../assets/weather/5.webp";
import i_6 from "../../assets/weather/6.webp";
import i_7_8 from "../../assets/weather/7 8.webp";
import i_11_31_32 from "../../assets/weather/11 31 32.webp";
import i_12_18 from "../../assets/weather/12 18.webp";
import i_13_14 from "../../assets/weather/13 14.webp";
import i_15_16 from "../../assets/weather/15 16.webp";
import i_17 from "../../assets/weather/17.webp";
import i_19_20_21_44 from "../../assets/weather/19 20 21 44.webp";
import i_22_23_24_25_26_29 from "../../assets/weather/22 23 24 25 26 29.webp";
import i_33_34 from "../../assets/weather/33 34.webp";
import i_35_36_38 from "../../assets/weather/35 36 38.webp";
import i_37 from "../../assets/weather/37.webp";
import i_39_40 from "../../assets/weather/39 40.webp";
import i_41_42 from "../../assets/weather/41 42.webp";
import i_43 from "../../assets/weather/43.webp";

// Mapping different weather values returned by Azure Maps API to their images
const weatherIcons = {
    "1": i_1_30,
    "2": i_2_3_4,
    "3": i_2_3_4,
    "4": i_2_3_4,
    "5": i_5,
    "6": i_6,
    "7": i_7_8,
    "8": i_7_8,
    "11": i_11_31_32,
    "12": i_12_18,
    "13": i_13_14,
    "14": i_13_14,
    "15": i_15_16,
    "16": i_15_16,
    "17": i_17,
    "18": i_12_18,
    "19": i_19_20_21_44,
    "20": i_19_20_21_44,
    "21": i_19_20_21_44,
    "22": i_22_23_24_25_26_29,
    "23": i_22_23_24_25_26_29,
    "24": i_22_23_24_25_26_29,
    "25": i_22_23_24_25_26_29,
    "26": i_22_23_24_25_26_29,
    "29": i_22_23_24_25_26_29,
    "30": i_1_30,
    "31": i_11_31_32,
    "32": i_11_31_32,
    "33": i_33_34,
    "34": i_33_34,
    "35": i_35_36_38,
    "36": i_35_36_38,
    "37": i_37,
    "38": i_35_36_38,
    "39": i_39_40,
    "40": i_39_40,
    "41": i_41_42,
    "42": i_41_42,
    "43": i_43,
    "44": i_19_20_21_44,
}

// Card for showing the next 10 days weather details
export default function DayCard(props) {
    return (
        <div className={classes.dayCard}>
            <div className={classes.dayName}>{props.day}</div>
            <div className={classes.weatherImg}>
                <img src={weatherIcons[props.icon]} alt="weather" />
            </div>
            <div className={classes.temp}>{props.temp}<sup>o</sup></div>
        </div>
    );
}