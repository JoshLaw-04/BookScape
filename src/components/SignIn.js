import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";
import axios from "axios";

const baseUrl = "http://localhost:3000/api/users/";

function signInUser(username, password) {
  let user = { username, password };

  return axios.post(`${baseUrl}/register`, user)
      .then(response => {
          localStorage.setItem('signUserToken', response.data.token)
          return new Promise(resolve => resolve(response.data));
      }
  );
}


const SignIn = () => {

  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");



    function handleSubmit(event) {
      event.preventDefault();
      signInUser(username, password).then(() => {
      }).catch(error => {
          console.log(error);
          window.alert('Failed login');
      });
  }

  return (
    <>
      <div id="FormSignIn" onSubmit={handleSubmit}>
        <form>
          <label>Username :
            <input placeholder="Enter username" type="text" name="username" onChange={e => setUsername(e.target.value)} />
          </label>
          <br></br><br></br>
          <label>Password :
            <input placeholder="Enter password" type="text" name="password" onChange={e => setPassword(e.target.value)} />
          </label>
          <br></br><br></br>
            <input type="submit" value="Sign In" />
        </form>
      </div>
    </>
  );
  }

export default SignIn;
