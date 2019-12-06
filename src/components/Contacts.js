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
    
    render() {
        const { contacts } = this.state;
        console.log(contacts)
        return (
            <div>
                {contacts.map(contact => {
                    <Contact
                        key={contact.id} 
                        contact={contact}
                    />
                })}
            </div>
        );
    }
}
export default Contacts;