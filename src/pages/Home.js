import React from 'react';
import { ReactComponent as CDLogoBlack } from '../Assets/logoBlack.svg';
// import { Link } from 'react-router-dom';

import Footer from "../Global_Components/footer"

// import Homesubsection from "./home/homeSubSections"

function Home({ user }) {
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
                                    <h1>{user.basics.headline}</h1>
                                    <h2>{user.basics.summary}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="quickIntro">
                            <div className="container">
                                <div className="homeIntro">
                                    {
                                        user.about.copy.split('\n').map((data, i) => {
                                            return (
                                                <p key={i}>{data}</p>
                                            );
                                        })
                                    }
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