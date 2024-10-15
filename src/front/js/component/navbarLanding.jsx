import React from "react";


const NavbarLanding = () => {
  return (
    <>

      {/* <div className="link-register mx-auto text-center mt-4">
        <span className="register">No tienes cuenta?
          <Link to="/registro"> Registrate </Link>
        </span>
      </div> */}
      <nav class="navbar m-4 border shadow">
        <h2 className="mx-3 nombre">Coliiving</h2>
        <div className="d-flex align-items-center">
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