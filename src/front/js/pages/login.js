import React, { useState, useContext } from "react";
import "./../../styles/login.css";
import { Link } from "react-router-dom";
import { Context } from "./../store/appContext.js";

const [errors, setErrors] = useState({});
cons[(submitted, setSubmitted)] = useState(false);

export default function Login() {

  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="fw-bold py-5">Bienvenido al sistema!</h1>

            {/* LOGIN */}
            <form>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="name@example.com" required />
                <label>Email address</label>
              </div>
              <div className="form-floating">
                <input type="password" className="form-control" onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder="Password" required />
                <label>Password</label>
              </div>
              <div>
                <button onClick={() => actions.login({
                  email: user.email,
                  password: user.password
                })} className="submit">Log In</button>
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
