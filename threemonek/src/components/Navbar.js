import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Eureka</Link>
                    <form className="d-flex" role="search">
                        <Link to="/login" className="button-54 mx-2 my-2">Login</Link>
                        <Link to="/signup" className="button-54 mx-2 my-2">SignUp</Link>
                    </form>
                </div>
            </nav>
        </>
    );
}
