import Card from '../ui/Card';
import classes from './WeatherItem.module.css'

function WeatherItem(props) {
  return (
    <li>
      <Card className={classes.item}>
        <h1>{props.location}</h1>
        <div className={classes.content}>
          <img
            className={classes.icon}
            src={`https://www.metaweather.com/static/img/weather/${props.abbr}.svg`}
            alt={props.name}
          />
          <div className={classes.info}>
            <p>Description: {props.description}</p>
            <p>Temperature: {props.temperature}°C</p>
            <button>More Information</button>
            <button>Set to Favorite</button>
          </div>
        </div>
      </Card>
    </li>
  );
}

export default WeatherItem;