import React, { useEffect, useState } from 'react'; 
import { useNavigate, useParams } from 'react-router-dom';
import "./../../styles/HostProperty.css";

const HostProperty = () => {
  const [property, setProperty] = useState(null);  // Estado para almacenar la propiedad
  const [loading, setLoading] = useState(true);    // Estado para manejar la carga
  const [errorMessage, setErrorMessage] = useState(''); // Estado para errores
  const navigate = useNavigate();
  const { id } = useParams();  // Obtenemos el ID de la propiedad desde los parámetros de la URL

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        // Cambiar la URL directamente para que use el backend preestablecido
        const response = await fetch(`https://orange-pancake-q7vj49q4jrjc9776-3001.app.github.dev/api/property/${id}`);
        
        if (!response.ok) {
          throw new Error('Error al obtener la propiedad, posiblemente no se encuentre o la URL es incorrecta.');
        }

        const data = await response.json();
        setProperty(data);
      } catch (error) {
        console.error(error);
        setErrorMessage(error.message); // Mostrar mensaje de error
      } finally {
        setLoading(false);  // Terminamos la carga
      }
    };
    
    fetchProperty();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-spinner">
        <i className="fas fa-spinner fa-spin"></i>
        <p>Cargando detalles de la propiedad...</p>
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="error-message">
        <p>{errorMessage}</p>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="error-message">
        <p>No se pudo encontrar la propiedad.</p>
      </div>
    );
  }

  return (
    <div className="host-property">
      <h1 className="host-property-title">{property.name}</h1>

      <div className="host-property-gallery">
        {property.files && property.files.split(',').map((img, index) => (
          <img key={index} src={img.trim()} alt={`Imagen ${index}`} className="host-property-image" />
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
            <li key={index}>{rule.trim()}</li>
          ))}
        </ul>
      </div>

      <div className="host-contact-host">
        <button onClick={() => navigate('/contact', { state: { hostId: property.user_id, hostName: property.name, location: property.address } })}>
          Contactar Host
        </button>
      </div>
    </div>
  );
};

export default HostProperty;
