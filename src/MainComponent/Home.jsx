import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { myContext } from "../Context";
import "./Home.css";

const Home = () => {
  let allValues = useContext(myContext);
  let user = allValues[4];
  return (
    <div className="home">
      <nav>
        <div>
          <Link to="/">
            <h1>QUIZ</h1>
          </Link>
        </div>
        {user ? (
          <h1>{user.name}</h1>
        ) : (
          <div>
            <Link to="login">
              <button>Login</button>
            </Link>
            <Link to="signup">
              <button>Signup</button>
            </Link>
          </div>
        )}
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
