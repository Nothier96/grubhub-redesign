import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <header>
      {" "}
      <Navbar bg="white" variant="white" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src="/images/realogo.png" alt="logo" />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {" "}
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/order">
                {" "}
                Order
              </Nav.Link>
              <Nav.Link as={Link} to="/signin">
                {" "}
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                {" "}
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navbar1;
