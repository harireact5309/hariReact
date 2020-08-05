import React from "react";
import "./Controls.css";
import Color from "../Color/Color";
import Eraser from "../Eraser/Eraser";
import Undo from "../undo/undo"
import Redo from "../redo/redo"

function Controls(props) {
  return (
    <div className="controls">

      <Undo handleColor={props.handleColor}/>
      <Redo handleColor={props.handleColor}/>
      <Color handleColor={props.handleColor} />
      <Eraser handleColor={props.handleColor} />
    
    </div>
  );
}

export default Controls;
