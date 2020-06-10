import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="contact Info">
                    <p>Contact Info here</p>
                </div>
                <div className="copyright">
                    <p>&copy; {(new Date().getFullYear())} Callum Dreniw - All Rights Reserved </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;