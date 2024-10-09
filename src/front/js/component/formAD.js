import React, { useState } from "react";
import "./../../styles/AdPublish.css";

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
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="fw-bold py-3">Publica tu anuncio!</h1>
            <form>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="titulo"
                  placeholder="Residencia en linda Vista"
                  required
                />
                <label for="titulo">Titulo de la Publicacion</label>
              </div>
              <div class="form-floating mb-3 mt-4">
                <input
                  type="number"
                  class="form-control"
                  id="renta"
                  placeholder="Monto de Alquiler"
                  required
                />
                <label for="renta">Monto de Alquiler</label>
              </div>
              <div class="form-floating mb-3 mt-4">
                <input
                  type="text"
                  class="form-control"
                  id="ubicacion"
                  placeholder="Ubicacion"
                  required
                />
                <label for="ubicacion">Ubicacion Aproximada</label>
              </div>
              <div>
                <input
                  type="file"
                  className="upload-box"
                  accept="image/*"
                ></input>
              </div>
              <div class="form-floating mb-3 ">
                <select className="form-floating">
                  <option selected>Seleccione el tiempo de estancia</option>
                  <option>Estancia Corta</option>
                  <option>Estancia Larga</option>
                </select>
              </div>
              <div class="form-floating">
                <textarea class="form-floating" id="descripcion"></textarea>
                <label for="descripcion">Descripcion</label>
              </div>
              <div class="form-floating">
                <textarea class="form-floating" id="reglas"></textarea>
                <label for="reglas">Escribe las Reglas por aca</label>
              </div>
              <button>Publicar Anuncio</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Publish;
