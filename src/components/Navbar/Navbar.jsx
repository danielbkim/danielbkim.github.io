import "./navbar.scss";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  return (
      <div className={"navbar " + (menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">Daniel.</a>
            {/* <a href="#projects">projects</a>
            <a href="#contact">Contact Me</a> */}
          </div>
          <div className="right">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
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