import React from 'react';
import Navbar from "./navbar"
import { ReactComponent as CDLogoBlack } from '../Assets/logoBlack.svg';

function Header({ user }) {
    return (
        <header role="banner" className="borderColour">
            <div className="container">
                <div className="headerLogo_image">
                    <CDLogoBlack />
                </div>
                <Navbar />
            </div>
        </header>
    )
}

export default Header;