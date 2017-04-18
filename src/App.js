import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import { Home } from './pages/Home';
import { About } from './pages/About';

const Home = () => <h1>Home</h1>;
const Links = () => (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
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
                </div>
            </Router>
        );
    }
}

export default App;
