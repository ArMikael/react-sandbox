import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ContactsList from './contacts/ContactsList';
import Timer from './timer/Timer';

export class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>React Sandbox</h2>
                </div>

                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                    This app is created with {this.props.language}.
                </p>

                <ContactsList />

                <Timer />
            </div>
        );
    }
}

export default App;
