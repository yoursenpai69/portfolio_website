import React from "react";
import { Icon } from "@iconify/react";
import "../Styles/Links.css";
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
const Links = () => {
  return (
    <BreakpointProvider>
      <Breakpoint className="link-comp" medium up>
        <div>
          <div className="link-icons">
            <a
              href="https://codepen.io/yoursenpai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon="akar-icons:codepen-fill"
                width="30"
                height="30"
                className="link-icon"
                id="codepen"
              />
            </a>
            <a
              href="https://www.instagram.com/yoursenpai69/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <Icon
                icon="akar-icons:instagram-fill"
                width="30"
                height="30"
                className="link-icon"
                id="instagram"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/vijaya-raghavan-v-3190b41a3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon="akar-icons:linkedin-fill"
                width="30"
                height="30"
                className="link-icon"
                id="linkedin"
              />
            </a>
            <a
              href="https://github.com/yoursenpai69"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon="akar-icons:github-fill"
                width="30"
                height="30"
                className="link-icon"
                id="github"
              />
            </a>
          </div>
          <div className="line-div">
            <svg height="300" width="100">
              <line
                className="line"
                x1="70"
                y1="150"
                x2="70"
                y2="400"
                stroke="#ffb7c5"
              />
            </svg>
          </div>
        </div>
      </Breakpoint>
    </BreakpointProvider>
  );
};

export default Links;
