import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import { useHistory } from "react-router";
function Register() {
  const history = useHistory();
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");
  const register = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/register", {
        userReg: user,
        passwordReg: password,
      })
      .then((Response) => {
        history.push("/homepage");
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="LoginContainer">
      <div className="FormContainer">
        <h2>Register</h2>
        <form className="FormContain" onSubmit={register}>
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
          <button className="login_signinbutton" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
