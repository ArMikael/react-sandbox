import React from 'react';

import Contact from './Contact';


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

export default ContactsList;