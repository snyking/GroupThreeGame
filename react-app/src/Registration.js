import React, { useState } from "react";
import "./Registration.css";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const onButtonClick = () => {
    // Set initial error values to empty
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    // Check if the user has entered all fields correctly
    if (email === "") {
      setEmailError("Please enter your email");
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    if (password === "") {
      setPasswordError("Please enter a password");
      return;
    }

    if (password.length < 8) {
      setPasswordError("The password must be 8 characters or longer");
      return;
    }

    if (confirmPassword === "") {
      setConfirmPasswordError("Please confirm your password");
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      return;
    }

    // TODO: Implement the registration logic here
    // You can make an API call to register the user or store the registration details as per your backend implementation

    // Display a success message to the user or redirect to another page
    console.log("Registration successful");
  };

  return (
    <div>
      <div className="titleContainer">
        <div>Registration</div>
      </div>
      <br />
      <div className="inputContainer">
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className="inputBox"
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className="inputContainer">
        <input
          value={password}
          placeholder="Enter your password here"
          type="password"
          onChange={(ev) => setPassword(ev.target.value)}
          className="inputBox"
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className="inputContainer">
        <input
          value={confirmPassword}
          placeholder="Confirm your password"
          type="password"
          onChange={(ev) => setConfirmPassword(ev.target.value)}
          className="inputBox"
        />
        <label className="errorLabel">{confirmPasswordError}</label>
      </div>
      <br />
      <div className="inputContainer">
        <input
          className="inputButton"
          type="button"
          onClick={onButtonClick}
          value="Register"
        />
      </div>
    </div>
  );
};

export default Registration;
