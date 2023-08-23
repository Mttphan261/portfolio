import React from "react";
import { Row, Container } from "react-bootstrap";

function Contact() {
  return (
    <div className="contact">
      <h2 className="section-header">Contact Me!</h2>
      <div className="socials-container">
        <p className="socials">
          <a href="mailto:mttphan261@gmail.com">mttphan261@gmail.com</a>
        </p>
        <p className="socials">
          <a href="https://www.linkedin.com/in/matthewphan261/">LinkedIn</a>
        </p>
        <p className="socials">
          <a href="mailto:mttphan261@gmail.com">github</a>
        </p>
        <p className="socials">
          <a href="public/mattphan_resume.pdf" target="blank">resume</a>
        </p>
      </div>
      <div className="footer">
        <p>Made by Matt Phan © 2023</p>
      </div>
    </div>
  );
}

export default Contact;
