import React, { useState } from "react";
import "./App.css";

const errorObj = {
  username: "",
  password: "",
  confirmPassword: "",
};

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [consfirmPassword, setConsfirmPassword] = useState("");

  const [errorMessages, setErrorMessages] = useState(errorObj);

  function handleSubmit(e) {
    e.preventDefault();
    setErrorMessages(errorObj);
    const hasErros = formHandling();

    if (Object.keys(hasErros).length > 0) {
      setErrorMessages(hasErros);
    } else {
      alert("Form Submit Successfully");
    }
  }

  function formHandling() {
    const errors = {};
    if (username.length <= 5) {
      errors["username"] = "Username should be atleast 5 character";
    }

    if (password.length < 6) {
      errors["password"] = "password should be atleast 6 character";
    }
    if (consfirmPassword !== password) {
      errors["confirmPassword"] = "Password and confirm password should match";
    }
    return errors;
  }

  return (
    <div className="container">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <label htmlFor="username">Username</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          className="input_field"
          placeholder="Enter username"
        />
        {errorMessages.username && (
          <p className="error_message">{errorMessages.username}</p>
        )}

        <label htmlFor="user_email">Enter your Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="input_field"
          placeholder="Enter Email"
        />

        <label htmlFor="password">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          className="input_field"
          placeholder="Enter Password"
        />
        {errorMessages.password && (
          <p className="error_message">{errorMessages.password}</p>
        )}

        <label htmlFor="confirm_password">Confirm password</label>
        <input
          onChange={(e) => setConsfirmPassword(e.target.value)}
          type="text"
          className="input_field"
          placeholder="Confirm Your password"
        />
        {errorMessages.confirmPassword && (
          <p className="error_message">{errorMessages.confirmPassword}</p>
        )}

        <button type="submit" className="btn">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
