import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import Home from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import ContactForm from "./component/ContactForm.js";
import Publish from "./component/formAD.js";
import Login from "./pages/login";
import { Toaster } from 'react-hot-toast';
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Perfil from "./component/Perfil.js";
import Filtros from "./component/filtros.js"
import LandingPage from "./pages/landingPage.jsx";
import Registro from "./pages/registro.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "")
    return <BackendURL />;

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Perfil />} path="/perfil" />
            <Route element={<Filtros />} path="/filtros" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<Publish />} path="/formAD" />
            <Route element={<Login />} path="/login" />
            <Route element={<h1>Not found!</h1>} />
            <Route element={<ContactForm />} path="/contact" />
            <Route element={<LandingPage />} path="/landingPage" />
            <Route element={<Registro />} path="/registro" />
          </Routes>
        </ScrollToTop>
        <Toaster />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
