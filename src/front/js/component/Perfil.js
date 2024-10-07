import React from "react";
const Perfil = () => {
  const user = {
    imageUrl: "https://i.pravatar.cc/300",
    nombre: "Euclides Teran",
    email: "@xxxxxxx",
    telefono: "+58 ***_***8979",
    documento: "***********",
    direccion: "***********",
    contacto: "+58 ****_****90857",
  };
  return (
    <form class="container mt-5 col-6 mx-auto">
      <fieldset disabled>
        <legend>Perfil de Usuario</legend>
        <div class="mb-3">
          <img class="rounded-circle" src={user.imageUrl} />
        </div>
        <div class="mb-3">
          <label for="disabledTextInput" class="form-label">
            Nombre Completo
          </label>
          <input
            type="text"
            id="disabledTextInput"
            class="form-control"
            placeholder={user.nombre}
          />
        </div>
        <div class="mb-3">
          <label for="disabledTextInput" class="form-label">
            Email
          </label>
          <input
            type="text"
            id="disabledTextInput"
            class="form-control"
            placeholder={user.email}
          />
        </div>
        <div class="mb-3">
          <label for="disabledTextInput" class="form-label">
            Telefono
          </label>
          <input
            type="text"
            id="disabledTextInput"
            class="form-control"
            placeholder={user.telefono}
          />
        </div>
        <div class="mb-3">
          <label for="disabledTextInput" class="form-label">
            Documento de indentidad
          </label>
          <input
            type="text"
            id="disabledTextInput"
            class="form-control"
            placeholder={user.documento}
          />
        </div>
        <div class="mb-3">
          <label for="disabledTextInput" class="form-label">
            Direccion
          </label>
          <input
            type="text"
            id="disabledTextInput"
            class="form-control"
            placeholder={user.direccion}
          />
        </div>
        <div class="mb-3">
          <label for="disabledTextInput" class="form-label">
            Contacto de Emergencia
          </label>
          <input
            type="text"
            id="disabledTextInput"
            class="form-control"
            placeholder={user.contacto}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Editar
        </button>
      </fieldset>
    </form>
  );
};
export default Perfil;
