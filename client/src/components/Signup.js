import React, { useState } from "react";
// import { useOutletContext } from "react-router-dom";
//
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Signup({ user, onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => onLogin(user));
        }
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <div class="login-page">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div class="form">
        <div class="login">
          <div class="login-header">
            <h3>SIGN-UP</h3>
            <p>
              Please provide all required details to register for an account
              with us.
            </p>
          </div>
        </div>
        <form class="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            autoComplete="off"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            id="password_confirmation"
            placeholder="Password Confirmation"
            autoComplete="off"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          {/* <p class="message">
            Not registered? <a href="/signup">Create an account</a>
          </p> */}
          <Button color="primary" variant="contained" type="submit">
            Sign Up
          </Button>
        </form>
        {errors ? <div>{errors}</div> : null}
      </div>
    </div>
  );
}

export default Signup;
