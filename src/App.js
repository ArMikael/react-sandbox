import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const CONTACTS = [
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

let Contact = React.createClass({
   render: function () {
       return (
           <li className="contact">
               <img className="contact-image" src={ this.props.image } alt="" width="60px" height="60px" />
               <div className="contact-info">
                   <div className="contact-name"> { this.props.name } </div>
                   <div className="contact-number"> { this.props.phoneNumber } </div>
               </div>
           </li>
       )
   }
});

let ContactsList = React.createClass({
    getInitialState: function() {
        return {
            displayedContacts: CONTACTS
        };
    },

    searchContact: function(event) {
        console.log(event.target.value);

        let searchQuery = event.target.value.toLowerCase();
        let displayedContacts = CONTACTS.filter(function (elem) {
            let searchValue = elem.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });

        console.log(displayedContacts);

        this.setState({
            displayedContacts: displayedContacts
        });
    },

    render: function () {
        return (
            <div className="contacts">
                <input type="text" onChange={ this.searchContact } />
                <ul className="contacts-list">
                    {
                        this.state.displayedContacts.map(function (el) {
                            return <Contact
                                key={ el.id }
                                name={ el.name }
                                phoneNumber={ el.phoneNumber }
                                image={ el.image }
                            />
                        })
                    }
                </ul>
            </div>
        );
    }
});

let Timer = React.createClass({
    getInitialState: function() {
        return {
            seconds: 0
        }
    },

    componentDidMount: function () {
      setInterval(this.tick, 1000);
    },

    tick: function () {
        this.setState({
           seconds: this.state.seconds + 1
        });
    },

    render: function () {
        return (
            <h4 className="timer">Прошло {this.state.seconds} секунд</h4>
        );
    }
});

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
