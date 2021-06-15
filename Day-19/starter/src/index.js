import React from "react";
import ReactDOM from "react-dom";
import App from "../src/components/App";

const name = "Ayush";
const element = <h1>Hello, {name}</h1>; // JSX Element

ReactDOM.render(
  <div class={"first"} style={{backgroundColor: 'red', border: '2px solid black'}}>
    {element}
    <App />
  </div>,
  document.getElementById("root")
);
