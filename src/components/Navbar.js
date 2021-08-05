import React from 'react';
import '../App.css';

const Navbar = () => {
  window.onscroll = function() { dynamicProgress() };

  const dynamicProgress = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

  return (
    <div class="header">
      <nav>Daniel B. Kim</nav>
      <div class="progress-container">
        <div class="progress-bar" id="myBar"></div>
      </div>
    </div>
  )
}

export default Navbar;