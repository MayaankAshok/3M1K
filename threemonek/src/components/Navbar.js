import React from 'react'
import './Navbar.css'

export default function Navbar() {

    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="light" >
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <form class="d-flex" role="search">
                        <button type="button" class="button-54 mx-2 my-2" >Login</button>
                        <button type="button" class="button-54 mx-2 my-2">SignUp</button>
                    </form>
                    
                </div>
            </nav>
        </>
    )
    
    
}