
import React from 'react';
import Navbar from './components/Navbar/Navbar';

import './App.scss';

function App() {
  return (
    <div className="App">
        <Navbar />
        <div className="sections">
          intro
          highlights
          portfolio
          blog?
          contact
        </div>
    </div>
  );
}

export default App;
