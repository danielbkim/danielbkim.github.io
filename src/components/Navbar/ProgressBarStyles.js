import styled from 'styled-components';

export const ProgressBarStyles = styled.div`
  .progress-container {
    display: block;
    width: 100%;
    height: 4px;
    background: #ccc;
    position: fixed;
  }

  .progress-bar {
    width: 0%;
    height: 4px;
    background: #04AA6D;
  }
`