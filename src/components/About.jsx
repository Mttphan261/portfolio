import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

function About() {
  return (
    <div className="about-container">
      <h1 className="name">Matt Phan</h1>
      <h3 className="bio">
        I am a software engineer with a passion for crafting user-friendly
        experiences. Explore my projects below.
      </h3>
      <div className="about-box">
        <Container className="categories">
          <p className="console-category">PROBLEMS</p>
          <p className="console-category">OUTPUT</p>
          <p className="console-category">DEBUG CONSOLE</p>
          <p className="console-category" id="terminal">
            TERMINAL
          </p>
          <p className="console-category">GITLENS</p>
        </Container>
        <div className="statement">
          <div className="input-statement">Matt.currentLocation</div>
          <div className="return-statement">"Dallas, TX"</div>
        </div>
        <div className="statement">
          <div className="input-statement">Matt.contactInfo</div>
          <div className="return-statement">
            ["<a href="mailto:mttphan261@gmail.com">mttphan261@gmail.com</a>", "
            <a href="https://www.linkedin.com/in/matthewphan261/">LinkedIn</a>",
            "<a href="https://github.com/mttphan261">Github</a>", "
            <a href="https://medium.com/@mttphan261">Blog</a>"]
          </div>
        </div>
        <div className="statement">
          <div className="input-statement">Matt.resume</div>
          <div className="return-statement">
            "
            <a
              href="/mattphan_resume.pdf"
              target="blank"
              rel="noopener noreferrer"
            >
              mattphan.pdf
            </a>
            "
          </div>
        </div>
        <div className="statement">
          <div className="input-statement">Matt.interests</div>
          <div className="return-statement">
            "cooking", "gaming", "programming"
          </div>
        </div>
        <div className="statement">
          <div className="input-statement">Matt.education</div>
          <div className="return-statement">
            ["Flatiron School Full Stack Software Engineering Bootcamp",
            "Bachelor of Media Arts - University of North Texas, Denton, TX"]
          </div>
        </div>
        <div className="statement">
          <div className="input-statement">Matt.skills</div>
          <div className="return-statement">
            [ "Python", "JavaScript", "SQL", "HTML", "CSS", "React", "Node.js",
            "REST APIs", "Object-Oriented Programming", "PostgreSQL",
            "SQLAlchemy", "Git", "Unit Testing", "Pytest"]
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
