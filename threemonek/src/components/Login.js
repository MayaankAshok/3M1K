import React, { useState } from 'react';
import { FLASK_URL } from '../Common';
import { Link } from 'react-router-dom';

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

    const setName =prop.name;

    const handleSubmit = async (e) => {
        e.preventDefault();

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

    // const myStyle = {
    //     border: '1px solid black',
    // };

    return (
        <>
            <div className="container justify-content-center down md-5">
                <div className="container my-5" >
                    <div className="row justify-content-center down" >
                        <div className="col-md-10" >
                            <div className="card" >
                                <div className="card-body" >
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
                                            Don't have an account? <Link to="./signup">Register here</Link>
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
