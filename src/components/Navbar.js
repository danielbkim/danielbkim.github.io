import React from 'react';
// import '../App.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
  
`


const Navbar = () => {
  window.onscroll = function() { dynamicProgress() };

  const dynamicProgress = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }



  return (
    <div class="header h-12 w-12">
      <nav class="h-12 w-12">
        Daniel B. Kim
      </nav>
      <div class="progress-container">
        <div class="progress-bar" id="myBar"></div>
      </div>
    </div>
  )
}

export default Navbar;