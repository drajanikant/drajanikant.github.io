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
            <h3 className="mb-0">Senior Software Engineer</h3>
            <div className="subheading mb-3"> ConnectWise LLP.</div>
            <ul>
              <li>
                Working on the implementation of integration services used for
                ticketing, synchronization and third party integration.
              </li>
              <li>
                Working GoLang and Gorilla Frameworks for implementation of the
                microservice architecture.
              </li>
              <li>
                Implemented distributed job framework to run the jobs in system
                distributed.
              </li>
              <li>
                Working on the Kafka messaging for the Asynchronous
                communication.
              </li>
            </ul>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">November 2022 - Present</span>
          </div>
        </div>
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">Senior Software Engineer</h3>
            <div className="subheading mb-3"> Total System Services LLP.</div>
            <ul>
              <li>
                Working on the implementation of Payment Gateway SDK using the
                Core JAVA. Responsible for requirement analysis of payment
                gateway and implementing the SDK based on the Merchant
                requirement.
              </li>
              <li>
                Worked on the Card Processing scenarios, and transactions like
                sales, auth, reversal, void. To make the integration easy for
                the POS device developer or payment gateway integrator.
              </li>
              <li>
                Responsible for work allocation based on the priority and
                driving the feature/module to achieve the desired results in a
                given timeframe.
              </li>
              <li>
                Improving the code quality and code coverage on the application
                that will help to increase the performance and quality. Being a
                member of an internal code quality squad have identified the
                tools required and integrated in the development pipeline.
              </li>
              <li>
                Working on the Integration and Unit test cases to verify the
                functionality. This helps to reduce the production bugs and
                provide confidence about the system integrations.
              </li>
              <li>
                Working on the ReactJS, React ToolKit and Redux to design and
                develop the single page reactive applications, used several
                external libraries to enhance integration and make the UI
                better.
              </li>
              <li>
                Working on the Spring Cloud tools to design the backend
                microservices, making the Restful Cloud native application. Also
                having the knowledge of API Gateway and service discovery to
                make architecture more strong and robust.
              </li>
              <li>
                Having the Experience on integrating OAth 2.0 and OIDC providers
                with existing applications, well known on Authorization flows
                and integrations.
              </li>
            </ul>
            <div>
              <strong> Key achievements:</strong> Lead the completely new and
              major feature, accountable for planning and execution of tasks.
              Issue escalation to respective teams and resolve the team mates
              road blocks.
            </div>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">November 2020 - November 2022</span>
          </div>
        </div>
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">Software Engineer II</h3>
            <div className="subheading mb-3">Knorex India Pvt. Ltd.</div>

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
            <div>
              <strong>Key achievement:</strong> Lead in implementing features
              like latency resoler to improve the speed, Migrated the
              application from the old architecture to newer. Improved the
              concurrency control and asynchronous tasks by implementing the
              JAVA features.
            </div>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">October 2019 - November 2020</span>
          </div>
        </div>
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">FullStack Developer</h3>
            <div className="subheading mb-3">Prodevans Technologies LLP</div>
            <ul>
              <li>
                Worked on the Open Source tool for integrating the custom
                features with an existing code base. Designed and developed the
                custom extensions for the Open Source tools.
              </li>
              <li>
                Solutionized the Microservice application with cutting edge
                technologies, and used the TTD method for development.Worked on
                microservice based application development using the Spring
                Boot, Spring Security, AngularJS and ReactJS.
              </li>
              <li>
                Experienced in Understanding of Existing Monolithic Architecture
                and creating the transformation roadmap.
              </li>
              <li>
                Worked on the DevOps tools for creating the CI/CD pipeline for
                the deployment of application over the docker containers and
                OpenShift cluster.
              </li>
              <li>
                Closely worked in a team with the Product Manager, Solution
                Architect, and Service Design to define solutions and services.
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
            <div>
              <strong>Key achievement:</strong> Responsible for the leading
              application, and made a difference by upgrading the Monolithic
              application to microservice. Achieved the faster performance and
              used the cutting edge technologies for enabling the complete
              automation of application deployment.
            </div>
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
