import React from 'react';
import { ReactComponent as CDLogoBlack } from '../Assets/logoBlack.svg';
// import { Link } from 'react-router-dom';

import Footer from "../Global_Components/footer"

// import Homesubsection from "./home/homeSubSections"

function Home() {
    return (
        <div className="wrapper">
            <main role="main" id="skipnav">
                <section id="homepage_about" className="page">
                    <div className="hero_outerContainer">
                        <div className="container">
                            <div className="hero_top">
                                <div className="hero_logo">
                                    <CDLogoBlack />
                                </div>
                            </div>
                            <div className="hero_bottom">
                                <div className="hero_copy-inner">
                                    <h3>Web Developer, Designer And Optimisation Specialist</h3>
                                    <h4>Working with user experience and accessibility at the forefront of my work.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="quickIntro">
                            <div className="container">
                                <div className="homeIntro">
                                    <p>Hi, I'm Callum Dreniw.</p>
                                    <p>I am a highly motivated member of the Conversion Rate Industry with a keen interest in solving problems. I relish the opportunity to learn new methods, techniques, and skills in and around my line of work. Settling for nothing less than the highest standard of work is imperative and engaging my initiative with any resources provided is of second nature to me.</p>

                                    <p>I conduct vast amounts of A/B tests for a variety of the UK’s biggest companies in multiple markets; all aiming to improve their Key Performance Indicators.</p>

                                    <p>User Experience and Data Analytics are of the utmost importance relating to the optimisation of the client’s websites; resulting in a high standard of efficiency and effectiveness throughout the working process.</p>
                                </div>
                            </div>
                        </div>
                        {/* <Homesubsection /> */}
                    </div>
                </section >
            </main>
            <Footer />
        </div>
    )
}

export default Home;