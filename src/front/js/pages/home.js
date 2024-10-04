import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Btn_linkAD from "./formAD.jsx";

Home = () => {
  const { store, actions } = useContext(Context);

  <Btn_linkAD />;

  return <div className="text-center mt-5"></div>;
};

export default Home;
