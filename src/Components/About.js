import React from "react";
import "../Styles/About.scss";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="about" id="about-me">
      <h1 className="about-title">About me</h1>
      <p className="about-cont">
        Hey! My name is Vijay and I love creating stuff on the internet and
        teaching machines to do stuff. I'm currently studying Computer Science
        and Engineering at Saveetha Engineering College. I love to problem-solve
        my way out of things and I have a profound interest in full-stack
        development, machine learning, computer vision, and everything in
        between.
      </p>
      <div className="diff-rec">
        <div className="col-1">
          <motion.svg
            whileHover={{ scale: 1.2, rotate: 360 }}
            className="svg-res"
            width="144"
            height="147"
            viewBox="0 0 144 147"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_106_33)">
              <path
                d="M4 67.5096L71.5097 -5.10638e-05L139.019 67.5096L71.5097 135.019L4 67.5096Z"
                fill="#08D9D6"
              />
            </g>
            <path
              d="M58.6667 56.9148V73.5814H67V66.9148C67 66.0307 67.3512 65.1829 67.9763 64.5577C68.6014 63.9326 69.4493 63.5814 70.3333 63.5814H78.6667C79.5507 63.5814 80.3986 63.9326 81.0237 64.5577C81.6488 65.1829 82 66.0307 82 66.9148V73.5814H85.3333V56.9148H58.6667ZM52 80.2481V76.9148H58.6667C57.7826 76.9148 56.9348 76.5636 56.3096 75.9384C55.6845 75.3133 55.3333 74.4655 55.3333 73.5814V56.9148C55.3333 56.0307 55.6845 55.1829 56.3096 54.5577C56.9348 53.9326 57.7826 53.5814 58.6667 53.5814H85.3333C86.2174 53.5814 87.0652 53.9326 87.6904 54.5577C88.3155 55.1829 88.6667 56.0307 88.6667 56.9148V73.5814C88.6667 74.4655 88.3155 75.3133 87.6904 75.9384C87.0652 76.5636 86.2174 76.9148 85.3333 76.9148H92V80.2481H82C82 81.1321 81.6488 81.98 81.0237 82.6051C80.3986 83.2302 79.5507 83.5814 78.6667 83.5814H70.3333C69.4493 83.5814 68.6014 83.2302 67.9763 82.6051C67.3512 81.98 67 81.1321 67 80.2481H52ZM71.1667 80.2481C70.9457 80.2481 70.7337 80.3359 70.5774 80.4922C70.4211 80.6484 70.3333 80.8604 70.3333 81.0814C70.3333 81.3024 70.4211 81.5144 70.5774 81.6707C70.7337 81.827 70.9457 81.9148 71.1667 81.9148C71.3877 81.9148 71.5996 81.827 71.7559 81.6707C71.9122 81.5144 72 81.3024 72 81.0814C72 80.8604 71.9122 80.6484 71.7559 80.4922C71.5996 80.3359 71.3877 80.2481 71.1667 80.2481ZM77.8333 80.2481C77.6123 80.2481 77.4004 80.3359 77.2441 80.4922C77.0878 80.6484 77 80.8604 77 81.0814C77 81.3024 77.0878 81.5144 77.2441 81.6707C77.4004 81.827 77.6123 81.9148 77.8333 81.9148C78.0543 81.9148 78.2663 81.827 78.4226 81.6707C78.5789 81.5144 78.6667 81.3024 78.6667 81.0814C78.6667 80.8604 78.5789 80.6484 78.4226 80.4922C78.2663 80.3359 78.0543 80.2481 77.8333 80.2481ZM73.6667 80.2481V81.9148H75.3333V80.2481H73.6667ZM70.3333 66.9148V78.5814H78.6667V66.9148H70.3333Z"
              fill="#323232"
            />
            <defs>
              <filter
                id="filter0_d_106_33"
                x="0"
                y="0"
                width="143.019"
                height="146.019"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="7" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_106_33"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_106_33"
                  result="shape"
                />
              </filter>
            </defs>
          </motion.svg>
          <h2 className="col-subs">Responsive</h2>
          <div className="sub-exp">
            I build my websites to work
            <br /> on any device, big or small
          </div>
          <h2 className="lang">Languages</h2>
          <div className="list">
            <ul className="dev-list">
              <li>React.js</li>
              <li>Node.js</li>
              <li>Git</li>
              <li>Github</li>
              <li>Figma</li>
              <li>Bootstrap</li>
              <li>Firebase</li>
              <li>Colab</li>
              <li>Jupyter</li>
            </ul>
          </div>
        </div>
        <div className="col-2">
          <div className="col-title">I'm all about</div>
          <motion.svg
            whileHover={{ scale: 1.2, rotate: 360 }}
            className="svg-dyn"
            width="144"
            height="147"
            viewBox="0 0 144 147"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_106_34)">
              <path
                d="M4 67.5096L71.5097 -5.10638e-05L139.019 67.5096L71.5097 135.019L4 67.5096Z"
                fill="#08D9D6"
              />
            </g>
            <path
              d="M85.8517 51.9842C85.5941 51.8088 85.2952 51.7035 84.9845 51.6787C84.6738 51.6539 84.362 51.7104 84.0798 51.8426L53.6215 66.1759C53.3101 66.3227 53.0476 66.5559 52.8654 66.8479C52.6831 67.1398 52.5888 67.4781 52.5937 67.8223C52.5986 68.1664 52.7025 68.5019 52.8931 68.7885C53.0836 69.0751 53.3526 69.3008 53.668 69.4386L63.343 73.6723V85.7159L73.7992 78.2482L82.3347 81.982C82.5982 82.0974 82.8856 82.1477 83.1727 82.1286C83.4597 82.1094 83.7379 82.0214 83.9838 81.8721C84.2297 81.7227 84.4359 81.5163 84.5852 81.2704C84.7344 81.0244 84.8223 80.7462 84.8412 80.4591L86.6329 53.5841C86.6525 53.2726 86.5909 52.9613 86.4539 52.6808C86.317 52.4003 86.1095 52.1603 85.8517 51.9842V51.9842ZM81.4335 77.6767L71.9932 73.5451L77.6764 62.4242L63.9719 70.0388L58.7187 67.7401L82.8543 56.3809L81.4335 77.6767V77.6767Z"
              fill="#323232"
            />
            <defs>
              <filter
                id="filter0_d_106_34"
                x="0"
                y="0"
                width="143.019"
                height="146.019"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="7" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_106_34"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_106_34"
                  result="shape"
                />
              </filter>
            </defs>
          </motion.svg>
          <h2 className="col-subs">Dynamic</h2>
          <div className="sub-exp">
            I like to add some life to
            <br /> my websites
          </div>
          <h2 className="dev">Dev Tools</h2>
          <div className="list">
            <ul className="dev-list">
              <li>Python</li>
              <li>Javascript</li>
              <li>C</li>
              <li>C++</li>
              <li>Java</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Sass</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>
        <div className="col-3">
          <motion.svg
            whileHover={{ scale: 1.2, rotate: 360 }}
            className="svg-cre"
            width="144"
            height="147"
            viewBox="0 0 144 147"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_106_35)">
              <path
                d="M4 67.7921L71.5097 -4.94821e-05L139.019 67.7921L71.5097 135.584L4 67.7921Z"
                fill="#08D9D6"
              />
            </g>
            <path
              d="M63.8005 79.5815H77.238V82.2803H63.8005V79.5815Z"
              fill="#323232"
            />
            <path
              d="M66.488 84.9791H74.5505V87.6779H66.488V84.9791Z"
              fill="#323232"
            />
            <path
              d="M70.5192 49.8954C66.9554 49.8954 63.5375 51.317 61.0175 53.8476C58.4974 56.3782 57.0817 59.8104 57.0817 63.3891C56.9908 65.3502 57.3649 67.3049 58.1732 69.0925C58.9815 70.8801 60.2009 72.4494 61.7311 73.6713C63.0748 74.9262 63.8005 75.6414 63.8005 76.8828H66.488C66.488 74.4 64.9964 73.0101 63.5451 71.6743C62.2892 70.7085 61.2883 69.4482 60.63 68.0037C59.9717 66.5593 59.6761 64.9749 59.7692 63.3891C59.7692 60.5261 60.9018 57.7804 62.9178 55.7559C64.9338 53.7315 67.6681 52.5941 70.5192 52.5941C73.3703 52.5941 76.1046 53.7315 78.1206 55.7559C80.1366 57.7804 81.2692 60.5261 81.2692 63.3891C81.3607 64.976 81.0631 66.5613 80.4024 68.0058C79.7418 69.4503 78.7382 70.7099 77.4798 71.6743C76.042 73.0236 74.5505 74.373 74.5505 76.8828H77.238C77.238 75.6414 77.9501 74.9262 79.3073 73.6578C80.8364 72.438 82.0553 70.871 82.8636 69.0858C83.6719 67.3005 84.0465 65.3481 83.9567 63.3891C83.9567 61.6171 83.6091 59.8624 82.9338 58.2253C82.2585 56.5881 81.2687 55.1006 80.021 53.8476C78.7732 52.5946 77.2918 51.6007 75.6615 50.9225C74.0312 50.2444 72.2838 49.8954 70.5192 49.8954V49.8954Z"
              fill="#323232"
            />
            <defs>
              <filter
                id="filter0_d_106_35"
                x="0"
                y="0"
                width="143.019"
                height="146.584"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="7" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_106_35"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_106_35"
                  result="shape"
                />
              </filter>
            </defs>
          </motion.svg>
          <h2 className="col-subs">Creative</h2>
          <div className="sub-exp">
            Emphasis on easy to use
            <br /> and intuitive UX/UI
          </div>
          <h2 className="oth">Other skills</h2>
          <div className="list">
            <ul className="dev-list">
              <li>Photoshop</li>
              <li>After Effects</li>
              <li>Machine Learning</li>
              <li>Deep Learning</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
