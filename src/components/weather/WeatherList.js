import { Fragment } from 'react';

import WeatherItem from './WeatherItem';
import classes from './WeatherList.module.css';

function WeathersList(props) {
  return (
    <Fragment>
      {!!props.weathers.length && (
        <ul className={classes.list}>
          {props.weathers.map((weather) => (
            <WeatherItem key={weather.id} {...weather} />
          ))}
        </ul>
      )}
      {!props.weathers.length && (
        <h1 className={classes.notFound}>No Locations where found!</h1>
      )}
    </Fragment>
  );
}

export default WeathersList;
