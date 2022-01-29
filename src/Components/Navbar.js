import React from 'react';
import '../Styles/Navbar.css'
import { Line } from 'draw-shape-reactjs';
const Navbar = () => {
  return(
    <div className='navbar'>
      <nav className='navbar-nav'>
        <ul className='navbar-links'>
          <li className='nav-item'><a href="#about-me" className='nav-link'>About</a></li>
          <li className='nav-item'><a href="#my-work" className='nav-link'>Work</a></li>
          <li className='nav-item'><a href="#sample" className='nav-link'>Contact</a></li>
          <li className='nav-item button'><a href="#sample" className='nav-link button-neon'>Resume</a></li>
        </ul>
        <div className='nav-line'>
            <Line  from={[1850, 200]} to={[1850, 0]} color='#ffb7c5' />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
