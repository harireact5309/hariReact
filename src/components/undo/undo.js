import React from "react";

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
