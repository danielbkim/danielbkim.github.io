
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";

import "./app.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections">
          <Intro />
          <Projects />
          <Contact />
        </div>
    </div>
  );
};

export default App;
