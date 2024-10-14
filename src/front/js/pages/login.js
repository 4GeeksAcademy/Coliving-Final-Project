import React, { useState, useContext, useEffect } from "react";
import "./../../styles/login.css";
import { Link } from "react-router-dom";
import { Context } from "./../store/appContext.js";
import { useNavigate } from "react-router-dom";



export default function Login() {

  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();



  useEffect(() => {
    if (store.token) {
      navigate("/landingPage");
    }
  }, []);


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="fw-bold py-5">Coliving Login!</h1>

            {/* LOGIN */}
            <form>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="name@example.com" required />
                <label>Email address</label>
              </div>

              <div className="form-floating">
                <input type={showPassword ? "text" : "password"} id="password" className="form-control" onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder="Password" required />
                <label>Password</label>
                <div id="toggle" onClick={() => setShowPassword(!showPassword)}>{showPassword ? "🫣" : "👁️"}</div>
              </div>
              <div>
                <button onClick={() => actions.login(user.email, user.password)}
                  className="submit" type="button">Log In</button>
              </div>
              <div className="link-register mt-4">
                <Link to="/registro">
                  <span className="link-register-bground">
                    No tienes cuenta? Registrate
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}


