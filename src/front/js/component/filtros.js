import React, { useState } from 'react';

const Filtros = () => {

  const [selectedType, selSelectedType] = useState(null);

  const handleSelection = (type) => {
    selSelectedType(type);
  };

  return (

    <div className="container mt-5 col-6 mx-auto p-3">
      <div className="d-flex justify-content-center align-items-center my-2 mx-2 position-relative">
        <h3 className="mx-auto">Filtros</h3>
        <i className="fa-solid fa-x position-absolute start-0 ms-2"></i>
      </div>

      <hr class="mt-3" />

      <h3 className="my-4">Recomendado para ti</h3>
      <div className="d-flex justify-content-center">
        <div className="card-group gap-3">
          <div className="card text-center border-0 bg-transparent">
            <div className="card-body">
              <i className="fas fa-parking fa-3x border p-3 rounded-circle"></i>
              <p className="card=text mt-3">Estacionamiento Gratuito</p>
            </div>
          </div>

          <div className="card text-center border-0 bg-transparent">
            <div className="card-body">
              <i className="fas fa-ban fa-3x border p-3 rounded-circle"></i>
              <p className="card-text mt-3">Cancelacion Gratuita</p>
            </div>
          </div>
          <div className="card text-center border-0 bg-transparent">
            <div className="card-body">
              <i className="fas fa-wind fa-3x border p-3 rounded-circle"></i>
              <p className="card-text mt-3">Aire Acondicionado</p>
            </div>
          </div>
          <div className="card text-center border-0 bg-transparent">
            <div className="card-body">
              <i className="fas fa-tint fa-3x border p-3 rounded-circle"></i>
              <p className="card-text mt-3">Lavadora</p>
            </div>
          </div>
        </div>
      </div>

      <hr class="mt-3" />

      <h2 className="my-4">Tipo de Alojamiento</h2>

      <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
        <input type="checkbox" className="btn-check" id="btncheck1" autocomplete="off" onChange={() => handleSelection('any')} checked={selectedType === 'any'} />
        <label className={"btn btn-outline-Success ${selectedType === 'any' ? 'active' : ''}"} htmlFor="btncheck1">Cualquier Tipo</label>

        <input type="checkbox" className="btn-check" id="btncheck2" autocomplete="off" onChange={() => handleSelection('room')} checked={selectedType === 'room'} />
        <label className={"btn btn-outline-Success ${selectedType === 'room' ? 'active' : ''}"} htmlFor="btncheck2">Habitacion</label>

        <input type="checkbox" className="btn-check" id="btncheck3" autocomplete="off" onChange={() => handleSelection('entire')} checked={selectedType === 'entire'} />
        <label className={"btn btn-outline-Success ${selectedType === 'entire' ? 'active' : ''}"} htmlFor="btncheck3">alojamiento entero</label>
      </div>

      <hr class="mt-3" />

      <h2 className="my-4">Rango de Precios</h2>
      <p>Precios por noches sin incluir impuestos y tarifas</p>
      <div className="d-flex justify-content-between gap-5">
        <button className="btn btn-outline-secondary btn-sm" type="button">$5200</button>
        <button class="btn btn-outline-secondary btn-sm" type="button">$190000+</button>
      </div>

      <hr class="mt-3" />

      <h2 className="my-4">Habitaciones y Camas</h2>
      <div className="d-flex justify-content-between m-5">
        <p>Habitaciones</p>
        <p>Cualquiera</p>
      </div>
      <div className="d-flex justify-content-between m-5">
        <p>Camas</p>
        <p>Cualquiera</p>
      </div>
      <div className="d-flex justify-content-between m-5">
        <p>Banos</p>
        <p>Cualquiera</p>
      </div>

      <hr class="mt-3" />

    </div>
  );
};

export default Filtros;

