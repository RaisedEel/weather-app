import { Fragment } from 'react';

import WeatherItem from './WeatherItem';
import classes from './WeatherList.module.css';

function WeathersList(props) {
  return (
    <Fragment>
      {props.weathers && <ul className={classes.list}>
        {props.weathers.map((weather) => (
          <WeatherItem key={weather.location} {...weather} />
        ))}
      </ul>}
      {!props.weathers && <div>Search a location first.</div>}
    </Fragment>
  );
}

export default WeathersList;
