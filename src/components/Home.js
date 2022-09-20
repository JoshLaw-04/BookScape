import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Form, FormControl } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import { Link, Outlet } from "react-router-dom";
import "./Home.css";

function Home() {

  return (
    <>
      <Navbar className="Navbar">
        <Navbar.Brand className="logo">
          <img
            alt=""
            // src={}
            width="45"
            height="45"
            style={{ padding: "5px" }}
          />{" "}
          Bookscape
        </Navbar.Brand>
        <Container className="justify-content-end">
          <Nav>
            <Link to="/" className="nav-link c-white">
                Home
            </Link>
            <Link to="/about" className="nav-link">
                About
            </Link>
            <Link to="/register" className="nav-link">
                Register
            </Link>
            <Link to="/login" className="nav-link">
                Login
            </Link>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="search"
                // onChange={filterSearch}
              />
            </Form>
          </Nav>
        </Container>
      </Navbar>

      <Stack>
        <Outlet />
      </Stack>
      {/* <footer className="footer">
        <div className="footer-copyright text-center py-3">
          © 2022 Bookscape • Website Design by Team Chosen
        </div>
      </footer> */}
    </>
  );
}

export default Home;