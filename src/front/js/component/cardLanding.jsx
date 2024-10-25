import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardLanding = ({ property }) => {
  return (
    <>
      <Link to={'/single/' + property.id} className="text-decoration-none text-black">
        <div>
          <div className="card shadow-sm">
            <img src={property.files} className="card-img-top" alt="Imagen de la propiedad" />
            <div className="card-body">
              <h5 className="card-title">{property.name}</h5>
              <p className="card-text">{property.description}</p>
              <p>{property.rooms_number} habitaciones - {property.beds} camas - {property.restrooms} baños</p>
              <p><strong>${property.price}</strong></p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

const CardsLanding = () => {
  const { store } = useContext(Context);
  
  return (
    <>
      <div className="m-5">
        <div className="card-container">
          {store.properties.map((item, index) => {
            return <CardLanding property={item} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default CardsLanding;
