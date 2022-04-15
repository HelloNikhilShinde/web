import React, { StrictMode } from 'react';
import './App.css';

import { HashRouter, Route, Link } from "react-router-dom";


// import { Routes, Route } from 'react-router-dom';
import Sideb from './components/Sideb';
import './components/Style.css';
import './components/StyleContact.css';
// import About from './components/About';
// import Home from './components/Home';
// import Resume from './components/Resume';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
import AnimationPage from './components/AnimationPage';

function App() {

  return (


    <HashRouter>
      <div className=''>
        <Sideb />
        <AnimationPage />
        

      </div>
    </HashRouter>


  );
}

export default App;