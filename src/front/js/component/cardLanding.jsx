import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardLanding = ({ property }) => {
  const images = property.files ? property.files.split(",") : [];
  const mainImage = images.length > 0 ? images[0] : "default-image.jpg"; // Imagen por defecto si no hay archivos.

  return (
    <Link to={`/hostProperty/${property.id}`} className="text-decoration-none text-black">
      <div>
        <div className="card shadow-sm">
          <img src={mainImage} className="card-img-top" alt="Imagen de la propiedad" />
          <div className="card-body">
            <h5 className="card-title">{property.name}</h5>
            <p className="card-text">{property.description}</p>
            <p>{property.rooms_number} habitaciones - {property.beds} camas - {property.restrooms} baños</p>
            <p><strong>${property.price}</strong></p>
          </div>
        </div>
      </div>
    </Link>
  );
}

const CardsLanding = () => {
  const { store } = useContext(Context);

  return (
    <div className="m-5">
      <div className="card-container row">
        {
          store.properties.length > 0 ? (
            store.properties.map((item, index) => (
              <div key={index} className="col-md-4 mb-4">
                <CardLanding property={item} />
              </div>
            ))
          ) : (
            <p>No hay propiedades disponibles en este momento.</p>
          )
        }
      </div>
    </div>
  );
}

export default CardsLanding;
