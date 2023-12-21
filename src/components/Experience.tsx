import React from "react";

function Experience() {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex justify-content-center"
      id="experience"
    >
      <div className="w-100">
        <h2 className="mb-5">Experience</h2>
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">Software Engineer II</h3>
            <div className="subheading mb-3">Knorex India Pvt. Ltd.</div>
            <p></p>
            <ul>
              <li>
                Working on the Vert.x and Spring Boot for the designing and
                implementing the microservices for DSP application and
                maintaining the application.
              </li>
              <li>
                Working on the SQS, kinesis, and pubsub for the communication
                between the services.
              </li>
              <li>
                Implemented the solution for the latency issues of the
                application.
              </li>
              <li>Implementing the batch jobs using Go with concurrency.</li>
              <li>
                Enhancing the performance via observing the application
                lifecycle, used the reactive programming to increase performance
                and reduce the executime.
              </li>
              <li>
                Enhancing the feature and implementing the new API required for
                the DSP.
              </li>
              <li>
                Implemented the ETL batch processing of the bulk data needed for
                the business analytics team.
              </li>
              <li>
                Worked on the feature planning and deciding the road map and
                designing the sprints accordingly.
              </li>
            </ul>
            <p />
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">October 2019 - Present</span>
          </div>
        </div>
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">FullStack Developer</h3>
            <div className="subheading mb-3">Prodevans Technologies LLP</div>
            <p></p>
            <ul>
              <li>
                Worked on the Open Source tool for integrating the custom
                features with an existing code base. Designed and developed the
                custom extensions for the Open Source tools.
              </li>
              <li>
                Solutionized the Microservice application with cutting edge
                technologies, and used the TTD method for development.
              </li>
              <li>
                Experienced in Understanding of Existing Monolithic Architecture
                and creating the transformation roadmap.
              </li>
              <li>
                Worked on microservice based application development using the
                Spring Boot, Spring Security, AngularJS and ReactJS.
              </li>
              <li>
                Worked on the DevOps tools for creating the CI/CD pipeline for
                the deployment of application over the docker containers and
                OpenShift cluster.
              </li>
              <li>
                Closely worked in a team with the Product Manager, Solution
                Architect, and Service Design to define solutions and services.
              </li>
              <li>
                Responsible to develop user stories based on the requirements
                and update functional documents to draft sprint planning.
              </li>
              <li>
                Developed scripts for build, deployment, maintenance and related
                tasks using Jenkins, Docker, Maven, Python and Bash.
              </li>
              <li>
                Rolled out development for the Customer management portal with
                spring framework, Work with REST and XML based API to develop a
                customer portal.
              </li>
            </ul>
            <p />
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">April 2017 - October 2019</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
