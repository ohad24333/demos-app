import React from "react";
import './bootstrap.min.css';
import Component1 from "./01_Components";
import Login from "./02_Login";
export default function AppGlobalContext() {

    return (

        <div className="container">
            {/* Demo 01 */}
            <h1>Demo 01:</h1>
            <Component1></Component1>
            <hr />
            {/* Demo 02 */}
            <h1>Demo 02:</h1>
            <Login />
        </div>



    );


}