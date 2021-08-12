import React from 'react';
import { NavbarStyles } from './NavbarStyles';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <NavbarStyles className="nav-container">
      <div className="logo-container">
        <img src={ logo } alt="logo"></img>
        <div className="name">Daniel B. Kim</div>
      </div>
      <div className="nav-links">
        <ul>
          {/* <li><a href="">About</a></li>
          <li><a href="">Work</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="#">Hire Now!</a></li> */}
        </ul>
      </div>
    </NavbarStyles>

  )
};

export default Navbar;