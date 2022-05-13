import { Link } from 'react-router-dom';

import classes from './Menu.module.css';

function Menu() {
  return (
    <nav className={classes.menu}>
      <ul className={classes.links}>
        <li><Link to='/main'>Main Page</Link></li>
        <li><Link to='/favorites'>Favorites</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
