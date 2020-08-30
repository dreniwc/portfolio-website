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
                alert("Success!")
                console.warn('Success!')
            }
            )
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, message } = this.state;
        return (
            <div className="wrapper">
                <main role="main" id="skipnav">
                    <div className="container">
                        <div className="page">
                            <p className="pageTitle">Contact</p>
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