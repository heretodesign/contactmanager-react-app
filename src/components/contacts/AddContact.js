import React, { Component } from 'react'

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
    };

    render() {
        const { name, email, phone } = this.state;

        return (
            <div className="card mb-3">
                <div className="card-header">
                    Add Contact
                </div>
                <div className="card-body">
                    <form>
                        <div class="form-group">
                            <label htmlFor="">Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                class="form-control form-control-lg" 
                                placeholder="Enter Name..." 
                                value={name}
                            />
                        </div>
                        <div class="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                class="form-control form-control-lg" 
                                placeholder="Enter Email..." 
                                value={email}
                            />
                        </div>
                        <div class="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input 
                                type="text" 
                                name="phone" 
                                class="form-control form-control-lg" 
                                placeholder="Enter Phone..." 
                                value={phone}
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
    }
}
export default AddContact;