import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from 'App';
import Home from './pages/Home';
import About from './pages/About';

class Router extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}></IndexRoute>
                    <Route path="/about" component={About}></Route>
                </Route>
            </Router>
        )
    }
}

export default Router;