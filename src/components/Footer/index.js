import React, { Fragment } from "react";
import up from "../../images/footer/UP.png";
const Footer = () => {
  return (
    <Fragment>
      <footer className="footer-area">
        <div className="back-to-top text-center py-4 mb-5">
          <a href="#section-1">
            <img src={up} alt="backToTop" className="img-fluid footerImg" />{" "}
          </a>
        </div>
        <div className="container">
          <div className="social text-center">
            <h5 className="text-uppercase">Follow Me</h5>
            <a href="https://www.facebook.com/oreomeo25" target="_blank">
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/romeo-marquez-14264b100"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://gitlab.com/Jhay03" target="_blank">
              <i className="fab fa-gitlab" target="_blank"></i>
            </a>
            <a href="https://www.instagram.com/oreomeo25/" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://github.com/jhay03" target="_blank">
              <i className="fab fa-github"></i>
            </a>
          </div>

          <div className="copyrights text-center">
            <div className="social text-center">
              <p className="text-white">
                You can email me @{" "}
                <a
                  href="https://mail.google.com/mail/u/0/#inbox"
                  target="_blank"
                >
                  romeo.marquez25@gmail.com
                </a>
              </p>
            </div>
            <p className="text-white">
              Copyright 2020 All rights reserved | Created by
              <a href="https://www.facebook.com/oreomeo25">
                <span className="text-white"> Jhay</span>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};
export default Footer;
