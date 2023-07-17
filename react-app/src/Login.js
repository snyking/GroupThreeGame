import React, { useState } from "react";
import "./Login.css";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleToggleForm = () => {
    setIsRegistering(!isRegistering);
    // Reset form fields and errors when toggling the form
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Validate form fields
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    if (email.trim() === "") {
      setEmailError("Please enter your email");
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    if (password.trim() === "") {
      setPasswordError("Please enter a password");
      return;
    }

    if (password.length < 8) {
      setPasswordError("The password must be 8 characters or longer");
      return;
    }

    if (isRegistering && confirmPassword.trim() === "") {
      setConfirmPasswordError("Please confirm your password");
      return;
    }

    if (isRegistering && password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      return;
    }

    // Perform login or registration logic
    if (isRegistering) {
      // Registration logic
      // TODO: Implement the registration logic here
      // You can make an API call to register the user or store the registration details as per your backend implementation
      console.log("Registration successful");
    } else {
      // Login logic
      // TODO: Implement the login logic here
      // You can make an API call to verify the user's credentials or handle authentication as per your backend implementation
      console.log("Login successful");
      setIsLoggedIn(true); // Update isLoggedIn state in App.js
    }
  };

  return (
    <div className="mainContainer">
      <div className="titleContainer">
        <div>{isRegistering ? "Registration" : "Login"}</div>
      </div>
      <br />
      <form onSubmit={handleFormSubmit}>
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
        {isRegistering && (
          <>
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
          </>
        )}
        <div className="inputContainer">
          <input
            className="inputButton"
            type="submit"
            value={isRegistering ? "Register" : "Log in"}
          />
        </div>
        <div>
          <div className="registerText">
            {isRegistering
              ? "If you already have an account   "
              : "If you don't have an account   "}
            <button className="register-link" onClick={handleToggleForm}>
              {isRegistering ? "Log in" : "Register"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
