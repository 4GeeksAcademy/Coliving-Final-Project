<<<<<<< HEAD
import React, { useState, useEffect, useContext } from "react";
=======
import "./../../styles/anguibell.css";
import React, {useState, useEffect, useContext} from "react";
>>>>>>> 323ae716aacb2b00fec268ad43e8df5fda9b1590
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const Registro = () => {

<<<<<<< HEAD
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
=======
    const { store , actions } = useContext(Context);
    const [ user , setUser ] = useState({});
    const [ showPassword , setShowPassword ] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [position, setPosition] = useState('');
    const navigate = useNavigate();
>>>>>>> 323ae716aacb2b00fec268ad43e8df5fda9b1590

  useEffect(() => {
    if (store.token) {
      navigate("/");
    }
  }, []);


<<<<<<< HEAD
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
=======
    return (
      <>
      <div className="d-flex">
        <div className="lado-izquierdo ">
            <h1><strong>Hello,</strong></h1>
            <p>welcome to the registration page. Please fill out the form on the side to get more complete features. Please click login below if you already have an account!</p>
            <button className="d-flex justify-content-start m-0"><Link to="/login" className="text-decoration-none text-white "> Login </Link></button>
        </div>
        <div className="lado-derecho">
            <h2 className="text-center pt-3 text-decoration-underline text-black mb-5"><strong>SIGN UP</strong></h2>
            <form>
                <div className="d-flex justify-content-between row">
                  <div className="mb-3 col-6">
                    <label class="form-label text-black"><strong>First name</strong></label>
                    <input type="text" aria-label="First name" placeholder="First name" class="form-control" required onChange={(event) => setUser({
                      ...user,
                      first_name: event.target.value
                    })}/>
                  </div>
                  <div className="mb-3 col-6">
                    <label class="form-label text-black"><strong>Last name</strong></label>
                    <input type="text" aria-label="Last name" placeholder="Last name" class="form-control" required onChange={(event) => setUser({
                      ...user,
                      last_name: event.target.value
                    })}/>
                  </div>
                </div>
                <div className="mb-3 ">
                  <label for="exampleInputEmail1" class="form-label text-black"><strong>Email address</strong></label>
                  <input type="email" class="form-control" id="exampleInputEmail1" placeholder="name@example.com" aria-describedby="emailHelp" required onChange={(event) => setUser({
                    ...user,
                    email: event.target.value
                  })}/>
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
                        onChange={() => setPosition('guest')} 
                      />
                      <label className="form-check-label" htmlFor="guest">Guest</label>
                    </div>
                    <div className="form-check d-flex align-items-center">
                      <input 
                        type="radio" 
                        className= "form-check-input small-radio" 
                        id="host" 
                        name="position" 
                        value="host" 
                        checked={position === 'host'} 
                        onChange={() => setPosition('host')} 
                      />
                      <label className="form-check-label" htmlFor="host">Host</label>
                    </div>
                  </div>
                </div>
                <div className="mb-3 ">
                  <label for="exampleInputPassword1" class="form-label text-black"><strong>Password</strong></label>
                  <div className="d-flex align-items-center">
                      <input type={showPassword ? "text" : "password"} class="form-control" id="exampleInputPassword1" placeholder="Password" required onChange={(event) => setUser({
                        ...user, 
                        password: event.target.value
                      })}/>
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
                  <label for="exampleInputPassword1" class="form-label text-black"><strong>Confirm Password</strong></label>
                  <div className="d-flex align-items-center">
                      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm Password" required
                        onChange={(event) => setConfirmPassword(event.target.value)}
                      />
                      <span 
                        className="input-group-text"
                        id="mostrar" 
                        onClick={() => setShowPassword(!showPassword)} 
                      >
                        {showPassword ? "🔒" : "👀"}
                      </span>
                  </div>
                  {user.password !== confirmPassword && (
                    <div className="text-danger">Las contraseñas no coinciden</div>
                  )}
                </div>
                <button type="submit" className="registro w-100 mt-2"
                  onClick={() => {
                    if (user.password === confirmPassword) {
                      actions.registro(user.email, user.password);
                    } else {
                      alert('Las contraseñas no coinciden');
                    }
                  }}
                >
                  Registrarse
                </button>
            </form>
        </div>
      </div>
      </>
    )
>>>>>>> 323ae716aacb2b00fec268ad43e8df5fda9b1590
}

export default Registro;


{/*onClick={() => actions.registro(user.email, user.password)}*/ }