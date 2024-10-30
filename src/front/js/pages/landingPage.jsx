import React from "react";
import BannerLanding from "../component/bannerLanding.jsx";
import CardsLanding from "../component/cardLanding.jsx";
import { useState } from "react";
import Filtros from "../component/filtros.js"

const LandingPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <BannerLanding />
            <div className="container d-flex justify-content-end">
                <button className="m-0 mt-5" onClick={() =>setIsOpen(!isOpen) }>Aplicar filtros <i class="fa-solid fa-caret-down"></i></button>
            </div>
            {
                isOpen && < Filtros />
            }
            <CardsLanding />
        </>
    )
}

export default LandingPage;