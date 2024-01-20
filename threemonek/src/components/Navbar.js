import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="light" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Eureka</a>
                    <form className="d-flex" role="search">
                        <button type="button" className="button-54 mx-2 my-2">
                        <Link className="nav-link" to="/login">Login</Link>
                        </button>
                        <button type="button" className="button-54 mx-2 my-2">
                        <Link className="nav-link" to="/signup">SignUp</Link>
                        </button>
                    </form>
                    
                </div>
            </nav>
        </>
    )
    
    
}