import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Arts from './pages/Arts';
import Widgets from './pages/Widgets';

import Product from './pages/Product';

const Links = () => (
    <nav className="nav-menu">
        <NavLink exact activeClassName="active" to="/" className="nav-link">
            Home
        </NavLink>
        <NavLink exact activeClassName="active" to="/arts" className="nav-link">
            Arts
        </NavLink>
        <NavLink exact activeClassName="active" to="/about" className="nav-link">
            About
        </NavLink>
        <NavLink exact activeClassName="active" to={{pathname: '/widgets'}} className="nav-link">
            Widgets
        </NavLink>
    </nav>
);

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Links />
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/arts" component={ Arts } />
                    <Route path="/about" component={ About } />
                    <Route path="/widgets" component={ Widgets } />
                    <Route path="/arts/product/:id" component={ Product } />
                </div>
            </Router>
        );
    }
}

export default App;
