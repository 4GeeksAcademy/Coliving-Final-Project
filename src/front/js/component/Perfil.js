import React, { useEffect, useContext, useState } from 'react';
import { Context } from "../store/appContext";





const Perfil = () => {
  const { store, actions } = useContext(Context)
  const [user, setUser] = useState({})




  useEffect(() => {
    const obtenerPerfil = async () => {
      let resp = await actions.getUserLogged()
      if (resp) {
        const initialValues = {
          imageUrl: "https://i.pravatar.cc/300",
          nombre: store.user.first_name,
          apellido: store.user.last_name,
          email: store.user.email,
          telefono: store.user.phone,
          documento: store.user.identity_document,
          direccion: store.user.address,
          contacto: store.user.emergency_phone
        }
        setUser(initialValues)
      }
    }
    obtenerPerfil()
  }, [])


  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }




  return (
    <div className="container mt-5 col-6 mx-auto" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '10px', backgroundColor: '#fff' }} >
      <fieldset>
        <legend style={{ textAlign: 'center', marginBottom: '20px' }}>Perfil de Usuario</legend>
        <div className="mb-3 d-flex justify-content-center">
          <img className="rounded-circle img-fluid" src={user.imageUrl} alt='Foto' style={{ width: '130px', height: '130px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2' }} />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Nombre Completo
          </label>
          <div className='row'>
            <div className='col'>
              <input
                type="text"
                // id="disabledTextInput"
                className="form-control"
                value={user.first_name || ""}
                placeholder={user.nombre ? user.nombre : "ingresa tu nombre"}
                onChange={(e) => handleChange(e)}
                name="first_name"
              // style={{ border: '1px solid #ced4da', borderRadius: '4px' }}
              />
            </div>
            <div className='col'>
              <input
                type="text"
                id="disabledTextInput"
                className="form-control"
                value={user.last_name || ""}
                placeholder={user.apellido ? user.apellido : "ingresa tu apellido"}
                onChange={(e) => handleChange(e)}
                name="last_name"
              // style={{ border: '1px solid #ced4da', borderRadius: '4px' }}
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="disabledTextInput" className="form-label">
            Email
          </label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            value={user.email || ""}
            placeholder={user.email ? user.email : "ingresa a tu correo"}
            onChange={(e) => handleChange(e)}
            name="email"
          // style={{ border: '1px solid #ced4da', borderRadius: '4px' }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="disabledTextInput" className="form-label">
            Telefono
          </label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            value={user.phone || ""}
            placeholder={user.telefono ? user.telefono : "ingresa tu celular"}
            onChange={(e) => handleChange(e)}
            name="phone"
          // style={{ border: '1px solid #ced4da', borderRadius: '4px' }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="disabledTextInput" className="form-label">
            Documento de identidad
          </label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            value={user.identity_document || ""}
            placeholder={user.documento ? user.documento : "ingresa tu DNI"}
            onChange={(e) => handleChange(e)}
            name="identity_document"
          // style={{ border: '1px solid #ced4da', borderRadius: '4px' }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="disabledTextInput" className="form-label">
            Direccion
          </label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            value={user.address || ""}
            placeholder={user.direccion ? user.direccion : "ingresa tu Direccion"}
            onChange={(e) => handleChange(e)}
            name="address"
          // style={{ border: '1px solid #ced4da', borderRadius: '4px' }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="disabledTextInput" className="form-label">
            Contacto de Emergencia
          </label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            value={user.emergency_phone || ""}
            placeholder={user.contacto ? user.contacto : "ingresa un constacto de emergencia"}
            onChange={(e) => handleChange(e)}
            name="emergency_phone"
          // style={{ border: '1px solid #ced4da', borderRadius: '4px' }}
          />


        </div>
        <div className="text-center">
          <button type="submit" className="btn" onClick={() => actions.updateUser(user.first_name,
            user.last_name,
            user.email,
            user.phone,
            user.identity_document,
            user.address,
            user.emergency_phone
          )}
            style={{
              backgroundColor: '#b64359',
              borderColor: '#b64359',
              color: 'white',
              borderRadius: '10px',
              padding: '10px 20px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
            Actualizar
          </button>
        </div>
      </fieldset>
    </div>
  );
};
export default Perfil;
