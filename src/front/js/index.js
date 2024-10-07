//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Publish from "./pages/formAD.jsx";
import Login from "./pages/login.jsx";
import Layout from "./layout.js";
import Registro from "./pages/registro.jsx";
import LandingPage from "./pages/landingPage.jsx";
import NavbarLanding from "./pages/navbarLanding.jsx";
import HeaderLanding from "./pages/headerLanding.jsx";

//render your react application
ReactDOM.render(<LandingPage  />, document.querySelector("#app"));
