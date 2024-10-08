import React, { Component } from "react";
import signaturenick1 from '../PICS/signaturenick1.png'
// import NikhilShindeResume from '../Docs/NikhilShindeResume.pdf'
import NikhilShindeResume_9370621842 from '../Docs/NikhilShindeResume_9370621842.pdf'
import { motion } from 'framer-motion';
import { date } from "yup";

function About() {
    //Below code is to automate Master Nikhil's Age each year exatcly on 6th December. Someone need to stop the calculation when I die :)   
    var currentDate = new Date();
    var Nikhil_Birth_Info = new Date(1999, 11, 6); // Months are zero-based, so 11 represents December
    var yearsDiff = currentDate.getFullYear() - Nikhil_Birth_Info.getFullYear();
    var monthDiff = currentDate.getMonth() - Nikhil_Birth_Info.getMonth();
    var daysDiff = currentDate.getDate() - Nikhil_Birth_Info.getDate();
    if (monthDiff < 0) {
        yearsDiff--;
    }
    if (monthDiff === 0 && daysDiff != 0 && daysDiff < 0) {
        yearsDiff--;
    }
    return (



        <motion.div className="super"
            initial={{ scaleX: 0, transition: { duration: 0.3 } }}
            animate={{ scaleX: 1, transition: { duration: 0.3 } }}
            exit={{ scaleX: 0, transition: { duration: 0.3 } }}
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

                                                Welcome to my portfolio! I'm Nikhil Shinde, currently serving as a Senior Analyst at Accenture, India. I have a deep passion for both web and software development and enjoy collaborating with innovative minds on cutting-edge technologies. As a dedicated team player, I am committed to delivering excellence and contributing to the growth and success of the organizations I work with. My approach emphasizes efficiency and quality, ensuring that every project I undertake is executed with precision and creativity. Thank you for visiting, and I look forward to connecting!
                                                <br /><br />
                                                <span1>"Talent wins games, but teamwork and intelligence wins championships" </span1>
                                            </p>
                                            <img className="container" alt="Signature" src={signaturenick1} />
                                        </div>
                                        <div className="rightpart">
                                            <h2>Personal Information</h2> <br />
                                            <ul>
                                                <li>
                                                    <span className="title">Name</span><span className="value">: Nikhil Shinde</span>
                                                </li>
                                                <br />
                                                <li>
                                                    <span className="title">Age</span><span className="value">: {yearsDiff} Years</span>
                                                </li>
                                                <br />
                                                <li>
                                                    <span className="title">Residence</span><span class="value">: Pune, INDIA</span>
                                                </li>
                                                <br />
                                                <li>
                                                    <span className="title">Email</span><span className="value">:
                                                        nikhilshinde221@gmail.com</span>
                                                </li>
                                                <br />
                                                <li>
                                                    <span className="title">Phone</span><span className="value">: (+91) 9370621842</span>
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