import React from "react";
import "./Home.css";

function SignUp() {

  return (
    <>
      <div>
        <form id="FormSignIn">
          <label>Email :
            <input type="text" />
          </label>
          <br></br><br></br>
          <label>Username :
            <input type="text" />
          </label>
          <br></br><br></br>
          <label>Password :
            <input type="text" />
          </label>
          <br></br><br></br>
          <label>First Name :
            <input type="text" />
          </label>
          <br></br><br></br>
          <label>Last Name :
            <input type="text" />
          </label>
          <br></br><br></br>
          <input type="submit" value="Sign In" />
        </form>
      </div>
    </>
  )
}

export default SignUp;
