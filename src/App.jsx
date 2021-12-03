
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";

import "./app.scss";

function App() {
  return (
    <div className="app">
        <Navbar />
        <div className="sections">
          <Intro />
          <Projects />
          <Contact />
          blog?
        </div>
    </div>
  );
};

export default App;
