import classes from "./index.module.css";
import HighlightCard from "../highlightCard";
import DayCard from "../dayCard";

export default function DetailsBox() {
    return (
        <div className={classes.right}>

            <div className={classes.upcoming}>Upcoming Days</div>

            <div className={classes.next7Wrap}>
                <div className={classes.next7}>
                    <DayCard day="30 Jul" temp="32" />
                    <DayCard day="30 Jul" temp="32" />
                    <DayCard day="30 Jul" temp="32" />
                    <DayCard day="30 Jul" temp="32" />
                    <DayCard day="30 Jul" temp="32" />
                    <DayCard day="30 Jul" temp="32" />
                    <DayCard day="30 Jul" temp="32" />
                    <DayCard day="30 Jul" temp="32" />
                </div>
            </div>

            <div className={classes.highligths}>Today's Highlights</div>

            <div className={classes.next7Wrap}>
                <div className={classes.next7}>
                    <HighlightCard type="sunlight" />
                    <HighlightCard type="rainProbability" />
                    <HighlightCard type="windSpeed" />
                    <HighlightCard type="cloudCover" />
                    <HighlightCard type="precipitation" />
                    <HighlightCard type="rainfallDuration" />
                </div>
            </div>

        </div >
    );
}