import React from "react";

const Skills = ({ fe, be, fs, db }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center services-title">
          <h1
            className="wow slideInLeft text-uppercase title-text"
            data-wow-delay="1s"
          >
            Skills
          </h1>
        </div>
      </div>
      <div className="container services-list">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="wow fadeInUp services h-100" data-wow-delay="3s">
              <div className="services-img text-center ">
                <img src={fe} alt="Services-1" />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title text-uppercase">
                  Front End Developer
                </h5>
                <p className="card-text text-secondary">
                  HTML5, CSS3, Javascript
                </p>
                <p className="card-text text-secondary">
                  Frontend Frameworks and Libraries : Bootstrap, Jquery,ReactJS,
                  Sass, ReactJS
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="wow fadeInDown services h-100" data-wow-delay="3s">
              <div className="services-img text-center ">
                <img src={be} alt="Services-2" />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title text-uppercase">Backend Developer</h5>
                <p className="card-text text-secondary">
                  PHP, Javascript, NodeJS.
                </p>
                <p className="card-text text-secondary">
                  Backend Frameworks and Libraries : NodeJS, Express,Laravel,
                  REST
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="wow fadeInUp services h-100" data-wow-delay="3s">
              <div className="services-img text-center ">
                <img src={fs} alt="Services-3" />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title text-uppercase">
                  Fullstack Developer
                </h5>
                <p className="card-text text-secondary">
                  Combination of Frontend and Backend Languages / Frameworks.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="wow fadeInDown services h-100" data-wow-delay="3s">
              <div className="services-img text-center ">
                <img src={db} alt="Services-4" />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title text-uppercase">
                  Database <br />
                  Designer
                </h5>
                <p className="card-text text-secondary">
                  MySQL, SQL, Express, MongoDB, GraphQL
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
