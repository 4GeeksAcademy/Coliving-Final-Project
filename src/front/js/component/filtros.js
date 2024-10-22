import React, { useState } from 'react';

const Habitaciones = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div className="d-flex justify-content-between align-items-center my-4" style={{ width: '100%' }}>
      <p className='filter-label'  style={{ flex: 1, textAlign: 'left' }}>{props.nombre}</p>
      <div className='d-flex justify-content-between align-items-center' style={{ flex: 1, maxWidth: '200px' }}>
        <button onClick={() => {  
          if (count > 0) {
            setCount(count - 1);
          }
        }} className='rounded-circle btn btn-outline-secondary custom-button' disabled={count === 0} style={{ width: '40px', height: '40px' }}>-</button>
        <p className="my-auto mx-4 filter-value" style={{ width: '80px', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{count === 0 ? "cualquiera" : count}</p>
        <button onClick={() => {
          setCount(count + 1);
        }} className='rounded-circle btn btn-outline-secondary custom-button' style={{ width: '40px', height: '40px' }}>+</button>
      </div>
    </div>
  )
}

const Filtros = () => {

  const [selectedType, selSelectedType] = useState(null);
  const [minPrice, setMinPrice] = useState('$5200');
  const [maxPrice, setMaxPrice] = useState('$190000+');

  const handleSelection = (type) => {
    selSelectedType(type);
  };

  const handleMinPriceChange = (e) => {
    const value = e.target.value;
    if (value.startsWith('$')) {
      setMinPrice(value);
    } else {
      setMinPrice('$' + value);
    }
  };

  const handleMaxPriceChange = (e) => {
    const value = e.target.value;
    if (value.endsWith('+')) {
      setMaxPrice(value);
    } else {
      setMaxPrice(value + '+');
    }
  };

  return (

    <div className="container mt-5 col-6 mx-auto p-3" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '10px', backgroundColor: '#fff'}} >
      <div className="d-flex justify-content-center align-items-center my-2 mx-2 position-relative" style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: '#fff', zIndex: 1 }}>
        <h3 className="mx-auto">Filtros</h3>
        <i className="fa-solid fa-x position-absolute start-0 ms-2" style={{ cursor: 'pointer' }}></i>
      </div>

      <hr className="mt-3" style={{ marginTop: '60px' }} />

      <h2 className="my-4">Recomendado para ti</h2>
      <div className="d-flex justify-content-center">
        <div className="card-group gap-3">
          <div className="card text-center border-0 bg-transparent">
            <div className="card-body">
              <i className="fas fa-parking fa-3x border p-3 rounded-circle" style={{ color: '#f7838d' }}></i>
              <p className="card=text mt-3">Estacionamiento Gratuito</p>
            </div>
          </div>

          <div className="card text-center border-0 bg-transparent">
            <div className="card-body">
              <i className="fas fa-ban fa-3x border p-3 rounded-circle" style={{ color: '#f7838d' }}></i>
              <p className="card-text mt-3">Cancelacion Gratuita</p>
            </div>
          </div>
          <div className="card text-center border-0 bg-transparent">
            <div className="card-body">
              <i className="fas fa-wind fa-3x border p-3 rounded-circle" style={{ color: '#f7838d' }}></i>
              <p className="card-text mt-3">Aire Acondicionado</p>
            </div>
          </div>
          <div className="card text-center border-0 bg-transparent">
            <div className="card-body">
              <i className="fas fa-tint fa-3x border p-3 rounded-circle" style={{ color: '#f7838d' }}></i>
              <p className="card-text mt-3">Lavadora</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-3" />

      <h2 className="my-4">Tipo de Alojamiento</h2>
      <div className='d-flex justify-content-center'>
        <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
          <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" onChange={() => handleSelection('any')} checked={selectedType === 'any'} />
          <label className={`btn custom-border ${selectedType === 'any' ? 'active' : ''}`} htmlFor="btncheck1">Cualquier Tipo</label>

          <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" onChange={() => handleSelection('room')} checked={selectedType === 'room'} />
          <label className={`btn custom-border ${selectedType === 'room' ? 'active' : ''}`} htmlFor="btncheck2">Habitacion</label>

          <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off" onChange={() => handleSelection('entire')} checked={selectedType === 'entire'} />
          <label className={`btn custom-border ${selectedType === 'entire' ? 'active' : ''}`} htmlFor="btncheck3">alojamiento entero</label>
        </div>
      </div>

      <hr className="mt-3" />

      <h2 className="my-4">Rango de Precios</h2>
      <p>Precios por noches sin incluir impuestos y tarifas</p>
      <div className="d-flex justify-content-between gap-5">
        <div className="d-flex flex-column align-items-center">
          <label htmlFor="minPrice" className="form-label mt-2">Mínimo</label>
          <input id="minPrice" className="form-control form-control-sm rounded-pill custom-input" type="text" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
          
        </div>
        <div className="d-flex flex-column align-items-center">
          <label htmlFor="maxPrice" className="form-label mt-2">Máximo</label>
          <input id="maxPrice" className="form-control form-control-sm rounded-pill custom-input" type="text" value={maxPrice} onChange={(e) =>setMaxPrice(e.target.value)} />
          
        </div>
      </div>

      <hr className="mt-3" />

      <h2 className="my-4">Habitaciones y Camas</h2>
      <Habitaciones nombre="Habitaciones" />
      <Habitaciones nombre="Camas" />
      <Habitaciones nombre="Baños" />

      <hr className="mt-3" />

      

    </div>
  );
};

export default Filtros;

