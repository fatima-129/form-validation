import React, { useState } from "react";
import "./App.css";
import { formHandling } from "./Validation";
const FormKeys = ["username", "email", "password", "consfirmPassword"];
const FormEntries = {
  username: "",
  email: "",
  password: "",
  consfirmPassword: "",
};

const errorObj = { ...FormEntries };

function App() {
  const [values, setValues] = useState(FormEntries);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValues = { ...values, [name]: value }; //  Merge previous values with updated value
    setValues(updatedValues);
  };

  const [errorMessages, setErrorMessages] = useState(errorObj);

  function handleSubmit(e) {
    e.preventDefault();
    setErrorMessages(errorObj);
    const { username, password, consfirmPassword } = values;
    const hasErros = formHandling(username, password, consfirmPassword);

    if (Object.keys(hasErros).length > 0) {
      setErrorMessages(hasErros);
    } else {
      alert("Form Submit Successfully");
    }
  }

  return (
    <div className="container">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        {FormKeys.map((item, idx) => (
          <FormField
            key={idx}
            title={item}
            setValue={handleChange}
            error={errorMessages[item]}
          />
        ))}
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
        onChange={setValue}
        type="text"
        name={title}
        className="input_field"
        placeholder={`Enter ${title}`}
      />
      {error && <p className="error_message">{error}</p>}
    </>
  );
}
