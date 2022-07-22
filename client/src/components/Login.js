import { useState } from "react";
import { Button } from "@mui/material";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import theme from "../theme";
import { useNavigate } from "react-router-dom";

function Login({ user, onLogin }) {
  // const appliedTheme = createTheme(theme);
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          onLogin(user);
          navigate("/");
        });
      } else {
        res.json().then((json) => setError(json.error));
      }
    });
  }

  return (
    <div class="login-page">
      {/* <ThemeProvider theme={appliedTheme}> */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div class="form">
        <div class="login">
          <div class="login-header">
            <h3>LOGIN</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        <form class="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <button type="submit">login</button> */}
          <Button color="primary" variant="contained" type="submit">
            Login
          </Button>
          <p class="message">
            Not registered? <a href="/signup">Create an account</a>
          </p>
        </form>
        {error ? <div>{error}</div> : null}
      </div>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default Login;
