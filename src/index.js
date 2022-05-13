import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import Layout from './components/layout/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Layout>
      <App />
    </Layout>
  </HashRouter>
);
