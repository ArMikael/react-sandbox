import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Arts from './pages/Arts';
import Timer from './components/Timer';

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
        <NavLink exact activeClassName="active" to={{pathname: '/timer'}} className="nav-link">
            Timer
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
                    <Route path="/arts" component={ Arts } />
                    <Route path="/about" component={ About } />
                    <Route path="/timer" component={ Timer } />
                </div>
            </Router>
        );
    }
}

export default App;
