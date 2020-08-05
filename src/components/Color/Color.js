import React, { useState } from "react";
import { ChromePicker } from "react-color";

function Color(props) {
  const popover = {
    position: "absolute",
    zIndex: "2",
  };
  const cover = {
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
  };
  const [displayed, setDisplayed] = useState(false);
  const [color, setColor] = useState("#000000");

  function handleClick() {
    setDisplayed(true);
  }

  function handleClose() {
    setDisplayed(false);
  }

  function handleChange(pickerColor) {
    setColor(pickerColor.hex);
    props.handleColor(pickerColor.hex);
  }

  return (
    <div className="color">
      <img src={require('../../icons/color.png')}
       onClick={handleClick}
       title="choose color"
       className="fa-icon"

      />
      {displayed ? (
        <div style={popover}>
          <div style={cover} onClick={handleClose} />
          <ChromePicker color={color} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
}

export default Color;