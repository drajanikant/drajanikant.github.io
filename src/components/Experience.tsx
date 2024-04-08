import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Experience() {
  return (
    <section className="resume-section p-3 p-lg-5" id="experience">
      <div className="row">
        <div className="col-md-12 col-lg-12">
          <article className="education-item">
            <FontAwesomeIcon className="education-icon" icon={faBriefcase} />
            <h3 className="education-date">Present</h3>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-0">ConnectWise LLP</h3>
                <div className="subheading mb-3">
                  Senior Software Engineer | 2022 - Present
                </div>
              </div>
            </div>
          </article>
          <article className="education-item">
            <FontAwesomeIcon className="education-icon" icon={faBriefcase} />
            <h3 className="education-date">2022</h3>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-0">Total System Services LLP.</h3>
                <div className="subheading mb-3">
                  Senior Software Engineer | 2020 - 2022
                </div>
              </div>
            </div>
          </article>
          <article className="education-item">
            <FontAwesomeIcon className="education-icon" icon={faBriefcase} />
            <h3 className="education-date">2020</h3>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-0">Knorex India Pvt. Ltd.</h3>
                <div className="subheading mb-3">
                  Software Engineer II | 2019 - 2020
                </div>
              </div>
            </div>
          </article>
          <article className="education-item">
            <FontAwesomeIcon className="education-icon" icon={faBriefcase} />
            <h3 className="education-date">2017</h3>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-0">Prodevans Technologies LLP</h3>
                <div className="subheading mb-3">
                  FullStack Developer | 2017 - 2019
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Experience;
