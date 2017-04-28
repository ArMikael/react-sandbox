import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Connecting JSX content to DOM
ReactDOM.render(
  <App language="ReactJS" />, // What to add. Always have to be wrapped with one HTML element
  document.getElementById('root') // Where to add
);
