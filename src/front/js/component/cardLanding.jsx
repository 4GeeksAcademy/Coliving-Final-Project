import React from "react";

const CardLanding = () => {
    return (
      <>
      <a href="" className="text-decoration-none text-black">
        <div>
          <div class="card shadow-sm">
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-984660069055099617/original/52ae844e-4928-4664-b962-7a13bf009f0d.jpeg?im_w=720" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Alojamiento entero en Santa Rosa</h5>
              <p class="card-text">Disfrutarás de un lugar seguro y acogedor ubicado dentro de un circuito cerrado, en un ambiente tranquilo,ideal para descansar.</p>
              <p>8 huéspedes - 3 habitaciones - 5 camas - 2,5 baños</p>
              <p><strong>200$ mensuales</strong></p>
            </div>
          </div>
        </div>
      </a>
      </>
    )
}

const CardsLanding = () => {
  return (
    <>
            <div className="d-flex gap-4 m-4">
                <CardLanding />
                <CardLanding />
                <CardLanding />
                <CardLanding />
            </div>
    </>
    )
}

export default CardsLanding;