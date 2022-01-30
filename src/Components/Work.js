import React, { useEffect, useState } from "react";
import "../Styles/Work.scss";
import { Icon } from "@iconify/react";
import AOS from "aos";
import "aos/dist/aos.css";

const Work = () => {
  const [firstHover, setHover1] = useState(false);
  const [secondHover, setHover2] = useState(false);
  const [thirdHover, setHover3] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="work" id="my-work" data-aos="fade-up">
      <h1 className="work-title">My Work</h1>
      <div className="projects">
        <div
          className="proj-grid"
          onMouseEnter={() => setHover1(true)}
          onMouseLeave={() => setHover1(false)}
        >
          {firstHover === false && (
            <div className="proj-cont">
              <Icon
                icon="akar-icons:folder"
                width="40"
                height="40"
                className="proj-folder"
              />
              <Icon
                icon="bx:bx-link-external"
                width="27"
                height="27"
                className="proj-ext"
              />
              <Icon
                icon="akar-icons:github-fill"
                width="27"
                height="27"
                className="proj-git"
              />

              <h2>Portfolio Website</h2>
              <p>
                This is my personal website built with react and hosted on
                github pages
              </p>
              <ul className="dep-bot">
                <li>React.js</li>
                <li>SCSS</li>
                <li>JS</li>
              </ul>
            </div>
          )}
          {firstHover && (
            <div className="proj-hover hover1">
              <img src={require("../Assets/snap1.PNG")} alt="none" />
              <h2>Portfolio Website</h2>
              <Icon
                icon="bx:bx-link-external"
                width="27"
                height="27"
                className="proj-ext ext-hover"
              />
              <a
                href="https://github.com/yoursenpai69/portfolio_website.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  icon="akar-icons:github-fill"
                  width="27"
                  height="27"
                  className="proj-git git-hover"
                />
              </a>
            </div>
          )}
        </div>
        <div
          className="proj-grid"
          onMouseEnter={() => setHover2(true)}
          onMouseLeave={() => setHover2(false)}
        >
          {secondHover === false && (
            <div className="proj-cont">
              <Icon
                icon="akar-icons:folder"
                width="40"
                height="40"
                className="proj-folder"
              />
              <Icon
                icon="akar-icons:github-fill"
                width="27"
                height="27"
                className="proj-git"
              />
              <h2>B&W Image colorizer</h2>
              <p>
                An image colorizer that produces color accurate and
                artifact-free images built with cGAN
              </p>
              <ul className="dep-bot">
                <li>Colab</li>
                <li>Fastai</li>
              </ul>
            </div>
          )}
          {secondHover && (
            <div className="proj-hover hover2">
              <img
                src={require("../Assets/snap2.png")}
                alt="output from colorizer"
              />
              <h2>B&W Image colorizer</h2>
              <a
                href="https://github.com/yoursenpai69/Image-colorizer-deeplearning.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  icon="akar-icons:github-fill"
                  width="27"
                  height="27"
                  className="proj-git git-hover"
                />
              </a>
            </div>
          )}
        </div>
        <div
          className="proj-grid"
          onMouseEnter={() => setHover3(true)}
          onMouseLeave={() => setHover3(false)}
        >
          {thirdHover === false && (
            <div className="proj-cont">
              <Icon
                icon="akar-icons:folder"
                width="40"
                height="40"
                className="proj-folder"
              />
              <Icon
                icon="akar-icons:github-fill"
                width="27"
                height="27"
                className="proj-git"
              />
              <h2>Simple JS projects</h2>
              <p>
                Collection of small JS projects that I worked on to polish my JS
                skills.
              </p>
              <ul className="dep-bot">
                <li>JS</li>
                <li>HTML/CSS</li>
              </ul>
            </div>
          )}
          {thirdHover && (
            <div className="proj-hover hover3">
              <img src={require("../Assets/snap3.PNG")} alt="sample projects" />
              <h2>Simple JS projects</h2>
              <a
                href="https://github.com/yoursenpai69/Simple-JS-projects.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  icon="akar-icons:github-fill"
                  width="27"
                  height="27"
                  className="proj-git git-hover"
                />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
