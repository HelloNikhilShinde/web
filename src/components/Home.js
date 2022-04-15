import React from "react";
// import HomeBG from '../PICS/HomeBG.jpg'
import './StyleHome.css'
import Typewriter from "typewriter-effect";
import TypeWriterEffect from 'typewriter-effect';
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import {motion} from 'framer-motion';;
function Home() {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Computer Engineer", "Analyst", "Software Developer", "UI/UX Designer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 200,
      typeSpeed: 50,
      backSpeed: 100,
      backDelay: 80,
      loop: true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (


   


   <motion.div 
    className='super' 
    initial={{scaleX : 0,transition:{ duration:0.3}}}
    animate={{scaleX : 1,transition:{ duration:0.3}}}
    exit={{scaleX : 0,transition:{ duration:0.3}}}
    >  

     <div id="wrapper" className="uniq">
      
      <div id="page-content-wrapper">
    
        <div className="container-fluid">
       
          <div className="row">
        
            <div className="col-lg-12">
            
              <div id="Home" className="container">
              <div className="main-cont" > 
                  <h1>Nikhil <span>Shinde</span> </h1>
                  <h2>I am <span className="input" ref={el}></span></h2>
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
export default Home;
