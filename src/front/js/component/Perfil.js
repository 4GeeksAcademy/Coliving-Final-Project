import React, {useEffect, useContext, useState} from 'react';
import {Context} from "../store/appContext";

const Perfil = () => {
  const {store, actions}=useContext( Context )
  const [user, setUser]=useState({})
  

useEffect(() => {
  obtenerPerfil()
},[])

const obtenerPerfil=async() => {
  let resp=await actions.getUserLogged()
  if(resp){
    const initialValues = {
      imageUrl: "https://i.pravatar.cc/300",
      nombre: store.user.first_name,
      apellido:store.user.last_name,
      email: store.user.email,
      telefono: store.user.phone,
      documento: store.user.identity_document,
      direccion: store.user.address,
      contacto: store.user.emergency_phone
    }
    setUser(initialValues)
  }
}

const handleChange=(e) => {
  setUser({
    ...user,
    [e.target.name]:e.target.value
  })
}

  return (
    <form className="container mt-5 col-6 mx-auto" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '10px', backgroundColor: '#fff' }} >
      <fieldset>
        <legend style={{ textAlign: 'center', marginBottom: '20px' }}>Perfil de Usuario</legend>
        <div className="mb-3 d-flex justify-content-center">
          <img className="rounded-circle img-fluid" src={user.imageUrl} alt='Foto' style={{ width: '130px', height: '130px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2' }} />
        </div>
        <div className="mb-3">
          <label htmlfor="" className="form-label">
            Nombre Completo
          </label>
          <div className='row'>
            <div className='col'>
              <input
                type="text"
                // id="disabledTextInput"
                className="form-control"
                value={user.nombre}
                onChange={(e)=> handleChange(e)}
                name="nombre"
              // style={{ border: '1px solid #ced4da', borderRadius: '4px' }}
              />
            </div>
            <div className='col'>
              <input
                type="text"
                id="disabledTextInput"
                className="form-control"
                value={user.apellido}
                onChange={(e)=> handleChange(e)}
                name="apellido"
              // style={{ border: '1px solid #ced4da', borderRadius: '4px' }}
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlfor="disabledTextInput" className="form-label">
            Email
          </label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            value={user.email}
            onChange={(e)=> handleChange(e)}
            name="email"
          // style={{ border: '1px solid #ced4da', borderRadius: '4px' }}
          />
        </div>
        <div className="mb-3">
          <label htmlfor="disabledTextInput" className="form-label">
            Telefono
          </label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            value={user.telefono}
                onChange={(e)=> handleChange(e)}
                name="telefono"
          // style={{ border: '1px solid #ced4da', borderRadius: '4px' }}
          />
        </div>
        <div className="mb-3">
          <label htmlfor="disabledTextInput" className="form-label">
            Documento de identidad
          </label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            value={user.documento}
                onChange={(e)=> handleChange(e)}
                name="documento"
          // style={{ border: '1px solid #ced4da', borderRadius: '4px' }}
          />
        </div>
        <div className="mb-3">
          <label htmlfor="disabledTextInput" className="form-label">
            Direccion
          </label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            value={user.direccion}
                onChange={(e)=> handleChange(e)}
                name="direccion"
          // style={{ border: '1px solid #ced4da', borderRadius: '4px' }}
          />
        </div>
        <div className="mb-3">
          <label htmlfor="disabledTextInput" className="form-label">
            Contacto de Emergencia
          </label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            value={user.contacto}
                onChange={(e)=> handleChange(e)}
                name="contacto"
          // style={{ border: '1px solid #ced4da', borderRadius: '4px' }}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn" style={{ backgroundColor: '#b64359', borderColor: '#b64359', color: 'white', borderRadius: '50px', padding: '10px 20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
            Editar
          </button>
        </div>
      </fieldset>
    </form>
  );
};
export default Perfil;
