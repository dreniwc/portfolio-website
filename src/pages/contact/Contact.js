import React from 'react';

import Footer from "../../Global_Components/footer"

function Contact() {
    return (
        <div className="wrapper">
            <main role="main" id="skipnav">

                <div className="hero_outerContainer">
                    <div className="container">
                        <div className="page">
                            <p>Contact</p>
                            <form name="contact" method="POST" data-netlify="true">
                                <input type="hidden" name="form-name" value="contact" />
                                <p>
                                    <label>Your Name: <input type="text" name="name" /></label>
                                </p>
                                <p>
                                    <label>Your Email: <input type="email" name="email" /></label>
                                </p>
                                <p>
                                    <label>Message: <textarea name="message"></textarea></label>
                                </p>
                                <p>
                                    <button type="submit">Send</button>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Contact;