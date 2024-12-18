import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import Home from "./pages/home";
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
  const property = {
    title: "Departamento en el centro de Monterrey",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-984660069055099617/original/52ae844e-4928-4664-b962-7a13bf009f0d.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-984660069055099617/original/52ae844e-4928-4664-b962-7a13bf009f0d.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-984660069055099617/original/52ae844e-4928-4664-b962-7a13bf009f0d.jpeg?im_w=720",
    ],
    location: "Centro, Monterrey, Nuevo León",
    description: "Amplio departamento con 2 habitaciones y 1 baño, ideal para compartir.",
    rent: 8000,
    availability: true,
    rules: ["No mascotas", "No fiestas", "Convivencia respetuosa"],
    hostName: "Carlos López"
  };
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
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
            <Route element={<Perfil />} path="/perfil" />
            <Route element={<Filtros />} path="/filtros" />
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


