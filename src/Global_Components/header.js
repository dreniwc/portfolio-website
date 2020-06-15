import React from 'react';
import Navbar from "./navbar"
import { ReactComponent as CDLogoBlack } from '../Assets/logoBlack.svg';

function Header({ user }) {
    return (
        <header role="banner" className="borderColour">
            <div className="container">
                <div className="headerLogo">
                    <div className="headerLogo_image">
                        <CDLogoBlack />
                    </div>
                    <div className="headerLogo_name">
                        <div className="headerLogo_name-inner">
                            <p className="headerName">{user.basics.name}</p>
                            <p className="headerSubCopy">{user.basics.headline}</p>
                        </div>
                    </div>
                </div>
                <Navbar />
            </div>
        </header>
    )
}

export default Header;