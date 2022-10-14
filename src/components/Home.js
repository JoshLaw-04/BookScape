import React, { useContext, useRef, Fragment } from "react";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import { Form, FormControl } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import { Link, Outlet } from "react-router-dom";
import BookContext from "../contexts/BookContext";
import "./Home.css";
import logo from './assets/Bookscape.png'
import Footer from "./Footer";
import UserContext from "../contexts/UserContext";
import { FaUser } from 'react-icons/fa';


function Home() {

  const inputElement = useRef('');

  const { search, searchHandler, bookSearchReturn } = useContext(BookContext);
  const { loggedInUser, loading, signOutUser } = useContext(UserContext);

  const authLink = (
    <Fragment>
        <Link onClick={ signOutUser } href='#!' className="nav-link">
          <span className="hide-sm"> Logout</span>
        </Link>
        <Link to={`/profile/${loggedInUser.userId}`} className="nav-link">
          <div>
            <FaUser style={{marginRight: '2px'}}/>
            Hello { loggedInUser.firstName }!
          </div>
        </Link>
    </Fragment>
  );

  const guestLink = (
    <Fragment>
      <Link to="/register" className="nav-link">
        Register
      </Link>
      <Link to="/login" className="nav-link">
        Login
      </Link>
    </Fragment>
  );

  function getSearchTerm() {
    searchHandler(inputElement.current.value);
  }

  return (
    <>
      <Navbar className="Navbar" expand="lg">
        <Container fluid>
          <Navbar.Brand className="logo">
            <img
              alt=""
              src={logo}
              width="50"
              height="50"
              style={{ padding: "5px" }}
            />{" "}
            Bookscape
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/about" className="nav-link">About</Link>
              <>
                { loading === true ? authLink : guestLink }
              </>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                ref={ inputElement }
                type="text"
                placeholder="Search"
                className="me-2"
                aria-label="search"
                value={ search }
                onChange={ getSearchTerm }
              />
              <Button onClick={bookSearchReturn} variant="primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Stack>
        <Outlet />
      </Stack>
      <Footer />
    </>

    
   
  );
}

export default Home;
