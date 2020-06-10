import React from 'react';
import Navbar from "./navbar"
import { ReactComponent as CDLogoWhite } from '../Assets/logoWhite.svg';

function Header() {
    return (
        <header role="banner">
            <div className="container">
                <div className="headerLogo">
                    <div className="headerLogo_image">
                        <CDLogoWhite />
                    </div>
                    <div className="headerLogo_name">
                        <div className="headerLogo_name-inner">
                            <h1>Callum Dreniw</h1>
                            <h2>Web Developer, Designer And Optimisation Specialist</h2>
                        </div>
                    </div>
                </div>
                <Navbar />
            </div>
        </header>
    )
}

export default Header;