import React from 'react';

const Contact = React.createClass({
    // Validation in React
    propTypes: {
        phoneNumber: React.PropTypes.string.isRequired
    },

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

export default Contact;