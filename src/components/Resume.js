import React from "react";
import '../App.css';
import './StyleResume.css'
import { motion } from 'framer-motion';;

function Resume() {

    return (
        <motion.div className="super"
            // initial={{width: 0}}
            // animate={{width:"100%"}}
            // exit={{x:window.innerWidth}}
            initial={{ scaleX: 0, transition: { duration: 0.3 } }}
            animate={{ scaleX: 1, transition: { duration: 0.3 } }}
            exit={{ scaleX: 0, transition: { duration: 0.3 } }}
        >
            <div id="wrapper">
                <div id="page-content-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">

                                <div id="Resume" classNameName="container">
                                    <div className="about-super">
                                        <div className="page-head">
                                            <h1>My Resume</h1>
                                            <span><i className="fa fa-id-card fa-2x" aria-hidden="true"></i></span>
                                        </div>
                                    </div>
                                    <div className="bor"></div>
                                    <div className="resume-body">
                                        <div className="leftpart-resume">
                                            <h2 className="mb-20">EXPERIENCE <br />
                                                <span className="bo">
                                                    <h1></h1>
                                                </span>
                                            </h2>
                                            {/* <!-- EXPERIENCE START --> */}
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="card">
                                                            <div className="card-body">

                                                                <div id="content">
                                                                    <ul className="timeline">
                                                                        {/* Edit made after leaving Capgemini and joined Accenture */}
                                                                        <li className="event" data-date="AUG 2024*">
                                                                            <h1>Senior Analyst</h1>
                                                                            <span className="bo">
                                                                                <p>ACCENTURE, INDIA</p>
                                                                            </span>
                                                                            <p>Working as Senior Analyst.
                                                                                Deep dived into Core Python, Cloud Exposure and Project Management. 
                                                                            </p>
                                                                        </li>
                                                                        {/* <li className="event" data-date="DEC 2021 *">  -- Edit made after leaving Capgemini*/}
                                                                        <li className="event" data-date="DEC 2021-AUG 2024">
                                                                            <h1>Senior Software Engineer</h1>
                                                                            <span className="bo">
                                                                                <p>CAPGEMINI, INDIA</p>
                                                                            </span>
                                                                            <p>Worked as Senior Software Developer.
                                                                                Gained practical knowledge on Python, SQL, ETL Tools such as Informatica, Tableau
                                                                                and Teradata.
                                                                            </p>
                                                                        </li>
                                                                        <li className="event" data-date="JUL 2021-DEC 2021">
                                                                            <h1>Software Trainee</h1>
                                                                            <span className="bo">
                                                                                <p>FAURECIA INDIA, PVT. LTD. </p>
                                                                            </span>
                                                                            <p>Responsible for Bug Tracking and performing Testing Lifecycle on Azure DevOps.
                                                                                Creating webpages [Angular Framework] as per need.
                                                                            </p>
                                                                        </li>
                                                                        <li className="event" data-date="DEC 2020-FEB 2021">
                                                                            <h1>Web Developer Intern</h1>
                                                                            <span className="bo">
                                                                                <p>THE SPARKS FOUNDATION </p>
                                                                            </span>
                                                                            <p>Internship in web development with the task could perform Payment Transactions between various users.</p>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- EXPERIANCE END --> */}
                                        </div>
                                        <div className="rightpart-resume">
                                            <h2>EDUCATION <br />
                                                <span className="bo">
                                                    <h1></h1>
                                                </span>
                                            </h2>
                                            {/* <!-- EDUCATION START --> */}
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="card">
                                                            <div className="card-body">

                                                                <div id="content">
                                                                    <ul className="timeline">
                                                                        <li className="event" data-date="2017-21">
                                                                            <h1>B.E. Computer Engineering</h1>
                                                                            <span className="bo">
                                                                                <p>MMCOE, PUNE</p>
                                                                            </span>
                                                                            <p>Learned the actual working
                                                                                behind real-world projects
                                                                                and gained practical exposure to technologies such
                                                                                as augmented reality, web
                                                                                development, and SDLC.</p>
                                                                        </li>

                                                                        <li className="event" data-date="2016-17">
                                                                            <h1>Senior Secondary</h1>
                                                                            <span className="bo">
                                                                                <p>NMV HIGH SCHOOL</p>
                                                                            </span>
                                                                            <p></p>
                                                                        </li>
                                                                        <li className="event" data-date="2015-16">
                                                                            <h1>Higher Secondary</h1>
                                                                            <span className="bo">
                                                                                <p>NMV HIGH SCHOOL</p>
                                                                            </span>
                                                                            <p></p>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- EDUCATION END --> */}
                                        </div>
                                    </div>
                                    <div className="skills">
                                        <div className="design-skill">
                                            <h2>DESIGN SKILLS <br />
                                                <span className="bo">
                                                    <h1></h1>
                                                </span>
                                            </h2>
                                            <br /><br />
                                            <h3>PHOTOSHOP</h3>

                                            <div className="sk">
                                                <div className="skill-one"></div>
                                            </div>
                                            <br /><br />
                                            <h3>GRAPHICS</h3>

                                            <div className="sk">
                                                <div className="skill-two"></div>
                                            </div>

                                            <br /><br />
                                            <h3>LOGO</h3>

                                            <div className="sk">
                                                <div className="skill-three"></div>
                                            </div>
                                        </div>

                                        <div className="coding-skill">
                                            <h2>CODING SKILLS<br />
                                                <span className="bo">
                                                    <h1></h1>
                                                </span>
                                            </h2>
                                            <br /><br />
                                            <h3>HTML, CSS, JS </h3>

                                            <div className="sk">
                                                <div className="skill-one"></div>
                                            </div>
                                            <br /><br />
                                            <h3>ANGULAR, REACT</h3>

                                            <div className="sk">
                                                <div className="skill-two"></div>
                                            </div>

                                            <br /><br />
                                            <h3>PYTHON, C, C++</h3>

                                            <div className="sk">
                                                <div className="skill-three"></div>
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
        /* <!--Resume Section End--> */
    );
}
export default Resume;