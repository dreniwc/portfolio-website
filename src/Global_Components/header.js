import React from 'react';
import Navbar from "./navbar"

function Header() {
    return (
        <header role="banner">
            <div className="container">
                <div className="headerLogo">
                    <div className="headerLogo_image">
                        <p>Image Here</p>
                    </div>
                    <div className="headerLogo_name">
                        <h1>Callum Dreniw</h1>
                        <h2>Web Developer, Designer And Optimisation Specialist</h2>
                    </div>
                </div>
                <Navbar />
            </div>
        </header>
    )
}

export default Header;