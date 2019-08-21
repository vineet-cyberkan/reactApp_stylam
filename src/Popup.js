import React from "react";
import Popup from "reactjs-popup";
import './Popup.css';
 
export default () => (
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
);