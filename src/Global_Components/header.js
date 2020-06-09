import React from 'react';
import Navbar from "./navbar"

function Header() {
    return (
        <header role="banner">
            <div className="container">
                <h1>Callum Dreniw <span>Web Developer, Designer And Optimisation Specialist</span></h1>
                <Navbar />
            </div>
        </header>
    )
}

export default Header;