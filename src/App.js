import React from 'react';

import logo from './logo.svg';
import Router from './routes';
import Comments from './components/Comments';


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>React Sandbox</h2>
                </div>


                <Router />

                <Comments comments={ "Hello friend! Good job!" } />
            </div>
        );
    }
}

export default App;
