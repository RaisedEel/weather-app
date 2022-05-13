import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function WeatherDetail() {
  const params = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://www.metaweather.com/api/location/${params.locationId}/`
      );

      const weatherDetails = await data.json();
      setDetails({
        ...weatherDetails['consolidated_weather'][0],
      });
    };

    fetchData();
  }, [params]);

  return (
    <div>
      <p>Date: {details['applicable_date']}</p>
      <p>Description: </p>
      <p>Wind Speed: </p>
      <p>Wind Direction: </p>
      <p>Min Temp: Max Temp: Temp:</p>
      <p>Air Pressure: </p>
      <p>Humidity: </p>
      <p>Visibility: </p>
      <p>Accuracy: </p>
    </div>
  );
}

export default WeatherDetail;
