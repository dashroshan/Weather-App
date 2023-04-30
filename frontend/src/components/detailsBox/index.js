import classes from "./index.module.css";
import HighlightCard from "../highlightCard";
import DayCard from "../dayCard";

// Right grey box showing the next 10 day weather details and current day highlights
export default function DetailsBox(props) {
    return (
        <div className={classes.right}>

            <div className={classes.upcoming}>Upcoming Days</div>

            {/* Next 10 days weather details */}
            <div className={classes.next7Wrap}>
                <div className={classes.next7}>
                    {props.data.upcoming.map((e, id) => <DayCard key={id} day={e.date} temp={e.temp} icon={e.icon} />)}
                </div>
            </div>

            <div className={classes.highligths}>Today's Highlights</div>

            {/* Current day highlights */}
            <div className={classes.next7Wrap}>
                <div className={classes.next7}>
                    <HighlightCard type="sunlight" data={props.data.today.sunlight} />
                    <HighlightCard type="rainProbability" data={props.data.today.rainProbability} />
                    <HighlightCard type="windSpeed" data={props.data.today.windSpeed} />
                    <HighlightCard type="cloudCover" data={props.data.today.cloudCover} />
                    <HighlightCard type="precipitation" data={props.data.today.precipitation} />
                    <HighlightCard type="rainfallDuration" data={props.data.today.rainfallDuration} />
                </div>
            </div>

        </div >
    );
}