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
            <div>
                <button className="btn btn-danger" onClick={() =>setIsOpen(!isOpen) }>Filtros</button>
            </div>
            {
                isOpen && < Filtros />
            }
            <CardsLanding />
        </>
    )
}

export default LandingPage;