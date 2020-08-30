import React from 'react';

import Footer from "../../Global_Components/footer"

function About({ user }) {
    return (
        <div className="wrapper">
            <main role="main" id="skipnav">

                <section id="about" className="page">
                    <div className="container">
                        <p className="pageTitle">About Me</p>
                        <p>{user.about.aboutMePageCopy}</p>
                        <p><a className="btn cv_btn" href="callum_dreniw-cv.pdf" target="_blank">Download my CV here</a></p>
                    {/* {
                            user.about.copy.split('\n').map((data, i) => {
                                return (
                                    <p key={i}>{data}</p>
                                );
                            })
                        } */}
                    {/* <p>Skills</p> */}
                    {/* {
                            user.skills.map((data, i) => {
                                return (
                                    <div key={i}>
                                        <p>{data.name}</p>
                                    </div>
                                );
                            })
                        } */}
                    </div>
                </section>
            </main>
        <Footer />
        </div >
    )
}

export default About;