import React from 'react';

import logo from './logo.svg';
import Router from './routes';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>React Sandbox</h2>
                </div>


                <Router />
            </div>
        );
    }
}

export default App;
