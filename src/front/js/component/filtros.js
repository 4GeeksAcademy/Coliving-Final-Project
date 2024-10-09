import React from 'react';

const Filtros = () => {

  return (

    <div className="container mt-5 col-6 mx-auto">
      <div className="d-flex justify-content-between align-items-center my-2 mx-2">
        <i class="fa-solid fa-x"></i>
        <h3>Filtros</h3>
      </div>
      <h3 className="my-3">Recomendado para ti</h3>
      <div className="card-group">
        <div className="card">
          <img src="https://images.unsplash.com/photo-1517547093881-96754b9f8f79?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Estacionamiento Gratuito" />
          <div className="card-body">
            <p className="caed=text">Estacionamiento Gratuito</p>
          </div>
        </div>
        <div className="card">
          <img src="https://plus.unsplash.com/premium_photo-1676422355555-50d239f9d801?q=80&w=1508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Cancelacion Gratuita" />
          <div className="card-body">
            <p className="card-text">Cancelacion Gratuita</p>
          </div>
        </div>
        <div className="card">
          <img src="https://plus.unsplash.com/premium_photo-1661541267138-de69ec33e540?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Aire Acondicionado" />
          <div className="card-body">
            <p className="card-text">Aire Acondicionado</p>
          </div>
        </div>
        <div className="card">
          <img src="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Lavadora" />
          <div className="card-body">
            <p className="card-text">Lavadora</p>
          </div>
        </div>
      </div>

      <h2 className="my-4">Tipo de Alojamiento</h2>

      <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
        <input type="checkbox" className="btn-check" id="btncheck1" autocomplete="off" />
        <label className="btn btn-outline-primary" for="btncheck1">Cualquier Tipo</label>

        <input type="checkbox" className="btn-check" id="btncheck2" autocomplete="off" />
        <label className="btn btn-outline-primary" for="btncheck2">Habitacion</label>

        <input type="checkbox" className="btn-check" id="btncheck3" autocomplete="off" />
        <label className="btn btn-outline-primary" for="btncheck3">alojamiento entero</label>
      </div>

      <h2 className="my-4">Rango de Precios</h2>
      <p>Precios por noches sin incluir impuestos y tarifas</p>
      <div className="d-flex justify-content-between">
        <button type="button" class="btn btn-primary">Light</button>
        <button type="button" class="btn btn-primary">Light</button>
      </div>

    </div>
  );
};

export default Filtros;

