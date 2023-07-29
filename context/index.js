import React, { useState, createContext } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
  const [username, setUsername] = useState("");
  const [secret, setSecret] = useState("");

  let myName = "Sumit";

  const value = {
    username,
    setUsername,
    secret,
    setSecret,
    myName,
  };
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};
