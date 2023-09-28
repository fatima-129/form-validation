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
    if (username.length <= 5)
      errors["username"] = "Username should be atleast 5 character";

    if (password.length < 6)
      errors["password"] = "password should be atleast 6 character";

    if (consfirmPassword !== password)
      errors["confirmPassword"] = "Password and confirm password should match";

    return errors;
  }

  return (
    <div className="container">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <FormField
          title={"username"}
          setValue={setUsername}
          error={errorMessages.username}
        />

        <FormField title={"email"} setValue={setEmail} error={""} />

        <FormField
          title={"password"}
          setValue={setPassword}
          error={errorMessages.password}
        />

        <FormField
          title={"confirmPassword"}
          setValue={setConsfirmPassword}
          error={errorMessages.confirmPassword}
        />

        <button type="submit" className="btn">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;

function FormField({ title, setValue, error }) {
  return (
    <>
      <label htmlFor={title}>{title}</label>
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="input_field"
        placeholder={`Enter ${title}`}
      />
      {error && <p className="error_message">{error}</p>}
    </>
  );
}
