/* eslint-disable */
import React, { Component } from 'react'
import Contact from './Contact'

class Contacts extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: "John Doe", 
                email: "jdoe@gmail.com", 
                phone: "0123-123-33"
            },
            {
                id: 2,
                name: "Hello Doe", 
                email: "jdoe@gmail.com", 
                phone: "0123-123-33"
            },
            {
                id: 3,
                name: "Daina Doe", 
                email: "jdoe@gmail.com", 
                phone: "0123-123-33"
            },
            {
                id: 4,
                name: "Lady Doe", 
                email: "jdoe@gmail.com", 
                phone: "0123-123-33"
            }
        ]
    };
    
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
        const { contacts } = this.state;
        console.log(contacts)
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
        );
    }
}
export default Contacts;