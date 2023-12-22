import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  faJava,
  faPython,
  faPhp,
  faGolang,
  faJenkins,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faGit,
  faDocker,
  faJira,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";

function Skills() {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="skills"
    >
      <div className="w-100">
        <h2 className="mb-5">Skills</h2>
        <div className="subheading mb-3">Programming Languages &amp; Tools</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faGolang} />
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faJava} />
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faPython} />
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faPhp} />
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faHtml5} />
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faCss3Alt} />
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faJsSquare} />
          </li>

          <li className="list-inline-item">
            <FontAwesomeIcon icon={faReact} />
          </li>

          <li className="list-inline-item">
            <FontAwesomeIcon icon={faGit} />
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faDocker} />
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faJenkins} />
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faJira} />
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faNpm} />
          </li>
        </ul>
        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">
          <li>
            <FontAwesomeIcon icon={faCheck} className="fa-li" />
            <strong>Core Skills:</strong> Java, Python, Go, PHP
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} className="fa-li" />
            <strong>Frameworks:</strong> Spring MVC, Spring Boot, Laravel
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} className="fa-li" />
            <strong>Web Development:</strong> Bootstrap, JavaScript, AngularJS,
            ReactJS, VueJS
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} className="fa-li" />
            <strong>DevOps Tools:</strong> Git, GitLab, GitHub, Jenkins, Docker,
            Openshift
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} className="fa-li" />
            <strong>Project Management Tools:</strong> Jira, Confluence, Slack,
            Trello
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} className="fa-li" />
            <strong>Build Tools:</strong> Maven 3, Gradle, Composer, NPM, DEP
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} className="fa-li" />
            <strong>Testing Tools:</strong> Slenium, Junit, Mokito
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} className="fa-li" />
            <strong>Operating Systems:</strong> CentOS, RHEL, Linux Mint,
            OpenSuse
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} className="fa-li" />
            <strong> Database: </strong>MySQL, PostgreSQL, MongoDB, Oracle.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
