import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-scroll";

function Header() {
  return (
    <Navbar className="navbar" fixed="top">
      <Container>
        <Navbar.Brand className="d-flex align-items-center">
          <Nav.Link as={Link} to="about-container" smooth duration={50} offset={-100}>
            <img
              src="https://raw.githubusercontent.com/Mttphan261/portfolio/main/.github/pfp.jpg"
              alt="Icon"
              className="header-icon"
            />
          </Nav.Link>
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link
            className="links"
            as={Link}
            to="projects"
            smooth
            duration={50}
            offset={-100}
          >
            Projects
          </Nav.Link>
          <Nav.Link
            className="links"
            as={Link}
            to="contact"
            smooth
            duration={50}
            offset={-100}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
