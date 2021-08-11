import React from 'react';
import styled from 'styled-components';

// const NavDiv = styled.div`
//   display:
// `


const Navbar = () => {
  window.onscroll = function() { dynamicProgress() };

  const dynamicProgress = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  };



  return (
    <div className="nav-container">
      <div className="header">Daniel B. Kim</div>
      <nav className="nav-links">
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Hire Now!</a></li>
        </ul>
      </nav>
      <div className="progress-container">
        <div className="progress-bar" id="myBar"></div>
      </div>
    </div>
  )
};

export default Navbar;