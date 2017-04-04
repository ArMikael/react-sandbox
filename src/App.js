import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var CONTACTS = [
    {
        id: 1,
        name: 'Darth Vader',
        phoneNumber: '+250966666666',
        image: 'img/darth.gif'
    }, {
        id: 2,
        name: 'Princess Leia',
        phoneNumber: '+250966344466',
        image: 'img/leia.gif'
    }, {
        id: 3,
        name: 'Luke Skywalker',
        phoneNumber: '+250976654433',
        image: 'img/luke.gif'
    }, {
        id: 4,
        name: 'Chewbacca',
        phoneNumber: '+250456784935',
        image: 'img/chewbacca.gif'
    }
];

export class App extends Component {
    getInitialState() {
        return {
            displayedContacts: CONTACTS
        }
    }

    searchContact(event) {
        console.log(event.target.value);

        var searchQuery = event.target.value.toLowerCase();
        var displayedContacts = CONTACTS.filter(function (elem) {
            var searchValue = elem.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== 1;
        });

        this.setState({
            displayedContacts: displayedContacts
        });
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>React Sandbox</h2>
                </div>

                <input type="text" onChange={this.searchContact} />

                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                    This app is created with {this.props.language}.
                </p>
            </div>
        );
    }
}

export default App;
