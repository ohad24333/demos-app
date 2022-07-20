import React from "react";
import { useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import { UserContext } from "./GlobalContexts";

export default function Component1() {
  const [user, setUser] = useState("Gad Shor");

  return (
    //02 Expose global State in hige depth
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      {/* <Component2 user={user} /> */}
      <Component2 />
    </UserContext.Provider>

  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      {/* <Component3 user={user} /> */}
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      {/* <Component4 user={user} /> */}
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      {/* <Component5 user={user} /> */}
      <Component5 />
    </>
  );
}

function Component5() {
  //03 Consume Global State
  const user = useContext(UserContext);

  return (
    <>
      <h1>{`Component 5 - Hello ${user} again! im getting Global State from depth 5`}</h1>

    </>
  );
}