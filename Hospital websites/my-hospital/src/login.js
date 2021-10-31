import React from "react";
import "./login.css";
function Login() {
  return (
    <div className="LoginContainer">
      <div className="FormContainer">
        <h2>Sign In</h2>
        <form className="FormContain">
          <h5>Username</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="password" />
          <button className="login_signinbutton" type="submit">
            Sign In
          </button>
        </form>
        <div class="SignUp"></div>
      </div>
    </div>
  );
}

export default Login;
