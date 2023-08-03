import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

function Header() {
  return (
    <Container>
      <Navbar className="navbar">
        <Navbar.Brand>Icon</Navbar.Brand>
        <Nav classname="justify-content-end">
          <Nav.Link>Projects</Nav.Link>
          <Nav.Link>Contact</Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
}

export default Header;
