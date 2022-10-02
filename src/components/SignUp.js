import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";
import axios from "axios";

const SignUp =() => {

const baseUrl = "http://localhost:3001/api/users/";

     function createUser(username, password, email, firstName, lastName) {       
        let user = { username, password, email, firstName, lastName };
        
        return axios.post(baseUrl, user).then(response => {
          console.log(response)
            }
        );
    }

    function handleSubmit(event) {
      event.preventDefault();
      createUser(username,password,firstName,lastName, email).then(() => {
      }).catch(error => {
          console.log(error);
          window.alert('Failed registration: error creating user');
      });
  }

 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
 
 
  return (
    <>
      <div>
        <form id="FormSignIn" onSubmit={handleSubmit}>
          <label>Email :
            <input placeholder="Enter Email" type="Email" name="Email" onChange={e => setEmail(e.target.value)} />
          </label>
          <br></br><br></br>
          <label>Username :
            <input placeholder="Enter Username" type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />
          </label>
          <br></br><br></br>
          <label>Password :
            <input placeholder="Enter Password" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
          </label>
          <br></br><br></br>
          <label>First Name :
            <input placeholder="Enter First Name" type="firstName" name="firstName" onChange={e => setfirstName(e.target.value)} />
          </label>
          <br></br><br></br>
          <label>Last Name :
            <input placeholder="Enter Last Name" type="lastName" name="lastName" onChange={e => setlastName(e.target.value)} />
          </label>
          <br></br><br></br>
          <input type="submit" value="Sign In" />
        </form>
      </div>
    </>
  )
}

 
export default SignUp;
 
 

