import React from "react";
import BannerLanding from "../component/bannerLanding.jsx";
import CardsLanding from "../component/cardLanding.jsx";
import { useState } from "react";
import Filtros from "../component/filtros.js"
import Modal from "../component/modalFiltros.js"


const LandingPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <BannerLanding />
<<<<<<< HEAD
            <Modal />
            {/* <div>
                <button className="btn btn-danger ms-4" onClick={() => setIsOpen(!isOpen)}>Filtros</button>
=======
            <div className="container d-flex justify-content-end">
                <button className="m-0 mt-5" onClick={() =>setIsOpen(!isOpen) }>Aplicar filtros <i class="fa-solid fa-caret-down"></i></button>
>>>>>>> 683ca0b73a70823b494a9e68c2a820ef5954ceb6
            </div>
            {
                isOpen && <Filtros />
            } */}
            <CardsLanding />
        </>
    )
}

export default LandingPage;