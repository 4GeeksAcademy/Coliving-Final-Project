import React from "react";

export function Btn_linkAD() {
  return (
    <>
      <Link to="/publish" className="btn btn-primary">
        Publicar Anuncio
      </Link>
    </>
  );
}
function Publish() {
  return (
    <>
      <h1 class="text-center mt-3 mb-4">Publicación de Anuncio</h1>
      <div class="container">
        <br />
        <br />
        <p class="text-center">Publica tu Alojamiento!</p>
        <form id="anuncioForm">
          <div className="mb-3">
            <label for="title" class="form-label mt-3">
              Titulo del Anuncio:
            </label>
            <input
              type="text"
              class="form-control"
              id="title"
              name="title"
              required
            />
          </div>
          <div className="mb-3">
            <label for="rent" class="form-label mt-4">
              Precio de Alquiler:
            </label>
            <input
              type="number"
              className="form-control"
              id="rent"
              name="rent"
              required
            />
          </div>
          <div class="mb-3">
            <label for="location" className="form-label mt-3">
              Ubicacion aproximada:
            </label>
            <input
              type="text"
              className="form-control"
              id="location"
              name="location"
              required
            />
          </div>
          <div class="mb-1">
            <label for="images" className="form-label mt-3">
              Imágenes del Anuncio:
            </label>
            <input
              type="file"
              className="form-control"
              id="images"
              name="images"
              multiple
              required
            />
          </div>

          <div class="mb-3">
            <div class="dropdown mt-3">
              <button
                className="btn btn-secondary dropdown-toggle mt-5 mb-3"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Seleccione el tiempo de Estancia Aceptada
              </button>
              <ul
                class="dropdown-menu text-center"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a className="dropdown-item">Estancia Corta</a>
                </li>
                <li>
                  <a className="dropdown-item">Estancia Larga</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="mb-3">
            <label for="description" class="form-label mt-2">
              Descripcion del Anuncio:
            </label>
            <textarea
              class="form-control tArea"
              id="description"
              name="description"
              rows="3"
              required
            ></textarea>
          </div>
          <div class="mb-3">
            <label for="rules" class="form-label mt-4">
              Reglas a seguir
            </label>
            <textarea
              class="form-control tArea"
              id="rules"
              name="rules"
              rows="3"
              required
            ></textarea>
          </div>

          <button type="submit" class="publish mb-3 mt-5 mb-5">
            Publicar Anuncio
          </button>
        </form>
      </div>
      <div className="ejemplo">
        <h1>ejemplo</h1>
      </div>
    </>
  );
}

export default Publish;
