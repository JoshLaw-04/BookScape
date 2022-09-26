import React from "react";
import "./Home.css";

function SignIn() {

  return (
    <>
      <div id="FormSignIn">
        <form>
          <label>Username :
            <input type="text" />
          </label>
          <br></br><br></br>
          <label>Password :
            <input type="text" />
          </label>
          <br></br><br></br>
            <input type="submit" value="Sign In" />
        </form>
      </div>
    </>
  );
}

export default SignIn;
