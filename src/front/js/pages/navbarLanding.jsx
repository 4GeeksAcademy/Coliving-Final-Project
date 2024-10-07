import React from "react";

const NavbarLanding = () => {
    return (
      <>
            <nav class="navbar">
              <h2 className="mx-3">Coliiving</h2>
              <div className="d-flex">
                <div className="d-flex gap-2 rounded-pill bg-light p-2 me-3">
                  <span>Pon tu espacio en Coliiving</span>
                  <i class="icono fa-solid fa-globe pe-2"></i>
                </div>
                <div className="d-flex gap-2 rounded-pill bg-light p-2 me-3">
                  <span>Filtros</span>
                  <i class="icono fa-solid fa-arrow-down-wide-short pe-2"></i>
                </div>
                <div className="d-flex gap-2 rounded-pill bg-light p-2 me-3">
                  <i class="icono fa-solid fa-bars px-2"></i>
                  <i class="icono fa-solid fa-circle-user pe-2"></i>
                </div>
              </div>
            </nav>
      </>
    )
}

export default NavbarLanding;