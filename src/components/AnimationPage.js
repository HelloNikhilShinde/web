import React, { StrictMode } from 'react';
import { HashRouter as Router, Link, useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './Style.css';
import './StyleContact.css';
import About from './About';
import Home from './Home';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import { AnimatePresence } from 'framer-motion';
// import { motion } from 'framer-motion/dist/framer-motion';


function AnimationPage() {

    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path='/' exact element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/resume' element={<Resume />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </AnimatePresence>


    )
}
export default AnimationPage;