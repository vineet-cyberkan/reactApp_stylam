import React from "react";
//import Popup from './Popup';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";

function RouterLinks() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">products</Link>
          </li>
          <li>
            <Link to="/products/stylam">Stylam HPL</Link>
          </li>
          <li>
            <Link to="/products/violam">Violam HPL</Link>
          </li>
          <li>
            <Link to="/products/viotouch">Viotouch HPL</Link>
          </li>
          <li>
            <Link to="/products/leader">Leader HPL</Link>
          </li>
        </ul>        
      </div>
    </Router>
  );
}

export default RouterLinks;