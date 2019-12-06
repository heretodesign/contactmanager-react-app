import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Contact extends Component {
    render() {
        const { name, email, phone } = this.props.contact;

        return (
            <div className="card card-body mb-3">
                <h3 style={contactStyle}>{name}</h3>
                <ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                </ul>
            </div>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
};

const contactStyle = {
    color: 'blue',
    fontSize: '0.9rem'
};

export default Contact;