import React from 'react';
import { ReactComponent as CDLogoWhite } from '../Assets/logoWhite.svg';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <section id="homepage_about">
            <div className="hero_outerContainer">
                <div className="container">
                    <div className="hero_top">
                        <div className="hero_logo">
                            <CDLogoWhite />
                        </div>
                    </div>
                    <div className="hero_bottom">
                        <div className="hero_copy-inner">
                            <h2>Callum Dreniw</h2>
                            <h3>Web Developer, Designer And Optimisation Specialist</h3>
                            <h4>Working with user experience and accessibility at the forefront of my work.</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                    <div className="homeIntro">
                        <p>I am a highly motivated member of the Conversion Rate Industry with a keen interest in solving problems. I relish the opportunity to learn new methods, techniques, and skills in and around my line of work. Settling for nothing less than the highest standard of work is imperative and engaging my initiative with any resources provided is of second nature to me.</p>

                        <p>I conduct vast amounts of A/B tests for a variety of the UK’s biggest companies in multiple markets; all aiming to improve their Key Performance Indicators.</p>

                        <p>User Experience and Data Analytics are of the utmost importance relating to the optimisation of the client’s websites; resulting in a high standard of efficiency and effectiveness throughout the working process.</p>
                    </div>
                    <div className="homeSections">
                        <div className="homeAbout">
                            <div className="homeLeftContainer">
                                <p>About Me</p>
                            </div>
                            <div className="homeRightContainer">
                                <p>Find out more about:</p>
                                <p>My skills</p>
                                <p>My experince</p>
                                <Link to='/about'>
                                    <button className="btn btn-default">See more about me</button>
                                </Link>
                            </div>
                        </div>
                        <div className="homePortfolio">
                            <div className="homeLeftContainer">
                                <p>View my work</p>
                            </div>
                            <div className="homeRightContainer">
                                <p>i've done</p>
                                <p>etc</p>
                                <Link to='/portfolio'>
                                    <button className="btn btn-default">See my portfolio</button>
                                </Link>
                            </div>
                        </div>
                        <div className="homeContact">
                            <div className="homeLeftContainer">
                                <p>Contact Me</p>
                            </div>
                            <div className="homeRightContainer">
                                <p>FOrm</p>
                                <p>EMail</p>
                                <p>etc</p>
                                <Link to='/contact'>
                                    <button className="btn btn-default">See my contact details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Home;