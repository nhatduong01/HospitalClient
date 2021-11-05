import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import { Link, useHistory } from "react-router-dom";
function Login() {
  const history = useHistory();
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");
  const [login, setlogin] = useState("");
  const SignIn = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/login", {
        userlog: user,
        passwordlog: password,
      })
      .then((Response) => {
        if (Response.data.message) {
          setlogin(Response.data.message);
        } else {
          history.push("/homepage");
        }
      });
  };
  return (
    <div className="LoginContainer">
      <div className="FormContainer">
        <h2>Sign In</h2>
        <form className="FormContain">
          <h5>Username</h5>
          <input
            type="text"
            onChange={(e) => {
              setuser(e.target.value);
            }}
            required
          />
          <h5>Password</h5>
          <input
            type="password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            required
          />
          <button className="login_signinbutton" type="submit" onClick={SignIn}>
            Sign In
          </button>
        </form>
        <div className="SignUp">
          <Link to="/register" className="Linkregister">
            Do not have an account?
          </Link>
        </div>
      </div>
      <h2>{login}</h2>
    </div>
  );
}

export default Login;
