import React, { useContext } from 'react';
import "./welcome.css";
import { Link } from 'react-router-dom';
import { myContext } from '../Context';

const Welcome = () => {
  let allValues=useContext(myContext);
  let user=allValues[4];
  return (
    <div className="welcome">
        <section>
            <h1>{user && user.name } Welcome to the Quiz App</h1>
            {user &&(
           <Link to="quiz"> <button>Start Quiz</button></Link>
            )}
        </section>
    </div>
  )
}

export default Welcome;