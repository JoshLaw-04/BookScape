import React, { useContext, useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import "./Home.css";


const SignUp = () => {
    let [ newUser, setNewUser] = useState({
        username: null,
        password: null,
        firstName: null,
        lastName: null,
        email: null
    })

    let { createUser } = useContext(UserContext);
    let navigate = useNavigate();

    function handleChange(event) {
        setNewUser((prevValue) => {
            return { ...prevValue, [event.target.name]: event.target.value }
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        createUser(newUser).then(() => {
            navigate('/login');
        }).catch(error => {
            console.log(error);
            console.log(newUser);
            window.alert('Failed registration: error creating user');
        });
    }

    return (
        <Container>
        <br/>
        <h1>REGISTER</h1>
        <br></br>
        <Form id='signUpForm' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" name="username" value={newUser.username} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" name="password" value={newUser.password} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>First Name:</Form.Label>
                <Form.Control type="string" name="firstName" value={newUser.firstName} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Last Name:</Form.Label>
                <Form.Control type="text" name="lastName" value={newUser.lastName} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Email:</Form.Label>
                <Form.Control type="text" name="email" value={newUser.email} onChange={handleChange} />
            </Form.Group>
          <Button type="submit" id="saveBtn">Sign Up</Button>
        </Form>
        <br/>
        </Container>
    )
};

export default SignUp;
 
 

