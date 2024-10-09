import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Filtros from "../component/filtros.js"


const Home = () => {
  const { store, actions } = useContext(Context);

  return <div className="text-center mt-5">

  </div>;
};

export default Home;
