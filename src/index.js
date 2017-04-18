import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// import {Router} from 'react-router';
// import { HashRouter as Router, Route } from 'react-router-dom';
// import RouterModule from './routes';


// Connecting JSX content to DOM
ReactDOM.render(
    <App language="ReactJS" />, // What to add. Always have to be wrapped with one HTML element
    document.getElementById('root') // Where to add
);