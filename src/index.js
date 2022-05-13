import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import store from './store/store';
import './index.css';
import App from './App';
import Layout from './components/layout/Layout';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Provider store={store}>
      <Layout>
        <App />
      </Layout>
    </Provider>
  </HashRouter>
);
