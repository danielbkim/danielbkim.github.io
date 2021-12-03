import "./navbar.scss";

const Navbar = () => {
  return (
      <div className="navbar">
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">Daniel.</a>
            {/* <a href="#projects">projects</a>
            <a href="#contact">Contact Me</a> */}
          </div>
          <div className="right">
            <div className="hamburger">
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
      </div>
  )
};

export default Navbar;