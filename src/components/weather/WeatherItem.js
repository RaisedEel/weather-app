import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { favoritesActions } from '../../store/favorites-slice';
import Card from '../ui/Card';
import classes from './WeatherItem.module.css';

function WeatherItem(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { favorites } = useSelector((state) => state.favorites);
  const [isFavorite, setIsFavorite] = useState(
    favorites.some((favorite) => favorite.id === props.id)
  );

  const onMoreInformationHandler = () => {
    navigate(`/weather/${props.id}`);
  };

  const onFavoriteHandler = () => {
    if (isFavorite) {
      setIsFavorite(false);
      dispatch(favoritesActions.removeFavorite(props.id));
    } else {
      setIsFavorite(true);
      dispatch(
        favoritesActions.addFavorite({
          ...props,
        })
      );
    }
  };

  return (
    <li>
      <Card
        className={
          isFavorite
            ? `${classes.item} ${classes['favorite_item']}`
            : classes.item
        }
      >
        <h1>{props.title}</h1>
        <div className={classes.content}>
          <img
            className={classes.icon}
            src={`https://www.metaweather.com/static/img/weather/${props.abbr}.svg`}
            alt={props.name}
          />
          <div className={classes.info}>
            <p>{props.description}</p>
            <p>Temperature: {props.temperature}°C</p>
            <button onClick={onMoreInformationHandler}>More Information</button>
            <button onClick={onFavoriteHandler}>
              {isFavorite ? 'UnFavorite' : 'Set to Favorite'}
            </button>
          </div>
        </div>
      </Card>
    </li>
  );
}

export default WeatherItem;
