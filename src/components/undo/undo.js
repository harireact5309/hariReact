import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser } from "@fortawesome/free-solid-svg-icons";

function Eraser(props) {
  function handleEraser(e) {
    e.preventDefault();
    props.handleColor("#ffffff");
  }

  return (
    <div className="eraser">

     <img src={require('../../icons/undo.png')}
       onClick={handleEraser}
       title="erase"
       className="fa-icon"
      />
    </div>
  );
}

export default Eraser;
