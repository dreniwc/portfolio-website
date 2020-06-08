import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav role="navigation" id="skiptonav">
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;