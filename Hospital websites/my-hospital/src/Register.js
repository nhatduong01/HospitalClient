import React, { useState } from "react";
import axios from "axios";
import "./login.css";
function Register() {
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");
  const register = () => {
    axios
      .post("http://localhost:4000/register", {
        userReg: user,
        passwordReg: password,
      })
      .then((Response) => {
        console.log(Response);
      });
  };
  return (
    <div className="LoginContainer">
      <div className="FormContainer">
        <h2>Register</h2>
        <form className="FormContain">
          <h5>Username</h5>
          <input
            type="text"
            onChange={(e) => {
              setuser(e.target.value);
            }}
          />
          <h5>Password</h5>
          <input
            type="password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <button
            className="login_signinbutton"
            type="submit"
            onClick={register}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
