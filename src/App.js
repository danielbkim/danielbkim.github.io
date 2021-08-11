
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProgressBar from './components/Navbar/ProgressBar';
import MainDiv from './components/MainDiv';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProgressBar />
      <MainDiv />
    </div>
  );
}

export default App;
