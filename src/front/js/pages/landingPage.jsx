import React from "react";
import NavbarLanding from "../component/navbarLanding.jsx";
import CardsLanding from "../component/cardLanding.jsx";
import FooterLanding from "../component/footerLanding.jsx";
import Navbar from "./../component/navbar.js";

const LandingPage = () => {
    return (
        <>
            <Navbar />
            {/* <NavbarLanding /> */}
            <CardsLanding />
            <CardsLanding />
            <CardsLanding />
            <CardsLanding />
            <FooterLanding />
        </>
    )
}

export default LandingPage;