import React, { Component, useState } from "react";
import "./../styles/App.css";
import Para from "./Para";


function App() {

  const [para, setPara] = React.useState(null);

  const handelClick = ()=>{

    const newPara = <Para/> 
    setPara(newPara);

  }

  return (
    <div id="main">
      <button id="click" onClick={handelClick}>click</button>
      {para}
    </div>
  );
}

export default App;
