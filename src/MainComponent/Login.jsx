import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { myContext } from "../Context";
import { useContext } from "react";
import "./Signup.css";

const Login = () => {
  let allValues=useContext(myContext);
  let user=allValues[4];
  let setUser=allValues[5];
  console.log(user,setUser);
  
  let navigate = useNavigate();
  let [loginState, setLogin] = useState({
    email: "",
    password: "",
  });
  async function handleSubmit(e) {
    e.preventDefault();
    let res = await fetch(
      `https://690ecf78bd0fefc30a057a98.mockapi.io/api/users?email=${loginState.email}&password=${loginState.password}`
    );
    let oneUser = await res.json();
    console.log(typeof(oneUser));
    if (typeof oneUser=="object") {
      setUser(oneUser[0]);
      navigate("/");
    }
  }
  function handleInput(e) {
    setLogin({ ...loginState, [e.target.name]: e.target.value });
  }
  return (
    <div className="signup">
      <form action="" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={loginState.email}
          onInput={handleInput}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={loginState.password}
          onInput={handleInput}
        />
        <input
          type="submit"
          disabled={loginState.email && loginState.password ? false : true}
        />
      </form>
    </div>
  );
};

export default Login;
