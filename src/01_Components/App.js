import React from 'react';
import { SimpleFuncCompA, SimpleFuncCompB } from './01_FuncComp';
import ComponentAsClass from './02_ClassComp';
import StyledComponent from './03_StyledComponent';
import { MyCompositeComponent, WebSite } from './04_CompositeComponents';
import Countries from './05_ListOfComponents'
import CountriesListHW from './06_HW1_ListOfObjects_Countries'

export default function ComponentAppDemos() {
  return (
    <>
      {/* <SimpleFuncCompA /> */}
      {/* <SimpleFuncCompB /> */}
      {/* <ComponentAsClass /> */}
      {/* <StyledComponent /> */}
      {/* <MyCompositeComponent /> */}
      {/* <WebSite /> */}
      {/* <Countries></Countries> */}
      <CountriesListHW></CountriesListHW>
    </>);


}


// function Car(props) {
//   return (
//     <>
//       <h5>I am a {`${props.carInfo.name} - ${props.carInfo.model}`}!</h5>;

//     </>);
// }

// function Garage() {
//   const carInfo = { name: "Ford", model: "Mustang 2020" };
//   return (
//     <>
//       <h1>Who lives in my garage?</h1>
//       <Car carInfo={carInfo} />
//       <Car carInfo={{ name: "Volvo", model: "AX-2021" }} />
//       <Car carInfo={{ name: "Subaro", model: "vW-2019" }} />
//     </>
//   );
// }



// //Create he Root Div For REACT
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//     <Garage />

//   </>
//   //  <ComponentAsClass />
//   //  <MyCompositeComponent />
// );


