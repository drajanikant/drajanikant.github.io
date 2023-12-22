import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
function Profile() {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="about"
    >
      <div className="w-100">
        <h1 className="mb-0">
          Rajanikant <span className="text-primary">Devmore</span>
        </h1>
        <div className="subheading mb-5">
          (+91) 820804-5323 ·{" "}
          <a href="mailto:rajaikantdevmore@outlook.com">
            rajaikantdevmore@outlook.com
          </a>
        </div>
        <p className="lead mb-5">
          More than 3 years of experience in Microservices Development,
          Integration Services, Spring Application Development, and Laravel
          application. I have worked on full stack development and eager to work
          on cutting-edge technologies of the day and of the future. Looking
          beyond to provide solutions and designing the architecture to
          understand what future technologies hold for us and how we can
          leverage it to meet the challenges of the present time.
        </p>
        <div className="social-icons">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/drajanikant"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            target="_blank"
            href="https://github.com/drajanikant"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Profile;
