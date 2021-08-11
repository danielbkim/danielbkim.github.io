import React from 'react';
import { NavbarStyles } from './NavbarStyles';

const Navbar = () => {
  return (
        <NavbarStyles>
          <div className="header">Daniel B. Kim</div>
          <div className="nav-links">
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Work</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Hire Now!</a></li>
            </ul>
          </div>
        </NavbarStyles>
  )
};

export default Navbar;