import React, { useState } from "react";
import "./../../styles/AdPublish.css";
import toast from "react-hot-toast";
import Navbar from "./navbar.js";


function Publish() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="fw-bold py-3">Publica tu anuncio!</h1>
            <form>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="titulo"
                  placeholder="Residencia en linda Vista"
                  required
                />
                <label >Titulo de la Publicacion</label>
              </div>
              <div className="form-floating mb-3 mt-4">
                <input
                  type="number"
                  className="form-control"
                  id="renta"
                  placeholder="Monto de Alquiler"
                  required
                />
                <label >Monto de Alquiler</label>
              </div>
              <div className="form-floating mb-3 mt-4">
                <input
                  type="text"
                  className="form-control"
                  id="ubicacion"
                  placeholder="Ubicacion"
                  required
                />
                <label >Ubicacion Aproximada</label>
              </div>
              <div>
                <input
                  multiple
                  type="file"
                  id="file"
                  className="upload-box"
                  accept="image/*"
                  onChange={(e) => {
                    const files = e.target.value;
                    console.log(files);
                    if (files.length > 5) {
                      toast.error("No se puede subir mas de 5 imagenes");
                      document.getElementById("file").value = "";
                    }
                  }}
                />
              </div>
              <div className="form-floating mb-3 ">
                <select className="form-floating">
                  <option defaultValue={"Select"}>Seleccione el tiempo de estancia</option>
                  <option>Estancia Corta</option>
                  <option>Estancia Larga</option>
                </select>
              </div>
              <div className="form-floating ">
                <textarea className="form-control styleArea" placeholder="Escribe una descripción detallada de tu alojamiento" id="descripcion" ></textarea>
                <label >Comments</label>
              </div>
              <div className="form-floating  mt-4">
                <textarea className="form-control styleArea" placeholder="Enliste sus reglas aqui" id="reglas"></textarea>
                <label >Escribe las Reglas por aca</label>
              </div>
              <button className="submit mt-5">Publicar Anuncio</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Publish;
