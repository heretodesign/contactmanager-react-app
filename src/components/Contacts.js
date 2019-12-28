/* eslint-disable */
import React, { Component } from 'react'
import Contact from './Contact'
import { Consumer } from '../context'

class Contacts extends Component {
    
    DeleteContact = (id) => {
        //3 levels of delete function
        console.log(id);
        const { contacts } = this.state;
        const newContacts = contacts.filter(contact => contact.id !== id); //this is how you delete
        this.setState({
            contact: newContacts
        });
    };

    render() {
        return (
            <Consumer>
                {value => {
                    const { contacts } = value
                    return (
                        <React.Fragment>
                            {contacts.map(contact => {
                                <Contact
                                    key={contact.id} 
                                    contact={contact}
                                    deleteClickHandler={this.DeleteContact.bind(this,contact.id)}
                                />
                            })}
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )
    }
}

export default Contacts;