import React from 'react';

import Footer from "../../Global_Components/footer"

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "", message: "" };
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => {
                console.warn('Success!')
                this.confirmForm();
            }
            )
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    confirmForm() {
        console.log('confirm form function');
        this.setState({ confirmation: "submissionSuccessful" })
    }

    render() {
        const { name, email, message, confirmation } = this.state;
        return (
            <div className="wrapper">
                <main role="main" id="skipnav">
                    <div className="container">
                        <div className="page">
                            <p className="pageTitle">Contact</p>
                            <p>Please feel free to get in touch and contact me using the form below, messaging me on <a href="https://uk.linkedin.com/pub/callum-dreniw/">LinkedIn</a> or by emailing me directly at <a href="mailto:callumdreniw@outlook.com">callumdreniw@outlook.com</a>.</p>
                            <form onSubmit={this.handleSubmit} data-netlify="true">
                                <div className="formElement">
                                    <label  htmlFor="formName">Your Name: </label>
                                    <input required type="text" name="name" id="formName" autoComplete="name" autoCorrect="off" autoCapitalize="off" value={name} onChange={this.handleChange} />

                                </div>
                                <div className="formElement">
                                    <label htmlFor="formEmail">Your Email: </label>
                                    <input required type="email" name="email" id="formEmail" autoComplete="email" value={email} onChange={this.handleChange} />
                                </div>
                                <div className="formElement">
                                    <label htmlFor="formText">Message: </label>
                                    <textarea required name="message" id="formText" rows="3" spellCheck="true" autoCapitalize="sentences" value={message} onChange={this.handleChange} />
                                </div>
                                <div className="formElement">
                                    <button type="submit" className="btn">Send</button>
                                </div>
                                <p id="validationMessage" className={confirmation}>Thank you for your message, I will be in contact.</p>
                            </form>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

// function Contact() {
//     return (
//         <div className="wrapper">
//             <main role="main" id="skipnav">

//                 <div className="hero_outerContainer">
//                     <div className="container">
//                         <div className="page">
//                             <p>Contact</p>
//                             <form name="contact" method="POST" data-netlify="true" action="/thank-you">
//                                 <input type="hidden" name="form-name" value="contact" />
//                                 <p>
//                                     <label>Your Name: <input type="text" name="name" required /></label>
//                                 </p>
//                                 <p>
//                                     <label>Your Email: <input type="email" name="email" required /></label>
//                                 </p>
//                                 <p>
//                                     <label>Message: <textarea name="message" required></textarea></label>
//                                 </p>
//                                 <p>
//                                     <button type="submit">Send</button>
//                                 </p>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//             <Footer />
//         </div>
//     )
// }

export default Contact;