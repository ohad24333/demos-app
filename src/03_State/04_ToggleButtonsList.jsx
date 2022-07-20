import React from "react";
import ToggleButton from "./04_ToggleButton";


// practice 1:
// 1) Create Button - "Toggle Button" 
//    - 2 Mode  OFF/ON 
//    - Text ON/OFF
//    - ON:Green , OFF:Grey
// -CLICK OFF ---> ON
// -CLICK ON ---> OFF
// 2) List Of buttons
// 3) DEBUG / BROWSER / VSD CODE DEBUG
//-----------------------------------------------------

export default function ToggleButtonsList(props) {
    let arrBtns = [];

    for (let index = 0; index < props.count; index++) {
        let btnElement = <><ToggleButton Key={index} toggleText="OFF" /><hr /></>;
        arrBtns.push(btnElement);

    }



    return (
        <>
            {arrBtns}
        </>
    );


}