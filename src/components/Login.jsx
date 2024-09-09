import React from "react";
import "./LoginForm.css";

import { useState } from "react";

const Login = () => {

  //check if it is possible to creat only use State for every data
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {

    //call api backend
    event.preventDefault();
    console.log('event', email)
    
    console.log('event', password)
  };

  return (
    <div id="login-form">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={handleUsernameChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <input type="submit" value="Login" />
        {/* <label htmlFor="MutedLink" href="#"></label> */}
        {/* <p to="/register">Don't have an account? Signup</p> */}

        <p className="forgot-password">
          Already registered <a href="/register">sign in?</a>
        </p>

        <label className="forgot-password" href="#">
          Forget your <a href="#">password?</a>
        </label>
      </form>
    </div>
  );
};

export default Login;
