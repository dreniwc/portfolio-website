import React from 'react';

import Footer from "../../Global_Components/footer"

function About({ user }) {
    return (
        <div className="wrapper">
            <main role="main" id="skipnav">
                <div className="container">
                    <div className="page">
                        <p>About Me</p>
                        {
                            user.about.copy.split('\n').map((data, i) => {
                                return (
                                    <p key={i}>{data}</p>
                                );
                            })
                        }
                        <p>Skills</p>
                        {
                            user.skills.map((data, i) => {
                                return (
                                    <div key={i}>
                                        <p>{data.name}</p>
                                    </div>
                                );
                            })
                        }

                        <p>Experience</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default About;