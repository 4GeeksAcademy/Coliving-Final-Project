import React, { useState } from "react";
import "./../../styles/AdPublish.css";
import toast from "react-hot-toast";



function Publish() {
  return (
    <>

      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="fw-bold py-3">Publica tu anuncio!</h1>
            <form>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  placeholder="Residencia en linda Vista"
                  required
                />
                <label >Titulo de la Publicacion</label>
              </div>
              <div className="form-floating mb-3 mt-4">
                <input
                  type="number"
                  className="form-control"
                  name="rent"
                  placeholder="Monto de Alquiler"
                  required
                />
                <label >Monto de Alquiler</label>
              </div>
              <div className="form-floating mb-3 mt-4">
                <input
                  type="text"
                  className="form-control"
                  name="location"
                  placeholder="Ubicacion"
                  required
                />
                <label >Ubicacion Aproximada</label>
              </div>
              <div>
                <label className="form-label mt-4">Sube las fotos de tu propiedad</label>
                <input
                  multiple
                  type="file"
                  name="file"
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
              <div className="form-floating mb-3 ">
                <select className="form-floating" name="time">
                  <option defaultValue={"Select"}>Seleccione el tiempo de estancia</option>
                  <option>Estancia Corta</option>
                  <option>Estancia Larga</option>
                </select>
              </div>
              <div className="form-floating " >
                <textarea className="form-control  styleArea" name="description" placeholder="Escribe una descripción detallada de tu alojamiento" id="descripcion" ></textarea>
                <label >Descripcion</label>
              </div>
              <div className="form-floating  mt-4" name>
                <textarea className="form-control styleArea" name="rules" placeholder="Enliste sus reglas aqui" id="reglas"></textarea>
                <label >Escribe las Reglas por aca</label>
              </div>
              <button className="submit mt-5"
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
