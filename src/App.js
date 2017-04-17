import React, { PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';

import ContactsList from './contacts/ContactsList';
import Timer from './timer/Timer';
import Subscribe from './forms/Subscribe';

class App extends React.Component {
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

                <Subscribe />

                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
