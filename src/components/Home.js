import React, { useContext, useRef } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Form, FormControl } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import { Link, Outlet } from "react-router-dom";
import BookContext from "../contexts/BookContext";
import "./Home.css";

function Home() {

  const inputElement = useRef('');

  const { search, searchHandler, bookSearchReturn } = useContext(BookContext);

  function getSearchTerm() {
    searchHandler(inputElement.current.value);
  }

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
                ref={ inputElement }
                type="text"
                placeholder="Search"
                className="me-2"
                aria-label="search"
                value={ search }
                onChange={ getSearchTerm }
              />
              <Button onClick={bookSearchReturn}>Find</Button>
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