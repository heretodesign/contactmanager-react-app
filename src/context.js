import React, {Component} from 'react'

const Context = React.createContext()

export class Provider extends Component {
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
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
