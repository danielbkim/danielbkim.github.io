import React from 'react';
import { ProgressBarStyles } from './ProgressBarStyles';

const ProgressBar = () => {
  window.onscroll = function() { dynamicProgress() };

  const dynamicProgress = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  };
  return (
    <ProgressBarStyles className="progress-container">
      <div className="progress-bar" id="myBar"></div>
    </ProgressBarStyles>
  )
}

export default ProgressBar
