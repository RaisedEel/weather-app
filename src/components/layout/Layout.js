import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Alert from '../ui/Alert';
import Header from './Header';
import classes from './Layout.module.css';

function Layout(props) {
  const { alert } = useSelector((state) => state.alert);

  return (
    <Fragment>
      {alert && <Alert />}
      <Header />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
