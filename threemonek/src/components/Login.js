import { FLASK_URL } from '../Common';
import React, { useState } from 'react';

export default function Login(prop) {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const setName = prop.name;

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // console log the username
        // console.log(formData.username);
        setName(formData.username);
        prop.toggleName(formData.username);
        try {
            const response = await fetch(FLASK_URL+'/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Handle successful login, e.g., redirect to another page
                console.log('Login successful');
            } else {
                // Handle unsuccessful login, show error message, etc.
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    const [username, setUsername] = useState('');


    return (
        <>
            {console.log("Registration successful")}
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Login</h5>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">
                                            Username
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="username"
                                            name="username"
                                            value={formData.username}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="d-grid gap-2">
                                        <button type="submit" className="btn btn-primary">
                                            Login
                                        </button>
                                    </div>
                                </form>
                                <hr />
                                <p className="card-text text-center">
                                    <small className="text-muted">
                                        Don't have an account? <a href="/signup">Register here</a>
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
