import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

import {Router, browserHistory} from 'react-router';
import RouterModule from './routes';


// Connecting JSX content to DOM
ReactDOM.render(
  // <App language="ReactJS" />, // What to add. Always have to be wrapped with one HTML element
  <Router history={browserHistory} routes={RouterModule} />,
  document.getElementById('root') // Where to add
);
