import React from 'react';
import Navbar from "./navbar"
import { ReactComponent as CDLogoBlack } from '../Assets/logoBlack.svg';

function Header() {
    return (
        <header role="banner" className="borderColour">
            <div className="container">
                <div className="headerLogo">
                    <div className="headerLogo_image">
                        <CDLogoBlack />
                    </div>
                    <div className="headerLogo_name">
                        <div className="headerLogo_name-inner">
                            <p className="headerName">Callum Dreniw</p>
                            <p className="headerSubCopy">Web Developer, Designer And Optimisation Specialist</p>
                        </div>
                    </div>
                </div>
                <Navbar />
            </div>
        </header>
    )
}

export default Header;