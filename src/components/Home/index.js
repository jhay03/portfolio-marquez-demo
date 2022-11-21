import React from "react";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-6 col-sm-12">
            <p className=" wow fadeInDown para text-center text-white">
              Hello, I am <strong className="strong">Romeo Marquez</strong>
            </p>
            <p
              className="wow fadeInLeft para text-center text-white"
              data-wow-delay="1s"
            >
              Not Your Average Software Developer
            </p>
            <p
              className="wow fadeInRight  text-center text-white italicText"
              data-wow-delay="2s"
            >
              "Ready to turn your ideas into reality"
            </p>
            <div className="text-center">
              <a
                href="#section-3"
                className="wow flipInX btn button primary-button text-uppercase mt-5"
                data-wow-delay="3s"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
