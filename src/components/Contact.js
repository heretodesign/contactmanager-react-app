import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Contact extends Component {
    render() {
        const { name, email, phone } = this.props;
        return (
            <div>
                <h1 style={contactStyle}>Name: {name}</h1>
                <ul>
                    <li>Email: {email}</li>
                    <li>Phone: {phone}</li>
                </ul>
            </div>
        )
    }
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};

const contactStyle = {
    color: 'blue',
    fontSize: '12rem'
};

export default Contact;