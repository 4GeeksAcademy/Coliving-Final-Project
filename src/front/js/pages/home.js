import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Filtros from "../component/filtros.js"
import LandingPage from "./landingPage.jsx";


const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <LandingPage />
  );
};

export default Home;
