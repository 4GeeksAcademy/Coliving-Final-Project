import React from "react";

const CardLanding = ({property}) => {
  return (
    <>
      <a href="" className="text-decoration-none text-black">
        <div>
          <div className="card shadow-sm">
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-984660069055099617/original/52ae844e-4928-4664-b962-7a13bf009f0d.jpeg?im_w=720" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{property.name}</h5>
              <p className="card-text">{property.description}</p>
              <p>{property.rooms_number} habitaciones - {property.beds} camas - {property.restrooms} baños</p>
              <p><strong>{property.price}</strong></p>
            </div>
          </div>
        </div>
      </a>
    </>
  )
}

const CardsLanding = () => {

  const properties = [
    {
      "name": "la casa de samuel",
      "price": "200$",
      "description": "Es un lugar seguro y acogedor ubicado en Argentina",
      "rules": "ambiente tranquilo, ideal para estudiar",
      "laundry": true,
      "parcking": false,
      "air_conditioning": true,
      "is_cancelable": false,
      "rooms_number": 5,
      "beds": 6,
      "restrooms": 3,
      "floor_type": "shared",
    },

    {
      "name": "la casa de anguibell",
      "price": "500$",
      "description": "Es un lugar acogedor ubicado en Venezuela",
      "rules": "ambiente tranquilo, ideal para trabajar",
      "laundry": false,
      "parcking": true,
      "air_conditioning": true,
      "is_cancelable": false,
      "rooms_number": 2,
      "beds": 4,
      "restrooms": 2,
      "floor_type": "private",
    },

    {
      "name": "la casa de ana",
      "price": "350$",
      "description": "Es un lugar tranquilo ubicado en Terrazas",
      "rules": "ideal para estudiar",
      "laundry": true,
      "parcking": false,
      "air_conditioning": true,
      "is_cancelable": false,
      "rooms_number": 4,
      "beds": 6,
      "restrooms": 3,
      "floor_type": "shared",
    },

    {
      "name": "la casa de carmen",
      "price": "150$",
      "description": "Es un lugar acogedor ubicado en Maracaibo",
      "rules": "ambiente de paz, ideal para estudiar",
      "laundry": true,
      "parcking": false,
      "air_conditioning": true,
      "is_cancelable": false,
      "rooms_number": 2,
      "beds": 2,
      "restrooms": 3,
      "floor_type": "private",
    }
  ]

  return (
    <>
      <div className="m-5">
        <div className="card-container">
            {
              properties.map((item, index) => {
                return <CardLanding property={item} key={index} />
              })
            }
        </div>
      </div>

    </>
  )
}

export default CardsLanding;