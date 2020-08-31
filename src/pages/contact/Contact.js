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
        this.setState({confirmation: "submissionSuccessful"})
    }

    render() {
        const { name, email, message, confirmation } = this.state;
        return (
            <div className="wrapper">
                <main role="main" id="skipnav">
                    <div className="container">
                        <div className="page">
                            <p className="pageTitle">Contact</p>
                            <p>Please feel free to get in touch and contact me using the form below, messaging me on <a href="http://uk.linkedin.com/pub/callum-dreniw/">LinkedIn</a> or by emailed me directly at <a href="mailto:callumdreniw@outlook.com">callumdreniw@outlook.com</a>.</p>
                            <p>Contact Form</p>
                            <form onSubmit={this.handleSubmit} data-netlify="true">
                                <p>
                                    <label>
                                        Your Name: <input required type="text" name="name" value={name} onChange={this.handleChange} />
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        Your Email: <input required type="email" name="email" value={email} onChange={this.handleChange} />
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        Message: <textarea required name="message" value={message} onChange={this.handleChange} />
                                    </label>
                                </p>
                                <p>
                                    <button type="submit">Send</button>
                                </p>
                                <p id="validationMessage" className={confirmation}>confirmation:</p>
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