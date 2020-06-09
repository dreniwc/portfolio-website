import React from 'react';
import { ReactComponent as CDLogoWhite} from '../Assets/logoWhite.svg';

function Home() {
    return (
        <section id="homepage_about">
            <div className="hero_outerContainer">
                <div className="container">
                    <div className="hero_left">
                        <div className="hero_left-inner">
                            <h2>Callum Dreniw</h2>
                            <h3>Web Developer, Designer And Optimisation Specialist</h3>
                            <h4>Working with user experience and accessibility at the forefront of my work.</h4>
                        </div>
                    </div>
                    <div className="hero_right">
                        <CDLogoWhite />
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                    <p>I am a highly motivated member of the Conversion Rate Industry with a keen interest in solving problems. I relish the opportunity to learn new methods, techniques, and skills in and around my line of work. Settling for nothing less than the highest standard of work is imperative and engaging my initiative with any resources provided is of second nature to me.</p>

                    <p>I conduct vast amounts of A/B tests for a variety of the UK’s biggest companies in multiple markets; all aiming to improve their Key Performance Indicators.</p>

                    <p>User Experience and Data Analytics are of the utmost importance relating to the optimisation of the client’s websites; resulting in a high standard of efficiency and effectiveness throughout the working process.</p>
                </div>
            </div>
        </section>
    )
}

export default Home;