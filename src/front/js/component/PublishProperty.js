import React, { useState, useContext } from "react";
import "./../../styles/AdPublish.css";
import toast from "react-hot-toast";
import { initializeApp } from "firebase/app";
import { Context } from "../store/appContext";


import { getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
}

const firebaseApp = initializeApp(firebaseConfig);


function Publish() {

  const { store, actions } = useContext(Context);
  const [property, setProperty] = useState({
    parking: true,
    air_condition: true,
    is_cancelable: true,
    laundry: true,
    stay: "corta"
  });
  //  const [images, setImages] = useState(null);

  const [laundrys, setLaundrys] = useState(true);
  const [parking, setParking] = useState(true);
  const [air_condition, setAir_conditioning] = useState(true);
  const [can_cancell, setCan_Cancell] = useState(true);
  const [stay, setStay] = useState("corta")
  const [imagen, setImagen] = useState("")

  const uploadImage = async (image) => {

    try {
      if (!image) {
        throw new Error("No image provided");
      }

      const storage = getStorage(firebaseApp);

      const metadata = {
        contentType: image.type
      }
      const storageRef = ref(storage, `property_images/${image.name}`);
      const fileData = await uploadBytesResumable(storageRef, image, metadata);
      const fileUrl = await getDownloadURL(fileData.ref);
      //console.log("Esta es la direccion de la imagen", fileUrl);
      setImagen(fileUrl);
    } catch (error) {
      console.error("Error uploading image: ", error);
      toast.error("Error uploading image");
    }
  }

  const publishProperty = async (property) => {
    console.log(property)
    // let imgURL = await uploadImage()
    console.log(imagen)
    await actions.publishProperty(
      property.name,
      property.price,
      property.address,
      property.stay,
      property.description,
      property.rules,
      property.laundry,
      property.parking,
      property.air_condition,
      property.is_cancelable,
      property.floor_type,
      property.rooms_number,
      property.restrooms,
      property.beds,
      imagen
      //property.images[0]
    )
  };

  return (
    <>

      <div className="container-property-form">
        <div className="row">
          <div className="col">
            <h1 className="fw-bold py-4 mb-3 text-center">Publica tu anuncio!</h1>
            <div >
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setProperty({ ...property, name: e.target.value })}
                  placeholder="Residencia en linda Vista"
                  required
                />
                <label >Titulo de la Publicacion</label>
              </div>
              <div className="form-floating mb-3 mt-4">
                <input
                  type="number"
                  className="form-control"
                  onChange={(e) => setProperty({ ...property, price: e.target.value })}

                  placeholder="Monto de Alquiler"
                  required
                />
                <label >Monto de Alquiler</label>
              </div>
              <div className="form-floating mb-3 mt-4">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setProperty({ ...property, address: e.target.value })}
                  placeholder="Ubicacion"
                  required
                />
                <label >Ubicacion Aproximada</label>
              </div>
              <div className="form-floating  mt-4">
                <label className="upload-label mb-5">Sube las fotos de tu propiedad</label><br />
                {
                  property && property.files && property.files.map((file, index) => {
                    return <img key={index} src={URL.createObjectURL(file)} style={{ width: '100px' }} alt="imagen" className="img-preview" />
                  })
                }
                {
                  property && property.files && <button className="submit"
                    onClick={() => {
                      let images = [];
                      property.files.forEach(async (file) => {
                        let url = await uploadImage(file)
                        images.push(url);
                      })
                      setProperty({ ...property, images })
                    }}> Upload Image </button>
                }
                <input
                  multiple
                  type="file"
                  id="file"
                  className="upload-box mt-4"
                  accept="image/*"
                  required
                  onChange={(e) => {
                    setProperty({ ...property, files: [...e.target.files] })

                    const file = e.target.files;

                    if (file.length >= 6) {
                      toast.error("No se puede subir mas de 5 imagenes");
                      document.getElementById("file").value = "";
                    }

                  }}

                />
              </div>
              <div className="form-floating my-4">
                <select className="form-select" onChange={(e) => setProperty({ ...property, stay: e.target.value })}>
                  <option defaultValue={"Select"}>Seleccione el tiempo de estancia</option>
                  <option value="corta">Estancia Corta</option>
                  <option value="larga">Estancia Larga</option>
                  <option value="sin preferencias">Sin preferencias</option>
                </select>
              </div>
              <div className="mb-3 d-flex justify-content-between align-items-center">
                <label className="form-label text-black"><strong>Incluye servicio de lavandería:</strong></label>
                <div className="d-flex gap-3">
                  <div className="form-check d-flex align-items-center">
                    <input
                      type="radio"
                      className="form-check-input small-radio shadow"
                      checked={laundrys}
                      onChange={(e) => {
                        setProperty({ ...property, laundry: true })
                        setLaundrys(true)
                      }}
                    />
                    <label className="form-check-label" >Si</label>
                  </div>
                  <div className="form-check d-flex align-items-center">
                    <input
                      type="radio"
                      className="form-check-input small-radio shadow"

                      checked={!laundrys}
                      onChange={(e) => {
                        setLaundrys(false)
                        setProperty({ ...property, laundry: false })
                      }}
                    />
                    <label className="form-check-label">No</label>
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

                      checked={parking}
                      onChange={(e) => {
                        setProperty({ ...property, parking: true })
                        setParking(true)
                      }}
                    />
                    <label className="form-check-label" >Si</label>
                  </div>
                  <div className="form-check d-flex align-items-center">
                    <input
                      type="radio"
                      className="form-check-input small-radio shadow"

                      checked={!parking}
                      onChange={(e) => {
                        setProperty({ ...property, parking: false })
                        setParking(false)
                      }}
                    />
                    <label className="form-check-label" >No</label>
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

                      checked={air_condition}
                      onChange={(e) => {
                        setProperty({ ...property, air_condition: true })
                        setAir_conditioning(true)
                      }}
                    />
                    <label className="form-check-label">Si</label>
                  </div>
                  <div className="form-check d-flex align-items-center">
                    <input
                      type="radio"
                      className="form-check-input small-radio shadow"

                      checked={!air_condition}
                      onChange={(e) => {
                        setProperty({ ...property, air_condition: false })
                        setAir_conditioning(false)
                      }}
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

                      checked={can_cancell}
                      onChange={(e) => {
                        setProperty({ ...property, is_cancelable: true })
                        setCan_Cancell(true)
                      }}
                    />
                    <label className="form-check-label" htmlFor="guest">Si</label>
                  </div>
                  <div className="form-check d-flex align-items-center">
                    <input
                      type="radio"
                      className="form-check-input small-radio shadow"
                      checked={!can_cancell}
                      onChange={(e) => {
                        setProperty({ ...property, is_cancelable: false })
                        setCan_Cancell(false)
                      }}
                    />
                    <label className="form-check-label">No</label>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between row">
                <div className="mb-3 col-4">
                  <label className="form-label text-black"><strong>Cuartos</strong></label>
                  <input type="number" placeholder="2" className="form-control" required onChange={(e) => setProperty({
                    ...property,
                    rooms_number: parseInt(e.target.value)
                  })} />
                </div>
                <div className="mb-3 col-4">
                  <label className="form-label text-black"><strong>Baños</strong></label>
                  <input type="number" aria-label="Last name" placeholder="3" className="form-control" required onChange={(e) => setProperty({
                    ...property,
                    restrooms: parseInt(e.target.value)
                  })} />
                </div>
                <div className="mb-3 col-4">
                  <label className="form-label text-black"><strong>Camas</strong></label>
                  <input type="number" placeholder="5" className="form-control" required onChange={(e) => setProperty({
                    ...property,
                    beds: parseInt(e.target.value)
                  })} />
                </div>
              </div>
              <div className="form-floating mb-4" >
                <input className="form-control  styleArea" placeholder="Escribe una descripción detallada de tu alojamiento" id="descripcion" required
                  onChange={(e) => setProperty({ ...property, floor_type: e.target.value })} />
                <label >Tipo de Piso</label>
              </div>
              <div className="form-floating " >
                <textarea className="form-control  styleArea" placeholder="Escribe una descripción detallada de tu alojamiento" id="descripcion" required
                  onChange={(e) => setProperty({ ...property, description: e.target.value })} />                <label >Descripcion</label>
              </div>
              <div className="form-floating  mt-4" >
                <textarea className="form-control styleArea" placeholder="Enliste sus reglas aqui" id="reglas"
                  onChange={(e) => setProperty({ ...property, rules: e.target.value })}
                />
                <label >Escribe las Reglas por aca</label>
              </div>
              <button className="my-5"
                onClick={() => {
                  console.log(property);
                  publishProperty(property);
                  toast.success("Anuncio publicado 🎉")
                }}
              >Publicar Anuncio</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Publish; 
