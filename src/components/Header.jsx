import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

function Header() {
  return (
    <Navbar className="navbar" fixed="top">
      <Container>
        <Navbar.Brand className="d-flex align-items-center">
          <img
            src="https://raw.githubusercontent.com/Mttphan261/portfolio/main/.github/pfp.jpg"
            alt="Icon"
            className="header-icon"
          />
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link>Projects</Nav.Link>
          <Nav.Link>Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
