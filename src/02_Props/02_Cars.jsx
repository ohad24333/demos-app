import React from 'react';

function Car(props) {
    return (
        <>
            <h4>I am a {`${props.carInfo.name} - ${props.carInfo.model}`}!</h4>;
            <hr></hr>
        </>);
}
export default function Garage() {
    const carInfo = { name: "Ford", model: "Mustang 2020" };
    return (
        <>
            <h1>Cars:</h1>
            <Car carInfo={carInfo} />
            <Car carInfo={{ name: "Volvo", model: "AX-2021" }} />
            <Car carInfo={{ name: "Subaro", model: "vW-2019" }} />
        </>
    );
}
