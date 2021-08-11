import React from 'react';
import Navbar from './Navbar';
import ProgressBar from './ProgressBar';
import styled from 'styled-components';

const HeaderStyles = styled.div`
  .header {
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
    background-color: #f1f1f1;
  }
`

const Header = () => {
  return (
    <HeaderStyles className="header">
      <Navbar />
      <ProgressBar />
    </HeaderStyles>
  )
}

export default Header
