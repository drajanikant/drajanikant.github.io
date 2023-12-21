import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

function Trainings() {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="awards"
    >
      <div className="w-100">
        <h2 className="mb-5">Training and Certifications</h2>
        <ul className="fa-ul mb-0">
          <li>
            <FontAwesomeIcon className="fa-li text-warning" icon={faTrophy} />
            Oracle Certified Associate, Java SE 7 Programmer
          </li>
          <li>
            <FontAwesomeIcon className="fa-li text-warning" icon={faTrophy} />
            Platform as a service with Red Hat OpenShift: Redhat Delivery
            Specialist – Platform As A Service(PASS)
          </li>
          <li>
            <FontAwesomeIcon className="fa-li text-warning" icon={faTrophy} />
            Microservices Application Development and Deployment
          </li>
          <li>
            <FontAwesomeIcon className="fa-li text-warning" icon={faTrophy} />
            Hadoop Development with Spark
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Trainings;
