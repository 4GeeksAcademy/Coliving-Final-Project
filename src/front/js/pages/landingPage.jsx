import React from "react";
import BannerLanding from "../component/bannerLanding.jsx";
import CardsLanding from "../component/cardLanding.jsx";
import FooterLanding from "../component/footerLanding.jsx";


const LandingPage = () => {
    return (
        <>
            <BannerLanding />
            <CardsLanding />
            <FooterLanding />
        </>
    )
}

export default LandingPage;