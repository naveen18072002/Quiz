import React, {useContext, useEffect, useState } from "react";
import { myContext } from "../Context";
import "./Quiz.css";
import { Link, useNavigate } from "react-router-dom";
const Quiz = () => {
  let allValues = useContext(myContext);
  let user = allValues[4];
  let navigate = useNavigate();
  let [timer, setTimer] = useState(300);
  useEffect(() => {
    if (timer == 0) {
      navigate("/result");
      return;
    }
    let interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timer]);
  let [data, setData, index, setIndex] = useContext(myContext);
  let oneQuest = data[index];
  function handleInput(eve) {
    oneQuest.YourAnswer = eve.target.value;
    console.log(oneQuest);
    setData([...data]);
  }

  return (
    <div className="quiz">
      <header>
        <div>
          <h4>{user.name}</h4>
        </div>
        <div>
          <h4>{timer}</h4>
        </div>
      </header>
      <main>
        <div className="qst">{oneQuest.question}</div>
        <div className="opt">
          {oneQuest.options.map((e, i) => {
            return (
              <div key={i}>
                <input
                  type="radio"
                  value={e}
                  name="opt"
                  onChange={handleInput}
                  checked={oneQuest.YourAnswer == e ? true : false}
                />
                <label htmlFor="">{e}</label>
              </div>
            );
          })}
        </div>
        <div className="btn">
          {data.map((e, i) => {
            return (
              <button
                key={e.id}
                onClick={() => {
                  setIndex(i);
                }}
              >
                {e.id}
              </button>
            );
          })}
        </div>
      </main>
      <footer>
        <div>
          <button
            onClick={() => {
              if (index > 0) {
                setIndex(index - 1);
              }
            }}
          >
            ⇐ Previous
          </button>
          <button
            onClick={() => {
              if (index < data.length - 1) {
                setIndex(index + 1);
              }
            }}
          >
            Next ⇒
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              let conformation = confirm("Are you really want to submit");
              console.log(conformation);
              if (conformation) {
                navigate("/result");
              }
            }}
          >
            Submit
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Quiz;
