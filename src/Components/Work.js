import React, {useState} from 'react';
import '../Styles/Work.scss'
import { Icon } from '@iconify/react';

const Work = () => {
  const [isShown, setIsShown] = useState(false);
  return(
      <div className='work' id='my-work'>
        <h1 className='work-title'>My Work</h1>
        <div className='projects'>
            <div className='proj-grid' onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
              {
                isShown===false && (
                  <div className='proj-cont'>
                    <Icon icon="akar-icons:folder" width="40" height="40" className='proj-folder'/>
                    <Icon icon="bx:bx-link-external" width="27" height="27" className='proj-ext'/>
                    <Icon icon="akar-icons:github-fill" width="27" height="27"  className='proj-git' />
                    
                    <h2>Portfolio Website</h2>
                    <p>This is my personal website built with react and hosted on github pages</p>
                    <ul className='dep-bot'>
                      <li>React.js</li>
                      <li>SCSS</li>
                      <li>JS</li>
                    </ul>
                  </div>

                )
              }
              {
                isShown && (
                  <div className='proj-hover'>
                    <img src={require("../Assets/snap1.PNG") }alt="none" />
                    <h2>Portfolio Website</h2>
                    <Icon icon="bx:bx-link-external" width="27" height="27" className='proj-ext ext-hover'/>
                    <Icon icon="akar-icons:github-fill" width="27" height="27"  className='proj-git git-hover' />
                  </div>
                )
              }
              
            </div>
            <div className='proj-grid'>
              <Icon icon="akar-icons:folder" width="40" height="40" className='proj-folder'/>
              <Icon icon="akar-icons:github-fill" width="27" height="27"  className='proj-git' />
              <h2>B&W Image colorizer</h2>
              <p>An image colorizer that produces color accurate and artifact-free images built with cGAN</p>
              <ul className='dep-bot'>
                <li>Colab</li>
                <li>Fastai</li>
              </ul>
            </div>
            <div className='proj-grid'>
              <Icon icon="akar-icons:folder" width="40" height="40" className='proj-folder'/>
              <Icon icon="akar-icons:github-fill" width="27" height="27"  className='proj-git' />
              <h2>Simple JS projects</h2>
              <p>Collection of small JS projects that I worked on to polish my JS skills.</p>
              <ul className='dep-bot'>
                <li>JS</li>
                <li>HTML/CSS</li>
              </ul>
            </div>
        </div>
      </div>
  );
}

export default Work;
