import React from 'react';


const Perfil = () => {
  const user = {
    imageUrl: "https://i.pravatar.cc/300",
    nombre: "Ramon Duarte",
    email: "ramon@example.com",
    telefono: "+58 1234 8979",
    documento: "V-392834729",
    direccion: "Calle Real 4321, Caracas",
    contacto: "+58 7873 0857"
  }


  return (
    <form className="container mt-5 col-6 mx-auto" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '10px', backgroundColor: '#fff' }} >
      <fieldset disabled>
        <legend style={{ textAlign: 'center', marginBottom: '20px' }}>Perfil de Usuario</legend>
        <div className="mb-3 d-flex justify-content-center">
          <img className="rounded-circle img-fluid" src={user.imageUrl} alt='Foto' style={{width: '130px', height: '130px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2'}} />
        </div>
        <div className="mb-3">
          <label htmlfor="disabledTextInput" className="form-label">
            Nombre Completo
          </label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            placeholder={user.nombre}
            // style={{ border: '1px solid #ced4da', borderRadius: '4px' }}
          />
        </div>
        <div className="mb-3">
          <label htmlfor="disabledTextInput" className="form-label">
            Email
          </label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            placeholder={user.email}
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
            placeholder={user.telefono}
            // style={{ border: '1px solid #ced4da', borderRadius: '4px' }}
          />
        </div>
        <div className="mb-3">
          <label htmlfor="disabledTextInput" className="form-label">
            Documento de indentidad
          </label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            placeholder={user.documento}
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
            placeholder={user.direccion}
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
            placeholder={user.contacto}
            // style={{ border: '1px solid #ced4da', borderRadius: '4px' }}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn" style={{ backgroundColor: '#b64359', borderColor: '#b64359',  color: 'white', borderRadius: '50px', padding: '10px 20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
            Editar
          </button>
        </div>
      </fieldset>
    </form>
  );
};
export default Perfil;
