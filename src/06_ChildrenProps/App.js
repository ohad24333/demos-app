import React from "react";
import SignUpDialog from "./01_Dialog";
import Widget from "./02_ChildrenWithCount"
import Cards from "./03_ChildrenBootstrap";
import './bootstrap.min.css';
export default function ChildrenApps() {


    return (

        <div className="container">
            {/* Demo 01 */}
            <SignUpDialog />
            <hr />
            {/*  Demo 02 */}
            <Widget></Widget>

            {/*  Demo 03 */}
            <Cards></Cards>
        </div>


    );


}