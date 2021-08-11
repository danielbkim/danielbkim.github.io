import React from 'react'

const ProgressBar = () => {
  window.onscroll = function() { dynamicProgress() };

  const dynamicProgress = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  };
  return (
    <div className="progress-container">
      <div className="progress-bar" id="myBar"></div>
    </div>
  )
}

export default ProgressBar
