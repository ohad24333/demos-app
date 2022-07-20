import React from "react"
import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";

//01 Create Context HOOK
const UserContext = createContext();

// Creating the context object and passing the default values.
const AuthContext = React.createContext({ status: null, login: () => { } });


export { UserContext, AuthContext };