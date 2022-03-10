import React, { useState } from "react";
import "../Styles/Intro.css";
import { Icon } from "@iconify/react";
import About from "../Components/About";
import Work from "../Components/Work";
import Contact from "../Components/Contact";
import { motion } from "framer-motion";
import {
  BreakpointProvider,
  Breakpoint,
  setDefaultBreakpoints,
} from "react-socks";
setDefaultBreakpoints([
  { xs: 0 },
  { small: 426 },
  { medium: 769 },
  { large: 1025 },
]);
const Intro = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const switchNav = () => {
    setToggleNav(!toggleNav);
  };
  return (
    <BreakpointProvider>
      <div className="intro" id="start-page">
        <Breakpoint className="mob-nav" small down>
          <nav>
            <div
              onClick={switchNav}
              className={toggleNav ? "hamburger open" : "hamburger"}
            >
              <div className="top"></div>
              <div className="middle"></div>
              <div className="bottom"></div>
            </div>
            {toggleNav && (
              <ul className="nav-list">
                <li className="mob-nav-item">
                  <a href="#about-me" className="mob-nav-link">
                    About
                  </a>
                </li>
                <li className="mob-nav-item">
                  <a href="#my-work" className="mob-nav-link">
                    Work
                  </a>
                </li>
                <li className="mob-nav-item">
                  <a href="#my-contact" className="mob-nav-link">
                    Contact
                  </a>
                </li>
                <li className="mob-nav-item">
                  <a
                    href="https://drive.google.com/uc?export=download&id=1764gdBNgigY3sh3Oq9YJpMcJyif1zgSn"
                    download
                    className="mob-nav-link"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            )}
          </nav>
        </Breakpoint>
        <motion.div
          className="text-cont"
          id="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeIn" }}
        >
          <p>
            Hello, I'm <span className="text-name">Vijaya raghavan</span>, you
            can call me Vijay. I love building websites and Deep Learning.
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
    </BreakpointProvider>
  );
};

export default Intro;
