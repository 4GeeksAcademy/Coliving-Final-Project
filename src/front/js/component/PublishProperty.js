import React, { useState } from "react";
import "./../../styles/AdPublish.css";
import toast from "react-hot-toast";



function Publish() {
  return (
    <>

      <div className="container-property-form">
        <div className="row">
          <div className="col">
            <h1 className="fw-bold py-4 mb-3 text-center">Publica tu anuncio!</h1>
            <form>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"

                  placeholder="Residencia en linda Vista"
                  required
                />
                <label >Titulo de la Publicacion</label>
              </div>
              <div className="form-floating mb-3 mt-4">
                <input
                  type="number"
                  className="form-control"

                  placeholder="Monto de Alquiler"
                  required
                />
                <label >Monto de Alquiler</label>
              </div>
              <div className="form-floating mb-3 mt-4">
                <input
                  type="text"
                  className="form-control"

                  placeholder="Ubicacion"
                  required
                />
                <label >Ubicacion Aproximada</label>
              </div>
              <div>
                <label className="form-label mt-4">Sube las fotos de tu propiedad</label><br />
                <input
                  multiple
                  type="file"
                  id="file"
                  className="upload-box"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files;

                    if (file.length >= 6) {
                      toast.error("No se puede subir mas de 5 imagenes");
                      document.getElementById("file").value = "";
                    }
                  }}
                />
              </div>
              <div className="form-floating my-4">
                <select className="form-select">
                  <option defaultValue={"Select"}>Seleccione el tiempo de estancia</option>
                  <option value="1">Estancia Corta</option>
                  <option value="2">Estancia Larga</option>
                  <option value="3">Sin preferencias</option>
                </select>
              </div>
              <div className="form-floating " >
                <textarea className="form-control  styleArea" placeholder="Escribe una descripción detallada de tu alojamiento" id="descripcion" ></textarea>
                <label >Descripcion</label>
              </div>
              <div className="form-floating  mt-4" >
                <textarea className="form-control styleArea" placeholder="Enliste sus reglas aqui" id="reglas"></textarea>
                <label >Escribe las Reglas por aca</label>
              </div>
              <button className="my-5"
                onClick={() => toast.success("Anuncio publicado 🎉")}
              >Publicar Anuncio</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Publish; 
