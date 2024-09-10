import React from "react";
import { useState } from "react";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const handleEmailChange = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    console.log(event.target.value);
    setConfirmpassword(event.target.value);
  };

  const handleSubmit = (event) => {
    //call api backend
    event.preventDefault();
    console.log("event", email);
    console.log("event", password);
    console.log("event", confirmpassword);
  };

  return (
    <div id="signing-form">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Email">Email:</label>
        <input
          type="text"
          id="Email"
          name="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <label htmlFor="confirm_password">Confirm password</label>
        <input
          type="password"
          id="confirm_password"
          name="confirm_password"
          value={confirmpassword}
          onChange={handleConfirmPasswordChange}
        />
        <input type="submit" value="Signin" />

        <label className="forgot-password" href="#">
          Already have an account? <a href="/login">Login</a>
        </label>
      </form>
    </div>
  );
};

export default Register;
