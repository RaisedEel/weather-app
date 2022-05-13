import { useState } from 'react';
import classes from './Header.module.css';
import Menu from './Menu';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu((currState) => !currState);
  };

  return (
    <header className={classes.header}>
      <h1>Weather App</h1>
      {showMenu && <Menu />}
      <button onClick={showMenuHandler}>
        <div className={classes.icon} />
        <div className={classes.icon} />
        <div className={classes.icon} />
      </button>
    </header>
  );
}

export default Header;
