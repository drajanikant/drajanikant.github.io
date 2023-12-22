import React from "react";

function Education() {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="education"
    >
      <div className="w-100">
        <h2 className="mb-5">Education</h2>
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">
              Rajarambapu Institute of Technology, Shivaji University
            </h3>
            <div className="subheading mb-3">
              B.Tech in Information Technology
            </div>
            {/* <div>Computer Science - Web Development Track</div> */}
            <p>CGPI: 8.11</p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">August 2014 - May 2017</span>
          </div>
        </div>
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
          <div className="resume-content">
            <h3 className="mb-0">
              P.V.P.I.T. Budhgoan, Maharashtra State Board of Technical
              Education(MSBTE)
            </h3>
            <div className="subheading mb-3">
              Diploma in Computer Engineering
            </div>
            <p>Percentages: 80.45%</p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">August 2010 - May 2014</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
