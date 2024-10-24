import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./../../styles/HostProperty.css";

const HostProperty = () => {
  const [property, setProperty] = useState(null);  // Estado para almacenar la propiedad
  const [loading, setLoading] = useState(true);    // Estado para manejar la carga
  const navigate = useNavigate();
  const { id } = useParams();  // Obtenemos el ID de la propiedad desde los parámetros de la URL

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/property/${id}`);
        if (!response.ok) {
          throw new Error('Error al obtener la propiedad');
        }
        const data = await response.json();
        setProperty(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);  // Terminamos la carga
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-spinner">
        <i className="fas fa-spinner fa-spin"></i> {/* Icono de carga */}
        <p>Cargando detalles de la propiedad...</p>
      </div>
    );
  }

  return (
    <div className="host-property">
      <h1 className="host-property-title">{property.name}</h1>

      <div className="host-property-gallery">
        {property.files && property.files.split(',').map((img, index) => (
          <img key={index} src={img} alt={`Imagen ${index}`} className="host-property-image" />
        ))}
      </div>

      <div className="host-property-info">
        <p><strong>Ubicación:</strong> {property.address}</p>
        <p><strong>Descripción:</strong> {property.description}</p>
        <p><strong>Renta Mensual:</strong> ${property.price} MXN</p>
        <p><strong>Disponibilidad:</strong> {property.stay}</p>
      </div>

      <div className="host-property-rules">
        <h2>Reglas de convivencia</h2>
        <ul>
          {property.rules && property.rules.split(',').map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </div>

      <div className="host-contact-host">
        <button onClick={() => navigate('/contact')}>
          Contactar Host
        </button>
      </div>
    </div>
  );
};

export default HostProperty;
