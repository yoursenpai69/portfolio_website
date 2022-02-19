import React from "react";
import "../Styles/Intro.css";
import { Icon } from "@iconify/react";
import About from "../Components/About";
import Work from "../Components/Work";
import Contact from "../Components/Contact";
import { motion } from "framer-motion";

// TO DO:
//     ->I want to the first div to cover the entire visualViewport
//     ->make every table and project grids responsive

const Intro = () => {
  return (
    <div className="intro" id="start-page">
      <motion.div
        className="text-cont"
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeIn" }}
      >
        <p>
          Hello, I'm <span className="text-name">Vijaya raghavan</span>, you can
          call me Vijay. I love building websites and Deep Learning.
        </p>
        <div className="arrow-div">
          <a href="#about-me">
            <Icon icon="akar-icons:arrow-down" className="arrow" />
          </a>
        </div>
      </motion.div>

      <div className="sections">
        <About className="about-sec" />
        <Work />
        <Contact />
      </div>
    </div>
  );
};

export default Intro;
