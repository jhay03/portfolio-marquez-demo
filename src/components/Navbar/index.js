import React, { Fragment } from "react";
import Logo from "../../images/Logo/Logo02.png";
const Navbar = () => {
  window.addEventListener("scroll", function () {
    const top = this.scrollY;
    if (top > 0) {
      let myId = document.getElementById("test");
      myId.style.backgroundColor = "rgba(255, 255, 255,0.2)";
      let ulID = document.getElementById("ul");
      ulID.style.webkitTextFillColor = "transparent";
      ulID.style.pointerEvents = "none";
    } else {
      let myId = document.getElementById("test");
      myId.style.backgroundColor = "rgb(255, 255, 255)";
      let ulID = document.getElementById("ul");
      ulID.style.webkitTextFillColor = "black";
      ulID.style.pointerEvents = "auto";
    }
  });

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg pt-1 fixed-top" id="test">
        <a href="#section-1">
          <img src={Logo} alt="logo" className="logoImg img-fluid" />
        </a>
        <button
          className="navbar-toggler navbar-light"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav ml-auto mr-auto" id="ul">
            <li className="nav-item active mr-3">
              <a href="#section-1" className="link">
                Home
              </a>
            </li>
            <li className="nav-item mr-3">
              <a href="#section-2" className="link">
                About
              </a>
            </li>
            <li className="nav-item mr-3">
              <a href="#section-3" className="link">
                My Projects
              </a>
            </li>
            <li className="nav-item mr-3">
              <a href="#section-4" className="link">
                Skills
              </a>
            </li>
            <li className="nav-item mr-3">
              <a href="#section-5" className="link">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
