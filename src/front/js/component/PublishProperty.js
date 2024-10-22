import React, { useState } from "react";
import "./../../styles/AdPublish.css";
import toast from "react-hot-toast";




function Publish() {

  const [position, setPosition] = useState('');
  const [cuartos, setCuartos] = useState('');
  const [banios, setBanios] = useState('');
  const [camas, setCamas] = useState('');

  return (
    <>

      <div className="container-property-form">
        <div className="row">
          <div className="col">
            <h1 className="fw-bold py-4 mb-3 text-center">Publica tu anuncio!</h1>
            <form>
              <div className="form-floating">
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
              <div className="form-floating  mt-4">
                <label className="upload-label mb-3">Sube las fotos de tu propiedad</label><br />
                <input
                  multiple
                  type="file"
                  id="file"
                  className="upload-box mt-4"
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
              <div className="mb-3 d-flex justify-content-between align-items-center">
                <label className="form-label text-black"><strong>Incluye servicio de lavandería:</strong></label>
                <div className="d-flex gap-3">
                  <div className="form-check d-flex align-items-center">
                    <input
                      type="radio"
                      className="form-check-input small-radio shadow"
                      id="guest"
                      name="position"
                      value="guest"
                      checked={position === 'Si'}
                      onChange={() => setPosition('Si')}
                    />
                    <label className="form-check-label" htmlFor="guest">Si</label>
                  </div>
                  <div className="form-check d-flex align-items-center">
                    <input
                      type="radio"
                      className="form-check-input small-radio shadow"
                      id="host"
                      name="position"
                      value="host"
                      checked={position === 'No'}
                      onChange={() => setPosition('No')}
                    />
                    <label className="form-check-label" htmlFor="host">No</label>
                  </div>
                </div>
              </div>
              <div className="mb-3 d-flex justify-content-between align-items-center">
                <label className="form-label text-black"><strong>Incluye parqueo:</strong></label>
                <div className="d-flex gap-3">
                  <div className="form-check d-flex align-items-center">
                    <input
                      type="radio"
                      className="form-check-input small-radio shadow"
                      id="guest"
                      name="position"
                      value="guest"
                      checked={position === 'Si'}
                      onChange={() => setPosition('Si')}
                    />
                    <label className="form-check-label" htmlFor="guest">Si</label>
                  </div>
                  <div className="form-check d-flex align-items-center">
                    <input
                      type="radio"
                      className="form-check-input small-radio shadow"
                      id="host"
                      name="position"
                      value="host"
                      checked={position === 'No'}
                      onChange={() => setPosition('No')}
                    />
                    <label className="form-check-label" htmlFor="host">No</label>
                  </div>
                </div>
              </div>
              <div className="mb-3 d-flex justify-content-between align-items-center">
                <label className="form-label text-black"><strong>Tiene aire acondicionado:</strong></label>
                <div className="d-flex gap-3">
                  <div className="form-check d-flex align-items-center">
                    <input
                      type="radio"
                      className="form-check-input small-radio shadow"
                      id="guest"
                      name="position"
                      value="guest"
                      checked={position === 'Si'}
                      onChange={() => setPosition('Si')}
                    />
                    <label className="form-check-label" htmlFor="guest">Si</label>
                  </div>
                  <div className="form-check d-flex align-items-center">
                    <input
                      type="radio"
                      className="form-check-input small-radio shadow"
                      id="host"
                      name="position"
                      value="host"
                      checked={position === 'No'}
                      onChange={() => setPosition('No')}
                    />
                    <label className="form-check-label" htmlFor="host">No</label>
                  </div>
                </div>
              </div>
              <div className="mb-3 d-flex justify-content-between align-items-center">
                <label className="form-label text-black"><strong>Se puede cancelar:</strong></label>
                <div className="d-flex gap-3">
                  <div className="form-check d-flex align-items-center">
                    <input
                      type="radio"
                      className="form-check-input small-radio shadow"
                      id="guest"
                      name="position"
                      value="guest"
                      checked={position === 'Si'}
                      onChange={() => setPosition('Si')}
                    />
                    <label className="form-check-label" htmlFor="guest">Si</label>
                  </div>
                  <div className="form-check d-flex align-items-center">
                    <input
                      type="radio"
                      className="form-check-input small-radio shadow"
                      id="host"
                      name="position"
                      value="host"
                      checked={position === 'No'}
                      onChange={() => setPosition('No')}
                    />
                    <label className="form-check-label" htmlFor="host">No</label>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between row">
                <div className="mb-3 col-4">
                  <label class="form-label text-black"><strong>Cuartos</strong></label>
                  <input type="number" placeholder="2" class="form-control" required onChange={(event) => setCuartos({
                    ...user,
                    cuartos: event.target.value
                  })} />
                </div>
                <div className="mb-3 col-4">
                  <label class="form-label text-black"><strong>Baños</strong></label>
                  <input type="number" aria-label="Last name" placeholder="3" class="form-control" required onChange={(event) => setBanios({
                    ...user,
                    banios: event.target.value
                  })} />
                </div>
                <div className="mb-3 col-4">
                  <label class="form-label text-black"><strong>Camas</strong></label>
                  <input type="number" aria-label="Last name" placeholder="5" class="form-control" required onChange={(event) => setCamas({
                    ...user,
                    camas: event.target.value
                  })} />
                </div>
              </div>
              <div className="form-floating mb-4" >
                <input className="form-control  styleArea" placeholder="Escribe una descripción detallada de tu alojamiento" id="descripcion" />
                <label >Tipo de Piso</label>
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
