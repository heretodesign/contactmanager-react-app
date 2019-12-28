import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../../context'

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

    onDeleteClick = (id, dispatch) => {
        dispatch({type: 'DELETE_CONTACT', payload: id})
    };

    render() {
        const { id, name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3">
                            <h3 style={contactStyle}>{name} {' '}
                                <i onClick={this.onShowClick} 
                                    className="fas fa-sort-down"
                                    style={{cursor: 'pointer'}}
                                />
                                <i onClick={this.onDeleteClick.bind (this, id, dispatch)} 
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
                }}
            </Consumer>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    // deleteClickHandler: PropTypes.func.isRequired,
};

const contactStyle = {
    color: 'blue',
    fontSize: '0.9rem'
};

export default Contact;