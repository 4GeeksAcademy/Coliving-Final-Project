import "./../../styles/anguibell.css";
import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import img from "../../img/registro.jpg";

const Registro = () => {

  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [position, setPosition] = useState('');
  const navigate = useNavigate();
  const [oculto, setOculto] = useState('visually-hidden');

  useEffect(() => {
    if (store.user) {
      navigate("/");
    }
  }, [store.user]);

  const handlePositionChange = (value) => {
    setPosition(value);
    console.log(value)
    setUser ({ ...user, type_user: value }); // Actualiza el type_user en el estado
  };

  return (
    <>
    
      <div className="container-registro-form">
        <div className="row">
          <div className="col">
            <h1 className="fw-bold py-3 text-center mb-3">Registrate!</h1>
            <form>
              <div className="d-flex justify-content-between row">
                <div className="mb-3 col-6">
                  <label class="form-label text-black"><strong>First name</strong></label>
                  <input type="text" aria-label="First name" placeholder="First name" class="form-control" required onChange={(event) => setUser({
                    ...user,
                    first_name: event.target.value
                  })} />
                </div>
                <div className="mb-3 col-6">
                  <label class="form-label text-black"><strong>Last name</strong></label>
                  <input type="text" aria-label="Last name" placeholder="Last name" class="form-control" required onChange={(event) => setUser({
                    ...user,
                    last_name: event.target.value
                  })} />
                </div>
              </div>
              <div className="mb-3 ">
                <label for="exampleInputEmail1" class="form-label text-black"><strong>Email address</strong></label>
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="name@example.com" aria-describedby="emailHelp" required onChange={(event) => setUser({
                  ...user,
                  email: event.target.value
                })} />
                <div className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3 d-flex justify-content-between align-items-center">
                <label className="form-label text-black"><strong>Elige tu posición:</strong></label>
                <div className="d-flex gap-3">
                  <div className="form-check d-flex align-items-center">
                    <input
                        type="radio"
                        className="form-check-input small-radio"
                        id="guest"
                        name="position"
                        value="guest"
                        checked={position === 'guest'}
                        onChange={() => handlePositionChange('guest')}
                      />
                    <label className="form-check-label" htmlFor="guest">Guest</label>
                  </div>
                  <div className="form-check d-flex align-items-center">
                    <input
                        type="radio"
                        className="form-check-input small-radio"
                        id="host"
                        name="position"
                        value="host"
                        checked={position === 'host'}
                        onChange={() => handlePositionChange('host')}
                      />
                    <label className="form-check-label" htmlFor="host">Host</label>
                  </div>
                </div>
              </div>
              <div className="mb-3 ">
                <label htmlFor="exampleInputPassword1" className="form-label text-black"><strong>Password</strong></label>
                <div className="d-flex align-items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control shadow"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    required
                    onChange={(event) => setUser ({ ...user, password: event.target.value })} // Actualiza el estado de user.password
                  />
                  <span
                    className="input-group-text"
                    id="mostrar"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "🔒" : "👀"}
                  </span>
                </div>
              </div>
              <div className="mb-3 ">
                <label htmlFor="exampleInputPassword2" className="form-label text-black"><strong>Confirm Password</strong></label>
                <div className="d-flex align-items-center">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="form-control shadow"
                    id="exampleInputPassword2"
                    placeholder="Confirm Password"
                    required
                    onChange={(event) => setConfirmPassword(event.target.value)} // Actualiza el estado de confirmPassword
                  />
                  <span
                    className="input-group-text"
                    id="mostrar"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? "🔒" : "👀"}
                  </span>
                </div>
                <div className={`text-danger ${oculto}`}>Las contraseñas no coinciden</div>
              </div>
              <button type="submit" className="registro w-100 mt-2"
                onClick={async (event) => {
                  console.log(user)
                  event.preventDefault(); // Evita el comportamiento por defecto del formulario
                  if (user.password === confirmPassword) {
                    try {
                      await actions.registro(user.first_name, user.last_name, user.email, user.type_user, user.password);
                      // Redirigir o mostrar un mensaje de éxito si el registro es exitoso
                      navigate("/"); // O la ruta que desees
                    } catch (error) {
                      // Manejo de errores
                      alert(error.message || 'Ocurrió un error al registrarse. Inténtalo de nuevo.'); // Muestra el mensaje de error
                    }
                  } else {
                    setOculto('')
                  }
                }}
              >
                Registrarse
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Registro;