import React, { Fragment } from "react";
import "../../App.css";
import Me from "../../images/jha.jpg";
import capstone1 from "../../images/projects/capstone1.png";
import capstone2 from "../../images/projects/capstone2.png";
import capstone3 from "../../images/projects/capstone3.jpg";
import capstone4 from "../../images/projects/pareserve.JPG";
import fe from "../../images/services/frontend.jpeg";
import be from "../../images/services/backend.jpeg";
import fs from "../../images/services/fullstack.jpeg";
import db from "../../images/services/database.jpg";

import AboutMe from "../AboutMe";
import Home from "../Home";
import Projects from "../Projects";
import Skills from "../Skills";
import Contact from "../Contact";

const Portfolio = () => {
  return (
    <Fragment>
      <div className="main">
        <section className="home-area" id="section-1">
          <Home />
        </section>
        <section className="about-area" id="section-2">
          <AboutMe Me={Me} />
        </section>
        <section className="project-area" id="section-3">
          <Projects
            img_1={capstone1}
            img_2={capstone2}
            img_3={capstone3}
            img_4={capstone4}
          />
        </section>
        <section className="services-area" id="section-4">
          <Skills fe={fe} be={be} fs={fs} db={db} />
        </section>
        <section className="about-area" id="section-5">
          <Contact />
        </section>
      </div>
    </Fragment>
  );
};

export default Portfolio;
