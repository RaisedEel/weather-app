import { Fragment } from 'react';

import WeatherItem from './WeatherItem';
import classes from './WeatherList.module.css';

function WeathersList(props) {
  console.log(props.weathers);
  return (
    <Fragment>
      {!!props.weathers.length && <ul className={classes.list}>
        {props.weathers.map((weather) => (
          <WeatherItem key={weather.title} {...weather} />
        ))}
      </ul>}
      {!props.weathers.length && <div>Search a location first.</div>}
    </Fragment>
  );
}

export default WeathersList;
