import React from "react";

const Projects = ({ img_1, img_2, img_3, img_4 }) => {
  return (
    <div className="container">
      <div className="project-tilte pb-5">
        <h1
          className="wow slideInLeft text-uppercase title-h1 text-white text-center"
          data-wow-delay="1s"
        >
          My Projects
        </h1>
      </div>
      <div className="button-group">
        {/*<button type="button" className="active" id="btn1">All</button>
                       <button type="button" data-filter=".capstone1">Capstone-1</button>
                      <button type="button" data-filter=".capstone2">Capstone-2</button>
                      <button type="button" data-filter=".capstone3">Capstone-3</button>
                      <button type="button" data-filter=".upcoming">Upcoming</button> */}
      </div>
      <div className="row grid text-white">
        <div className="col-lg-4 col-md-6 col-sm-12 element-item capstone1">
          <div className="our-project wow zoomInUp" data-wow-delay="2s">
            <div className=" img">
              <a
                className="test-popup-link"
                href="https://jhay03.gitlab.io/b49_capstone1/"
                target="_blank"
              >
                <img src={img_1} alt="Services-1" />
              </a>
            </div>
            <div className="title py-4 text-center text-white">
              <h4 className="text-uppercase">Auto-Care</h4>
              <span>Static Website</span>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 element-item capstone2">
          <div className="wow zoomInUp our-project" data-wow-delay="2s">
            <div className=" img">
              <a
                className="test-popup-link"
                href="https://fast-hamlet-89907.herokuapp.com/"
                target="_blank"
              >
                <img src={img_2} alt="portfolio-2" />
              </a>
            </div>
            <div className="title py-4 text-center text-white">
              <h4 className="text-uppercase">Book on the Go</h4>
              <span>Dynamic Website</span>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 element-item capstone3">
          <div className="wow zoomInUp our-project" data-wow-delay="2s">
            <div className="img">
              <a
                className="test-popup-link"
                href="https://ramresort.netlify.app/"
                target="_blank"
              >
                <img src={img_3} alt="portfolio-3" />
              </a>
            </div>
            <div className="title py-4 text-center text-white">
              <h4 className="text-uppercase">RAM Resort</h4>
              <span>Full-stack Website</span>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 element-item pareserve">
          <div className="wow zoomInUp our-project" data-wow-delay="2s">
            <div className=" img">
              <a
                className="test-popup-link"
                href="http://pareserve.herokuapp.com/"
                target="_blank"
              >
                <img src={img_4} alt="pareserve" />
              </a>
            </div>
            <div className="title py-4 text-center text-white">
              <h4 className="text-uppercase">PARES-ERVE</h4>
              <span>E-commerce</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
