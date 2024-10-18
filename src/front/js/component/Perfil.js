import React from 'react';


const Perfil = () => {
  const user = {
    imageUrl: "https://i.pravatar.cc/300",
    nombre: "Ramon Duarte",
    email: "@xxxxxxx",
    telefono: "+58 ***_***8979",
    documento: "***********",
    direccion: "***********",
    contacto: "+58 ****_****90857"
  }

  
  return (
    <form className="container mt-5 col-6 mx-auto">
      <fieldset disabled>
        <legend>Perfil de Usuario</legend>
        <div className="mb-3 d-flex justify-content-center">
          <img className="rounded-circle img-fluid" src={user.imageUrl} alt='Foto' style={{width: '150px', height: '150px'}} />
        </div>
        <div className="mb-3">
          <label for="disabledTextInput" className="form-label">
            Nombre Completo
          </label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            placeholder={user.nombre}
          />
        </div>
        <div className="mb-3">
          <label for="disabledTextInput" className="form-label">
            Email
          </label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            placeholder={user.email}
          />
        </div>
        <div className="mb-3">
          <label for="disabledTextInput" className="form-label">
            Telefono
          </label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            placeholder={user.telefono}
          />
        </div>
        <div className="mb-3">
          <label for="disabledTextInput" className="form-label">
            Documento de indentidad
          </label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            placeholder={user.documento}
          />
        </div>
        <div className="mb-3">
          <label for="disabledTextInput" className="form-label">
            Direccion
          </label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            placeholder={user.direccion}
          />
        </div>
        <div className="mb-3">
          <label for="disabledTextInput" className="form-label">
            Contacto de Emergencia
          </label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            placeholder={user.contacto}
          />
        </div>
        <button type="submit" className='button-centered'>
          Editar
        </button>
      </fieldset>
    </form>
  );
};
export default Perfil;
