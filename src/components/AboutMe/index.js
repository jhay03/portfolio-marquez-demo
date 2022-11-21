import React from "react";
import { Fragment } from "react";

const AboutMe = ({ Me }) => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="about-image">
              <div className="wow flipInX part" data-wow-delay="2s">
                <div className="octo ">
                  <div className="octo1">
                    <img src={Me} alt="Myself" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 about-title">
            {/* <h2 className="wow lightSpeedIn text-uppercase pt-5">
							<span>Let me</span>
							<span>Introduce</span>
							<span>Myself</span>
						</h2> */}
            <div className="paragraph py-4 w-75">
              <p className="wow fadeInLeft para" data-wow-delay="1s">
                Hi, My name is Romeo Marquez. I am a Full Stack Web Developer
                and UI/UX enthusiast.
              </p>
              <p className="wow fadeInRight para" data-wow-delay="2s">
                You can see some of the things I have worked on over on{" "}
                <a href="#section-3" className="italicText1">
                  My Project
                </a>
              </p>

              <p className="wow fadeInDownBig para" data-wow-delay="2s">
                For any works and projects feel free to contact me on{" "}
                <a href="#section-5" className="italicText1">
                  Contact Page
                </a>
              </p>
            </div>
            <button
              className="wow flipInX btn button primary-button text-uppercase"
              data-wow-delay="3s"
              onClick={() =>
                window.open(require("../../CV/RomeoMarquez_2022.pdf"), "_none")
              }
            >
              Download CV <i className="fas fa-cloud-download-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutMe;
