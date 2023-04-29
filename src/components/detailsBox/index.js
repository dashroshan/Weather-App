import classes from "./index.module.css";
import weatherIcon from "../../assets/17.png";
import sunIcon from "../../assets/sun.png";
import windIcon from "../../assets/wind.png";
import cloudIcon from "../../assets/cloud.png";
import rainIcon from "../../assets/rain.png";
import precipitationIcon from "../../assets/precipitation.png";

export default function DetailsBox() {
    return (
        <div className={classes.right}>
            <div className={classes.next7Wrap}>
                <div className={classes.next7}>
                    <div className={classes.dayCard}>
                        <div className={classes.dayName}>30 Jul</div>
                        <div className={classes.weatherImg}>
                            <img src={weatherIcon} alt="weather" />
                        </div>
                        <div className={classes.temp}>31<sup>o</sup></div>
                    </div>

                    <div className={classes.dayCard}>
                        <div className={classes.dayName}>30 Jul</div>
                        <div className={classes.weatherImg}>
                            <img src={weatherIcon} alt="weather" />
                        </div>
                        <div className={classes.temp}>31<sup>o</sup></div>
                    </div>

                    <div className={classes.dayCard}>
                        <div className={classes.dayName}>30 Jul</div>
                        <div className={classes.weatherImg}>
                            <img src={weatherIcon} alt="weather" />
                        </div>
                        <div className={classes.temp}>31<sup>o</sup></div>
                    </div>

                    <div className={classes.dayCard}>
                        <div className={classes.dayName}>30 Jul</div>
                        <div className={classes.weatherImg}>
                            <img src={weatherIcon} alt="weather" />
                        </div>
                        <div className={classes.temp}>31<sup>o</sup></div>
                    </div>

                    <div className={classes.dayCard}>
                        <div className={classes.dayName}>30 Jul</div>
                        <div className={classes.weatherImg}>
                            <img src={weatherIcon} alt="weather" />
                        </div>
                        <div className={classes.temp}>31<sup>o</sup></div>
                    </div>

                    <div className={classes.dayCard}>
                        <div className={classes.dayName}>30 Jul</div>
                        <div className={classes.weatherImg}>
                            <img src={weatherIcon} alt="weather" />
                        </div>
                        <div className={classes.temp}>31<sup>o</sup></div>
                    </div>

                    <div className={classes.dayCard}>
                        <div className={classes.dayName}>30 Jul</div>
                        <div className={classes.weatherImg}>
                            <img src={weatherIcon} alt="weather" />
                        </div>
                        <div className={classes.temp}>31<sup>o</sup></div>
                    </div>

                    <div className={classes.dayCard}>
                        <div className={classes.dayName}>30 Jul</div>
                        <div className={classes.weatherImg}>
                            <img src={weatherIcon} alt="weather" />
                        </div>
                        <div className={classes.temp}>31<sup>o</sup></div>
                    </div>

                    <div className={classes.dayCard}>
                        <div className={classes.dayName}>30 Jul</div>
                        <div className={classes.weatherImg}>
                            <img src={weatherIcon} alt="weather" />
                        </div>
                        <div className={classes.temp}>31<sup>o</sup></div>
                    </div>

                    <div className={classes.dayCard}>
                        <div className={classes.dayName}>30 Jul</div>
                        <div className={classes.weatherImg}>
                            <img src={weatherIcon} alt="weather" />
                        </div>
                        <div className={classes.temp}>31<sup>o</sup></div>
                    </div>
                </div>
            </div>

            <div className={classes.highligths}>Today's Highlights</div>

            <div className={classes.next7Wrap}>
                <div className={classes.next7}>

                    <div className={classes.card}>
                        <div className={classes.cardDataWrap}>
                            <div className={classes.cardIcon}>
                                <img src={sunIcon} alt="sun" />
                            </div>
                            <div className={classes.cardDetails}>
                                <div>Sunlight</div>
                                <div>11.3</div>
                                <div>Hours</div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.cardDataWrap}>
                            <div className={classes.cardIcon}>
                                <img src={rainIcon} alt="rain" />
                            </div>
                            <div className={classes.cardDetails}>
                                <div>Rain Probability</div>
                                <div>24</div>
                                <div>%</div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.cardDataWrap}>
                            <div className={classes.cardIcon}>
                                <img src={windIcon} alt="wind" />
                            </div>
                            <div className={classes.cardDetails}>
                                <div>Wind speed</div>
                                <div>5.6</div>
                                <div>Km/h</div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.cardDataWrap}>
                            <div className={classes.cardIcon}>
                                <img src={cloudIcon} alt="wind" />
                            </div>
                            <div className={classes.cardDetails}>
                                <div>Cloud cover</div>
                                <div>73</div>
                                <div>%</div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.cardDataWrap}>
                            <div className={classes.cardIcon}>
                                <img src={precipitationIcon} alt="precipitation" />
                            </div>
                            <div className={classes.cardDetails}>
                                <div>Precipitation</div>
                                <div>5.3</div>
                                <div>Mm</div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.cardDataWrap}>
                            <div className={classes.cardIcon}>
                                <img src={rainIcon} alt="rain" />
                            </div>
                            <div className={classes.cardDetails}>
                                <div>Rainfall duration</div>
                                <div>2</div>
                                <div>Hours</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div >
    );
}