import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './StylePro.css'
import pro1 from '../PICS/pro1.png'
import pro2 from '../PICS/pro2.png'
import pro3 from '../PICS/pro3.png'
import {motion} from 'framer-motion';;


function Projects() {
    return (

        <motion.div className="super"
        initial={{scaleX : 0,transition:{ duration:0.3}}}
        animate={{scaleX : 1,transition:{ duration:0.3}}}
        exit={{scaleX : 0,transition:{ duration:0.3}}}
        >
            <div id="wrapper" >
            <div id="page-content-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div id="Projects" className="container">
                                <div className="about-super">
                                    <div className="page-head">
                                        <h1>Projects</h1>
                                        <span> <i className="fa fa-briefcase fa-2x" aria-hidden="true"></i></span>
                                    </div>
                                </div>
                                <div className="bor"></div>

                                <div className='suu'>
                                    <div className="card__collection clear-fix">
                                    <div className='info1'>
                                    <h2 className="mb-20">Internship Task</h2> 
                                    <p>
                                    Banking System is one of my Internship Tasks where we can make a transaction between multiple users. 
                                    The transaction history section will keep the record of every transaction made by the user and auto-update the
                                     balance after each transaction. 
                                     Click <span><a href="http://cash-management.epizy.com/?i=1" target="_blank">Project Preview </a></span> for the demo <br />
                                    Project Duration : Jan' 21 - Feb' 21
                                    </p>
                                    </div>
                                    <div className="cards cards--three">
                                  
                                            <img alt="NickPic" src={pro1} />
                                            <span className="cards--three__rect-1">
                                                <span className="shadow-1"></span>
                                                <p><a href="http://cash-management.epizy.com/?i=1" target="_blank">Visit Website</a></p>
                                            </span>
                                            <span className="cards--three__rect-2">
                                                <span className="shadow-2"></span>
                                            </span>
                                            <span className="cards--three__circle"></span>
                                            <ul className="cards--three__list">
                                            <li><i> &#10024;</i></li>
                                                <li><i>&#10024;</i></li>
                                                <li><i> &#10024;</i></li>
                                       
                                            </ul>
                                        </div>
                                    </div>
                                    <br /> <br />
                                    <div className="card__collection clear-fix">
                                    <div className='info1'>
                                    <h2 className="mb-20">Virtual Lab</h2> 
                                    <p>
                                    A virtual lab is a project event organized by IIT Bombay, 
                                    The concept of this project is to make a virtual lab for all university students. 
                                    The domain of this project is IOT(Internet Of Things) with a group of 2 students.
                                     Click <span> <a href="https://iot-vlab.netlify.app/" target="_blank">Project Preview </a></span> for the demo. 
                                     <br />
                                    Project Duration : Mar'21 - May'21
                                    </p>
                                    </div>
                                    
                                        <div className="cards cards--two">
                                            <img alt="NickPic" src={pro3} />
                                            <span className="cards--two__rect"></span>
                                            <span classNames="cards--two__tri"></span>
                                            <p><a href="https://iot-vlab.netlify.app/" target="_blank">Visit Website</a></p>
                                            {/* <ul className="cards__list">
                                                <li><i className="fab fa-facebook-f"></i></li>
                                                <li><i className="fab fa-twitter"></i></li>
                                                <li><i className="fab fa-instagram"></i></li>
                                                <li><i className="fab fa-linkedin-in"></i></li>
                                            </ul> */}
                                        </div>
                                    </div>
                                    <br /><br />
                                    <div className="card__collection clear-fix">
                                    <div className='info1'>
                                    <h2 className="mb-20">Portfolio Version 1.0.0</h2> 
                                    <p>
                                    Portfolio Version 1.0 represents the previous version of a portfolio of Nikhil Shinde.
                                    Unlike this portfolio, V 1.0 was purely made from scratch with the help of HTML, CSS, and JS.  <br />
                                    Click <span><a href="http://say-hello-to-nikhil-shinde.epizy.com/?i=1" target="_blank">Project Preview </a> </span> for the demo.
                                    </p>
                                    </div>
                                    <div className="cards cards--three">
                                            <img alt="NickPic" src={pro2} />
                                            <span className="cards--three__rect-1">
                                                <span className="shadow-1"></span>
                                                <p><a href="http://say-hello-to-nikhil-shinde.epizy.com/?i=1" target="_blank">Visit Website</a></p>
                                            </span>
                                            <span className="cards--three__rect-2">
                                                <span className="shadow-2"></span>
                                            </span>
                                            <span className="cards--three__circle"></span>
                                            <ul className="cards--three__list">
                                                <li><i className="fab fa-facebook-f"></i></li>
                                                <li><i className="fab fa-twitter"></i></li>
                                                <li><i className="fab fa-linkedin-in"></i></li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* <div className="cards cards--three">
                                            <img alt="NickPic" src={pro1} />
                                            <span className="cards--three__rect-1">
                                                <span className="shadow-1"></span>
                                                <p>Chris Levnon</p>
                                            </span>
                                            <span className="cards--three__rect-2">
                                                <span className="shadow-2"></span>
                                            </span>
                                            <span className="cards--three__circle"></span>
                                            <ul className="cards--three__list">
                                                <li><i className="fab fa-facebook-f"></i></li>
                                                <li><i className="fab fa-twitter"></i></li>
                                                <li><i className="fab fa-linkedin-in"></i></li>
                                            </ul>
                                        </div>

                                        <div className="cards cards--three">
                                            <img alt="NickPic" src={pro3} />
                                            <span className="cards--three__rect-1">
                                                <span className="shadow-1"></span>
                                                <p>Chris Levnon</p>
                                            </span>
                                            <span className="cards--three__rect-2">
                                                <span className="shadow-2"></span>
                                            </span>
                                            <span className="cards--three__circle"></span>
                                            <ul className="cards--three__list">
                                                <li><i className="fab fa-facebook-f"></i></li>
                                                <li><i className="fab fa-twitter"></i></li>
                                                <li><i className="fab fa-linkedin-in"></i></li>
                                            </ul>
                                        </div> */}



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
export default Projects
