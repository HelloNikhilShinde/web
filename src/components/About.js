import React, { Component } from "react";
import signaturenick1 from '../PICS/signaturenick1.png'
// import NikhilShindeResume from '../Docs/NikhilShindeResume.pdf'
import NikhilShindeResume_9370621842 from '../Docs/NikhilShinde_9370621842.pdf'
import {motion} from 'framer-motion';

function About() {
    return (

        
        <motion.div className="super"
        initial={{scaleX : 0,transition:{ duration:0.3}}}
        animate={{scaleX : 1,transition:{ duration:0.3}}}
        exit={{scaleX : 0,transition:{ duration:0.3}}}
        >
            <div id="wrapper" className="rw" >
            <div id="page-content-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div id="About_Me">
                                <div className="about-super">
                                    <div className="page-head">
                                        <h1>ABOUT ME</h1>
                                        <span> <i className="fa fa-user fa-2x" aria-hisdden="true"></i></span>
                                    </div>
                                </div>
                                <div className="bor"></div>
                                <div className="about-body">
                                    <div className="leftpart container" >
                                        <h2>Software Developer</h2><br />
                                        <p>

                                            Hello, Thank you for landing on this portfolio.
                                            As you might have already read my name on the home page itself, My name is Nikhil Shinde and currently,
                                            I'm working as a software developer in Capgemini, India.
                                            I'm passionate about web development as well as software development.
                                            I like to work with new people on new technologies.
                                            I am a team player who is always ready to contribute the best of me for the betterment of the organization I am working with.
                                            I believe in smart work without compromising quality.
                                            <br /><br />
                                            <span1>"Talent wins games, but teamwork and intelligence wins championships" </span1>
                                        </p>
                                        <img className="container" alt="Signature" src={signaturenick1} />
                                    </div>
                                    <div className="rightpart">
                                        <h2>Personal Information</h2> <br />
                                        <ul>
                                            <li>
                                                <span className="title">Name </span><span className="value">: Nikhil Shinde</span>
                                            </li>
                                            <br />
                                            <li>
                                                <span className="title">Age </span><span className="value">: 22 Years</span>
                                            </li>
                                            <br />
                                            <li>
                                                <span className="title">Residence </span><span class="value">: Pune, INDIA</span>
                                            </li>
                                            <br />
                                            <li>
                                                <span className="title">Email </span><span className="value">:
                                                    nikhilshinde221@gmail.com</span>
                                            </li>
                                            <br />
                                            <li>
                                                <span className="title">Phone </span><span className="value">: (+91) 9370621842</span>
                                            </li>

                                            {/* <li>
                                                <span className="title">Freelance </span><span className="value">: Available</span>
                                            </li> */}

                                        </ul>
                                        <br />
                                        <form method="get" action={NikhilShindeResume_9370621842} target="_blank">
                                        <button className="mybtn">Download Resume</button>
                                        </form>
                                       
                                    </div>

                                </div>
                                <div className="sign">
                                    {/*  <img alt="Signature" src="/assets/images/signature-white.png" /> */}
                                </div>

                                <div className="service">
                                    <div className="container"> <h1>SERVICES</h1>   </div>
                                    <span className="bo">
                                        <h1></h1>
                                    </span>

                                    <div className="service-cont">
                                        <div className="one">
                                            <i className="fa fa-laptop fa-3x" aria-hidden="true"></i>
                                            <h1>Website Development</h1>
                                            <p>Hands-on experience in developing various websites including internships and freelancing.
                                            </p>
                                        </div>
                                        <div className="two">
                                            <i className="fa fa-eye fa-3x" aria-hidden="true"></i>
                                            <h1>Software Development</h1>
                                            <p>Worked on various industrial projects on software development in past organizations.
                                            </p>
                                        </div>
                                        <div className="three">
                                            <i className="fa fa-mobile fa-3x" aria-hidden="true"></i>
                                            <h1>Responsive Designing</h1>
                                            <p>I create Responsible designs to make website browsers independent.
                                            </p>
                                        </div>
                                        <div className="four">
                                            <i className="fa fa-database fa-3x" aria-hidden="true"></i>
                                            <h1>Backend connectivity</h1>
                                            <p> Backend makes the product complete, and I don't like to keep my work incomplete.
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </motion.div>



    );

}
export default About;