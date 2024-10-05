//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Publish from "./pages/formAD.jsx";
import Login from "./pages/login.jsx";

//render your react application
ReactDOM.render(<Publish />, document.querySelector("#app"));
