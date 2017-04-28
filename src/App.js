import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Timer } from './timer/Timer';

// const Home = () => <h1>Home</h1>;
const Links = () => (
    <nav>
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
        <NavLink exact activeClassName="active" to="/about">About</NavLink>
        <NavLink exact activeClassName="active" to={{pathname: '/timer'}}>Timer</NavLink>
    </nav>
);

// console.log(Home);

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Links />
                    <Route exact path="/" component={ Home } />
                    <Route path="/about" component={ About } />
                    <Route path="/timer" component={ Timer } />

                </div>
            </Router>
        );
    }
}

export default App;
