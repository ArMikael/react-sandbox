import React from 'react';
import ContactsList from '../contacts/ContactsList';


export default class About extends React.Component {
    render() {
        return (
            <div>
                <h1>About us</h1>
                <ContactsList />
            </div>
        )
    }
}