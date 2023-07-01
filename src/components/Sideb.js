import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import NickPic from '../PICS/NickPic.jpg'
import { Link } from 'react-router-dom';
import ClickSound from './ButtonClickSound.mp3'

function audio() {
    const audio = new Audio(ClickSound);
    audio.play();
}
function Sideb() {
    const [checked, setChecked] = React.useState(false);
    const handleClick = () => setChecked(!checked);
    return (
        <div className="grand">

            <div id="wrapper">
                <div id="sidebar-wrapper">
                    <ul className="sidebar-nav">
                        {/* <audio id="c-sound" src="ButtonClickSound.mp3"></audio> */}
                        <img alt="NickPic" src={NickPic} />
                        <li class="sidebar-brand">
                            <a href="#">
                                <div class="mn"><b>Nikhil Shinde</b></div>
                            </a>
                        </li>
                        <li>
                            <a onClick={audio}>
                                < Link to="/">

                                    <i className="fa fa-home" aria-hidden="true"></i> &nbsp; Home
                                </Link>

                            </a>
                            <div className="bor"></div>
                        </li>
                        <li >

                            <a onClick={audio}>
                                < Link to='/About'>
                                    <i className="fa fa-user" aria-hidden="true" ></i> &nbsp; About Me
                                </Link>
                            </a>
                            <div className="bor"></div>

                        </li>
                        <li>
                            <a onClick={audio}>
                                < Link to='/Projects'>
                                    <i className="fa fa-briefcase" aria-hidden="true">  </i> &nbsp; Projects
                                </Link>
                            </a>
                            <div className="bor"></div>
                        </li>
                        <li>
                            <a onClick={audio}>
                                < Link to='/Resume'>
                                    <i className="fa fa-id-card mx-20" aria-hidden="true"  > </i> &nbsp; Resume
                                </Link>
                            </a>
                            <div className="bor"></div>
                        </li>
                        <li>
                            <a onClick={audio}>
                                < Link to="/Contact">
                                    <i className="fa fa-phone" aria-hidden="true"></i> &nbsp; Contact
                                </Link>
                            </a>
                            <div className="bor"></div>
                        </li>
                        <div className="social_media">
                            <a href="https://www.linkedin.com/in/nikhil-shinde-6348111a0" target='_blank' class="fa fa-linkedin" onclick={audio}></a>
                            <a href="mailto:nikhilshinde221@gmail.com" target='_blank' class="fa fa-google" onclick={audio}></a>
                            <a href="https://www.facebook.com/profile.php?id=100007590307609" target='_blank' class="fa fa-facebook" onclick={audio}></a>
                            <a onclick={audio} href="https://instagram.com/im_nick.s" target='_blank' class="fa fa-instagram" ></a>
                            <br />
                            Created by &copy; Nikhil Shinde 	&#10084; <br />
                            All Rights Reserved.
                        </div>
                    </ul>


                </div>
            </div>

            <nav>
                <div className="navbar">
                    <div className="container nav-container">
                        {/* <div className="partition"> */}
                        <input className="checkbox" type="checkbox" name="checkbox" id="checkbox" onClick={handleClick} checked={checked} />

                        <div className="hamburger-lines">
                            <span className="line line1"></span>
                            <span className="line line2"></span>
                            <span className="line line3"></span>

                        </div>
                        <div className="myname">
                            <h2>NIKHIL SHINDE</h2>
                        </div>
                        {/* </div>
         */}
                        <div className="menu-items" >
                            <li>
                                <a onClick={() => { setChecked(!checked); audio(); }} >
                                    < Link to="/">
                                        <i className="fa fa-home" aria-hidden="true"></i> &nbsp; Home
                                    </Link>

                                </a>
                                {/* <div className="bor"></div> */}
                            </li>
                            <li >

                                <a onClick={() => { setChecked(!checked); audio(); }}>
                                    < Link to='/About'>
                                        <i className="fa fa-user" aria-hidden="true"></i> &nbsp; About Me
                                    </Link>

                                </a>
                                {/* <div className="bor"></div> */}

                            </li>
                            <li>
                                <a onClick={() => { setChecked(!checked); audio(); }}>
                                    < Link to='/Projects'>
                                        <i className="fa fa-briefcase" aria-hidden="true"></i> &nbsp; Projects
                                    </Link>
                                </a>
                                {/* <div className="bor"></div> */}
                            </li>
                            <li>
                                <a onClick={() => { setChecked(!checked); audio(); }}>
                                    < Link to='/Resume'>
                                        <i className="fa fa-id-card mx-20" aria-hidden="true" > </i> &nbsp; Resume
                                    </Link>
                                </a>
                                {/* <div className="bor"></div> */}
                            </li>
                            <li>
                                <a onClick={() => { setChecked(!checked); audio(); }}>
                                    < Link to="/Contact">
                                        <i className="fa fa-phone" aria-hidden="true"></i> &nbsp; Contact
                                    </Link>
                                </a>
                                {/* <div className="bor"></div> */}
                            </li>
                            <div className="social_media">
                                <a href="https://www.linkedin.com/in/nikhil-shinde-6348111a0" target='_blank' class="fa fa-linkedin" onclick={audio}></a>
                                <a href="mailto:nikhilshinde221@gmail.com" target='_blank' class="fa fa-google" onclick={audio}></a>
                                <a href="https://www.facebook.com/profile.php?id=100007590307609" target='_blank' class="fa fa-facebook" onclick={audio}></a>
                                <a href="https://instagram.com/im_nick.s" target='_blank' class="fa fa-instagram" ></a>
                                <br />
                                Created by &copy; Nikhil Shinde 	&#10084; <br />
                                All Rights Reserved.
                            </div>
                        </div>
                    </div>
                </div>

            </nav>


        </div>

    );

}
export default Sideb;