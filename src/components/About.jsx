import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function About() {
  return (
    <div className="about-container">
      <h1 className="name typewriter">Matt Phan</h1>
      <h3 className="bio">
        Oh yo! What's going on brother what brings you in today? DUDE - you look
        huge. Oh ladies what's good!?
      </h3>
      <div className="about-box">
        <Container className = 'categories'>
          <p className="console-category">PROBLEMS</p>
          <p className="console-category">OUTPUT</p>
          <p className="console-category">DEBUG CONSOLE</p>
          <p className="console-category" id="terminal">TERMINAL</p>
          <p className="console-category">GITLENS</p>
        </Container>
        <div className="statement">
          <div className="input-statement">Matt.currentLocation</div>
          <div className="return-statement">"Dallas, TX"</div>
        </div>
        <div className="statement">
          <div className="input-statement">Matt.contactInfo</div>
          <div className="return-statement">
            ["mttphan261@gmail.com", "LinkedIn", "Github", "Blog",
            "Portfolio/Website"]
          </div>
        </div>
        <div className="statement">
          <div className="input-statement">Matt.resume</div>
          <div className="return-statement">"mattphan.pdf"</div>
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
            [ "Python", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3", "React",
            "Node.js", "Flask", "SQLite", "SQLAlchemy", "Git", "GitHub", "Unit
            Testing", "Pytest"]
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
