import React from 'react';
import '../Styles/Intro.css';
import { Icon } from '@iconify/react';
import About from '../Components/About';
import Work from '../Components/Work';
import Contact from '../Components/Contact';
import { motion } from "framer-motion";
const Intro = () => {

  return(
      <div className='intro' id='start-page'>
          <motion.div className='text-cont' id='sample' initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 2, ease:'easeIn'}}>
            <p>Hello, I'm <span className='text-name'>Vijaya raghavan</span>,
            you can<br/> call me Vijay. I love building websites and <br/> Deep Learning.</p>
          </motion.div>
          <div className='arrow-div'>
            <a href="#about-me"><Icon icon="akar-icons:arrow-down" className='arrow'/></a>
          </div>
          <div className='sections'>
            <About />
            <Work />
            <Contact />
          </div>
      </div>
  );
}

export default Intro;
