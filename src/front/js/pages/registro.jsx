import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "./../../styles/anguibell.css";

const Registro = () => {

  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (store.token) {
      navigate("/");
    }
  }, []);


  return (
    <>
      <div className="container m-5 ">
        <p className="text-center pt-3"><strong>SIGN UP</strong></p>
        <form>
          <div className="mb-3 ">
            <label class="form-label">First name</label>
            <input type="text" aria-label="First name" placeholder="First name" class="form-control" required />
          </div>
          <div className="mb-3 ">
            <label class="form-label">Last name</label>
            <input type="text" aria-label="Last name" placeholder="Last name" class="form-control" required />
          </div>
          <div className="mb-3 ">
            <label class="form-label">Username</label>
            <input type="text" class="form-control" placeholder="@Username" aria-label="Username" aria-describedby="addon-wrapping" required />
          </div>
          <div className="mb-3 ">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="name@example.com" aria-describedby="emailHelp" required onChange={(event) => setUser({
              ...user,
              email: event.target.value
            })} />
            <div className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3 ">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <div className="d-flex">
              <input type={showPassword ? "text" : "password"} class="form-control" id="exampleInputPassword1" placeholder="Password" required onChange={(event) => setUser({
                ...user,
                password: event.target.value
              })} />
              <button className="btn btn-success"
                onClick={() => setShowPassword(!showPassword)}>{showPassword ? "🔒" : "👀"}</button>
            </div>
            <button className="btn btn-link">Forgot your password?</button>
          </div>
          <div className="mb-3 ">
            <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm Password" required />
          </div>
          <button type="submit" className="registro btn btn-success w-100 mt-2" >Registrarse</button>
        </form>
      </div>
    </>

  )
}

export default Registro;


{/*onClick={() => actions.registro(user.email, user.password)}*/ }