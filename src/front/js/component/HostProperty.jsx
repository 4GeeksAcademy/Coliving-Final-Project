import React from 'react';
import "./../../styles/HostProperty.css";

const HostProperty = ({ property }) => {
  return (
    <div className="host-property">
      <h1 className="host-property-title">{property.title}</h1>

      <div className="host-property-gallery">
        {property.images.map((img, index) => (
          <img key={index} src={img} alt={`Imagen ${index}`} className="host-property-image" />
        ))}
      </div>

      <div className="host-property-info">
        <p><strong>Ubicación:</strong> {property.location}</p>
        <p><strong>Descripción:</strong> {property.description}</p>
        <p><strong>Renta Mensual:</strong> ${property.rent} MXN</p>
        <p><strong>Disponibilidad:</strong> {property.availability ? 'Disponible' : 'No disponible'}</p>
      </div>

      <div className="host-property-rules">
        <h2>Reglas de convivencia</h2>
        <ul>
          {property.rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </div>

      <div className="host-contact-host">
        <button onClick={() => alert(`Contactar a ${property.hostName}`)}>
          Contactar Host
        </button>
      </div>
    </div>
  );
};

export default HostProperty;
