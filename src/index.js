import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

