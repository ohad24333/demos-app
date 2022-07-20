import React from 'react';


function GetCountries() {
    let countriesObjArray = [{ countryCode: 234243, countryName: "France", Capital: "Paris" },
    { countryCode: 567567, countryName: "Israel", Capital: "Jerusalem" },
    { countryCode: 456768, countryName: "USA", Capital: "Washington" }];

    return countriesObjArray;
}


//--Demo To Generate Component out of standart JS Array Object  
export default function CountriesList() {
    //--Array Object
    const countries = GetCountries();
    return (
        <div style={{ margin: "10px", padding: "10px", border: "1px solid grey" }}>

            { //--Use { } to move from React JSX-HTML to JS code area 
                countries.map((country) =>
                    <h2>{`[${country.countryCode}] - ${country.countryName} - ${country.Capital}`}</h2>

                )
            }

        </div>
    );
}
