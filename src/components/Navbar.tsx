import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Navbar as NavbarBs, Nav, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <NavbarBs className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="./" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="./about" as={NavLink}>
            About
          </Nav.Link>
          <Nav.Link to="./store" as={NavLink}>
            Store
          </Nav.Link>
        </Nav>
        <Button
          style={{ width: "50px", height: "50px", position: "relative" }}
          variant="outline-primary"
          className="rounded-circle"
        >
          <FaShoppingCart style={{ fontSize: "18px" }} />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              fontSize: "12px",
              width: "20px",
              height: "20px",
              position: "absolute",
              bottom: -4,
              right: -2,
            }}
          >
            50
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
