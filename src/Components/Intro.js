import React from 'react';
import '../Styles/Intro.css';
import { Icon } from '@iconify/react';
const Intro = () => {

  return(
      <div className='intro'>
          <div className='text-cont' id='sample'>
            <p>Hello, I'm <span className='text-name'>Vijaya raghavan</span>,
            you can<br/> call me Vijay. I love building websites and <br/> Deep Learning.</p>
          </div>
          <div className='arrow-div'>
            <Icon icon="akar-icons:arrow-down" className='arrow'/>
          </div>
      </div>
  );
}

export default Intro;
