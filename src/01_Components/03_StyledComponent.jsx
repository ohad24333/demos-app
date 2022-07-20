import React from 'react';

function StyledComponent() {

  let myStyle = { color: "blue", border: "3px solid blue" };
  //Edit Style as JSON OBJECT

  let isAuthnticated = false;

  //Conditional Styling
  let userStyle = {};
  if (isAuthnticated)
    userStyle = { color: "Green", border: "3px solid Green" };
  else
    userStyle = { color: "Red", border: "3px solid Red" };

  return (
    <>
      <h1 className='headerTest'>HTML WITH ClassName Styling</h1>
      <br></br>
      <h1 style={{ color: "blue", border: "3px solid blue" }}>HTML WITH Inline Styling Object</h1>
      <br></br>
      <h1 style={myStyle}>HTML WITH STYLE 3</h1>
      <br></br>
      <h1 style={{ backgroundColor: "blue" }}>HTML Inline Object Use backgroundColor (Not standart Style) </h1>
      <br></br>
      <h1 style={userStyle}>HTML WITH STYLE 3</h1>

    </>
  );
}

export default StyledComponent;