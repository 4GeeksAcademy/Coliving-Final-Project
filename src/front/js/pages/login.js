import React, { useState, useContext, useEffect } from "react";
import "./../../styles/login.css";
import { Link } from "react-router-dom";
import { Context } from "./../store/appContext.js";
import { useNavigate } from "react-router-dom";

//import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';





export default function Login() {

  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();




  useEffect(() => {
    if (store.user) {
      navigate("/landingPage");
    }
  }, []);


  return (
    <>

      <div className="container-login-form">
        <div className="row">
          <div className="col">
            <h1 className="fw-bold py-3 text-center">Coliving Login!</h1>

            {/* LOGIN */}
            <form>
              <div className="form-floating mb-3">
                <input id="email" type="email" className="form-control" onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="name@example.com" required />
                <label>Email</label>
              </div>

              <div className="form-floating">
                <input type={showPassword ? "text" : "password"} id="password" className="form-control" onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder="Password" required />
                <label>Password</label>
                <div id="toggle" onClick={() => setShowPassword(!showPassword)}>{showPassword ? "😵" : "👀"}</div>
              </div>
              <div>
                <button onClick={() => {
                  actions.login(user.email, user.password)
                  navigate("/landingPage")
                  document.getElementById("password").value = "";
                  document.getElementById("email").value = "";
                }}
                  className="submit mt-4" type="button">Log In</button>
              </div>
              <div className="link-register mx-auto text-center mt-4">

                <span className="register">No tienes cuenta?
                  <Link to="/registro"> Registrate </Link>
                </span>

              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}


