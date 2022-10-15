import React, { useContext, useRef, Fragment } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
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
  const { loggedInUser, isLoggedIn, signOutUser } = useContext(UserContext);

  function getSearchTerm() {
    searchHandler(inputElement.current.value);
  }

  
  const authLink = (
    <Fragment>
        <Link onClick={ signOutUser } to='/login' className="nav-link">
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

  return (
    <>
      <Navbar className="Navbar" expand="lg">
        <Container fluid>
          <Navbar.Brand className="logo">
            <Link to="/" className="nav-link">
                <img
                  alt=""
                  src={logo}
                  width="50"
                  height="50"
                  style={{ padding: "5px" }}
                />{" "}
                Bookscape
              </Link>
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
               {console.log(isLoggedIn)}
               {console.log(loggedInUser)}
               { isLoggedIn === true ? authLink : guestLink }
              </>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                ref={ inputElement }
                type="search"
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
