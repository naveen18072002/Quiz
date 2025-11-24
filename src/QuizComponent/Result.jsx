import React, { useContext } from "react";
import { myContext } from "../Context";
import "./Result.css";

const Result = () => {
  let [data] = useContext(myContext);

  return (
    <div className="cont">
      <div className="title">
        <h1>Answers!!!</h1>
      </div>
      {data.map((ele, i) => {
        return (
          <div key={i} className="cont1" >
            <p>{ele.question}</p>
            <div>
              {ele.options.map((e) => {
                return (
                  <div>
                    <input
                      type="radio"
                      value={e}
                      checked={ele.YourAnswer == e ? true : false}
                      disabled
                    />
                    <label htmlFor="">{e}</label>
                  </div>
                );
              })}
            </div>
            <h5>Correct Answer: {ele.CorrectAnswer}</h5>
            <h4 className={ele.CorrectAnswer==ele.YourAnswer?"green":"red"}>Your Answer: {ele.YourAnswer} </h4>
          </div>
        );
      })}
    </div>
  );
};

export default Result;
