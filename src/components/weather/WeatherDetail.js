import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { alertActions } from '../../store/alert-slice';
import classes from './WeatherDetail.module.css';

function WeatherDetail() {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      dispatch(alertActions.setAlert());
      const data = await fetch(
        `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${params.locationId}/`
      );

      const weatherDetails = await data.json();
      setDetails({
        title: weatherDetails.title,
        ...weatherDetails['consolidated_weather'][0],
      });
      dispatch(alertActions.hideAlert());
    };

    fetchData();
  }, [params, dispatch]);

  return (
    <div className={classes.details}>
      <h1>
        Location: {details.title} <button onClick={() => navigate(-1)}>Back</button>
      </h1>
      <p>
        <strong>Date:</strong> {details['applicable_date']}
      </p>
      <p>
        <strong>Description:</strong> {details['weather_state_name']}
      </p>
      <p>
        <strong>Wind Speed:</strong> {details['wind_speed']} Mph
      </p>
      <p>
        <strong>Wind Direction:</strong> {details['wind_direction_compass']}
      </p>
      <p>
        <strong>Min Temp:</strong> {details['min_temp']}°C,{' '}
        <strong>Max Temp:</strong> {details['max_temp']}°C,{' '}
        <strong>Normal Temp:</strong> {details['the_temp']}°C
      </p>
      <p>
        <strong>Air Pressure:</strong> {details['air_pressure']} mbar
      </p>
      <p>
        <strong>Humidity: </strong> {details.humidity} %
      </p>
      <p>
        <strong>Visibility:</strong> {details.visibility} Miles
      </p>
      <p>
        <strong>Accuracy of Prediction:</strong> {details.predictability} %
      </p>
    </div>
  );
}

export default WeatherDetail;
