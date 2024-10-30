import "./../../styles/anguibell.css";
import React from "react";

const BannerLanding = () => {
  return (
    <>
      <div>
        <div className="banner m-0 p-5">
        </div>
        <div className="text-banner">
          <img alt="imagen"
            src="https://github.com/4GeeksAcademy/Coliving-Final-Project/blob/main/src/front/img/roomies-pink.png?raw=true"
            style={{ width: "300px" }}
          />
          <strong><p className="ms-5">Tu comunidad universitaria, tu hogar. ¡Encuentra tu roommate ideal!</p></strong>
        </div>

      </div>
    </>
  )
}

export default BannerLanding;