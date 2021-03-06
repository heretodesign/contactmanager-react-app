import React, { Component } from 'react'
import { Consumer } from '../../context'
import uuid from 'uuid'

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    };

    handleSubmit = (dispatch, e) => {
        e.preventDefault();
        console.log(this.state)
        const { name, email, phone } = this.state;

        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        }

        dispatch({ type: 'ADD_CONTACT', payload: newContact });

        // Clear State
        this.setState({
            name: '',
            email: '',
            phone: ''
        });
    };

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, phone } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">
                                Add Contact
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit.bind(this, dispatch)}>
                                    <div className="form-group">
                                        <label htmlFor="">Name</label>
                                        <input 
                                            type="text" 
                                            name="name" 
                                            className="form-control form-control-lg" 
                                            placeholder="Enter Name..." 
                                            value={name}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input 
                                            type="email" 
                                            name="email" 
                                            className="form-control form-control-lg" 
                                            placeholder="Enter Email..." 
                                            value={email}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input 
                                            type="text" 
                                            name="phone" 
                                            className="form-control form-control-lg" 
                                            placeholder="Enter Phone..." 
                                            value={phone}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <input 
                                        type="submit"
                                        value="Add Contact"
                                        className="btn btn-primary btn-block"
                                    />
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default AddContact;