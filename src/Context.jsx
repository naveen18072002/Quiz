import React, { createContext, useState } from "react";
import storage from "./storage.json";
import Router from "./Router";
export let myContext = createContext();

const Context = () => {
  let [data, setData] = useState(storage);
  let [index, setIndex] = useState(0);
  let [user, setUser] = useState(null);
  return (
    <div>
      <myContext.Provider
        value={[data, setData, index, setIndex, user, setUser]}
      >
        <Router></Router>
      </myContext.Provider>
    </div>
  );
};

export default Context;
