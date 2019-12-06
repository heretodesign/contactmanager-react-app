import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            showContactInfo: true
        };
    }

    onShowClick = (e) => {
        console.log(e.target)
        this.setState({
            showContactInfo: !this.state.showContactInfo
        });
    }

    onDeleteClick = (e) => {
        this.props.deleteClickHandler();
    };

    render() {
        const { name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;

        return (
            <div className="card card-body mb-3">
                <h3 style={contactStyle}>{name} {' '}
                    <i onClick={this.onShowClick} 
                        className="fas fa-sort-down"
                        style={{cursor: 'pointer'}}
                    />
                    <i onClick={this.onDeleteClick} 
                        className="fas fa-times"
                        style={{cursor: 'pointer', float: 'right', color: 'red'}}
                    />
                </h3>
                {showContactInfo ? (<ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                </ul>) : null}
            </div>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired,
};

const contactStyle = {
    color: 'blue',
    fontSize: '0.9rem'
};

export default Contact;