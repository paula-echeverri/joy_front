import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";



const Register = () => {
  return (
    <div id="signing-form">
      <h1>Sign Up</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="Email">Email:</label>
        <input type="text" id="Email" name="Email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <label htmlFor="confirm_password">Confirm password</label>
        <input
          type="confirm_password"
          id="confirm_password"
          name="confirm_password"
        />
        <input type="submit" value="Signin" />
        <Link to="/login">Already have an account? Login</Link>
      </form>
    </div>
  );
};

export default Register;
