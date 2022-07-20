import React from 'react';

//--Demo To Generate Component out of standart JS Array Object  
export default function Countries() {
    //--Array Object
    const countries = ["Israel", "USA", "Brazil", "France"];
    return (
        <ul>
            { //--Use { } to move from React JSX-HTML to JS code area 
                countries.map((country) =>
                    <li ><h2>{country}</h2></li>
                )
            }
        </ul>);

}