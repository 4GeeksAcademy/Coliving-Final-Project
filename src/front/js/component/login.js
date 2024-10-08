import React from "react";
import "./../../styles/login.css";
import { Link } from "react-router-dom";

export default function Login() {
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
                  <span></span>
                  <a className="link-register-bground">
                    No tienes cuenta? Registrate
                  </a>
                </Link>
              </div>
            </form>
          </div>
        </div>
        {/* <div className="login">
          <h1 className="form-title fw-bold">Bienvenido al sistema!</h1>
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
          <div className="link-register mt-4">
            <Link to="/register">
              <a className="link-register-bground">
                No tienes cuenta? Registrate
              </a>
            </Link>
          </div>
        </div> */}
      </div>
    </>
  );
}
