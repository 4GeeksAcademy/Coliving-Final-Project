import React from "react";
import NavbarLanding from "../component/navbarLanding.jsx";
import CardsLanding from "../component/cardLanding.jsx";
import FooterLanding from "../component/footerLanding.jsx";

const LandingPage = () => {
    return (
        <>
            <NavbarLanding />
            <CardsLanding />
            <CardsLanding />
            <CardsLanding />
            <CardsLanding /> 
            <FooterLanding />
        </>
    )
}

export default LandingPage;