import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  let navigate = useNavigate();
  let [signupState, setSignup] = useState({
    name: "",
    email: "",
    password: "",
    quiz: null,
  });
  function handleInput(eve) {
    setSignup({ ...signupState, [eve.target.name]: eve.target.value });
  }
  async function handleSubmit(eve) {
    eve.preventDefault();
    let res = await fetch(
      "https://690ecf78bd0fefc30a057a98.mockapi.io/api/users",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(signupState),
      }
    );
    let userResult = await res.json();
    if (typeof userResult == "object") {
      navigate("/login");
    }

    setSignup({
      name: "",
      email: "",
      password: "",
    });
  }
  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <h1>Signup</h1>
        <input
          type="text"
          placeholder="Enter the username"
          required
          name="name"
          onInput={handleInput}
          value={signupState.name}
        />
        <input
          type="email"
          placeholder="Enter the email"
          required
          name="email"
          onInput={handleInput}
          value={signupState.email}
        />
        <input
          type="password"
          placeholder="Enter the password"
          required
          name="password"
          onInput={handleInput}
          value={signupState.password}
        />
        <input
          type="submit"
          disabled={
            signupState.email && signupState.name && signupState.password
              ? false
              : true
          }
        />
      </form>
    </div>
  );
};

export default Signup;
