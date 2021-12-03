import "./navbar.scss";

const Navbar = () => {
  return (
      <div className="navbar">
        <div className="wrapper">
          <div className="left">
            <a href="#intro">Intro</a>
            <a href="#projects">projects</a>
            <a href="#contact">Contact Me</a>
          </div>
          <div className="right"></div>
        </div>
      </div>
  )
};

export default Navbar;