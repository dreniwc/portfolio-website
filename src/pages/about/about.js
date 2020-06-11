import React from 'react';
import Skills from "./skills"

import Footer from "../../Global_Components/footer"

function About() {
    return (
        <div className="wrapper">
            <main role="main" id="skipnav">
                <div className="container">
                    <div className="page">
                        <p>About Me</p>
                        <p>I am a highly motivated member of the Conversion Rate Industry with a keen interest in solving problems. I relish the opportunity to learn new methods, techniques, and skills in and around my line of work. Settling for nothing less than the highest standard of work is imperative and engaging my initiative with any resources provided is of second nature to me.</p>

                        <p>I conduct vast amounts of A/B tests for a variety of the UK’s biggest companies in multiple markets; all aiming to improve their Key Performance Indicators.</p>

                        <p>User Experience and Data Analytics are of the utmost importance relating to the optimisation of the client’s websites; resulting in a high standard of efficiency and effectiveness throughout the working process.</p>

                        <p>Skills</p>
                        <Skills />

                        <p>Experience</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default About;