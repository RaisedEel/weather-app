import classes from './Alert.module.css';

function Alert() {
  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <header>
          <h2>Wait a moment!</h2>
        </header>
        <hr className={classes.line} />
        <p>Fetching Data. This could take a minute! Please be patient.</p>
      </div>
    </div>
  );
}

export default Alert;
