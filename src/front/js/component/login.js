import React, { useState } from "react";
import "./../../styles/login.css";
import { Link } from "react-router-dom";

const [errors, setErrors] = useState({});
cons[(submitted, setSubmitted)] = useState(false);

export default function Login() {
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  // const validate = () => {
  //   let errors = {};
  //   if (!formData.email) {
  //     errors.email = "Email es obligatorio";
  //   } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
  //     errors.email = "Email no valido";
  //   }
  //   if (!formData.password) {
  //     errors.phone = "La Contraseña es obligatoria";
  //   }
  //   return errors;
  // };

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const validationErrors = validate();
  //   if (Object.keys(validationErrors).length === 0) {
  //     setSubmitted(true);
  //     console.log("Formulario enviado:", formData);
  //   } else {
  //     setErrors(validationErrors);
  //   }
  // };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="fw-bold py-5">Bienvenido al sistema!</h1>

            {/* LOGIN */}
            <form>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  required
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  required
                />
                <label for="floatingPassword">Password</label>
              </div>
              <div>
                <button type="button" className="submit">
                  Log In
                </button>
              </div>

              <div className="link-register mt-4 ">
                <Link to="/register">
                  <a className="link-register-bground">
                    No tienes cuenta? Registrate
                  </a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
