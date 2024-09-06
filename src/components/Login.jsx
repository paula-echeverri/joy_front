import React from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
const Login = () =>{

    return (
        <div id="login-form">
        <h1>Login</h1>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
          <label htmlFor="MutedLink" href="#">Forget your password?</label>
          <input type="submit" value="Login" />
          {/* <label htmlFor="MutedLink" href="#"></label> */}
          <Link to="/register">Don't have an accoun? Signup</Link>

        </form>
      </div>
    )
}

export default Login;