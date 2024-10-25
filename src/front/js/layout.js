import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import Home from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import ContactForm from "./component/ContactForm.js";
import HostProperty from "./component/HostProperty.jsx";
import Publish from "./component/PublishProperty.js";
import Login from "./pages/login";
import { Toaster } from 'react-hot-toast';
import { Navbar } from "./component/navbar.js";
import { Footer } from "./component/footer";
import Perfil from "./component/Perfil.js";
import Filtros from "./component/filtros.js"
import LandingPage from "./pages/landingPage.jsx";
import Registro from "./pages/registro.jsx";

//create your first component
const Layout = () => {
  const basename = process.env.BASENAME || "";

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "")
    return <BackendURL />;

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Perfil />} path="/perfil" />
            <Route element={<Filtros />} path="/filtros" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<Publish />} path="/property" />
            <Route element={<Login />} path="/login" />
            <Route element={<h1>Not found!</h1>} />
            <Route element={<ContactForm />} path="/contact" />
            <Route element={<HostProperty />} path="/hostProperty/:id" />
            <Route element={<LandingPage />} path="/landingPage" />
            <Route element={<Registro />} path="/registro" />
          </Routes>
          <Footer />
        </ScrollToTop>
        <Toaster />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
