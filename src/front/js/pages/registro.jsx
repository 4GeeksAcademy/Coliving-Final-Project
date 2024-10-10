import React from "react";

const Registro = () => {
    return (
      <>
        <div className="container m-5 ">
            <p className="text-center pt-3"><strong>SIGN UP</strong></p>
            <form>
                <div className="mb-3 ">
                  <label class="form-label">First name</label>
                  <input type="text" aria-label="First name" placeholder="First name" class="form-control" required/>
                </div>
                <div className="mb-3 ">
                  <label class="form-label">Last name</label>
                  <input type="text" aria-label="Last name" placeholder="Last name" class="form-control" required/>
                </div>
                <div className="mb-3 ">
                  <label class="form-label">Username</label>
                  <input type="text" class="form-control" placeholder="@Username" aria-label="Username" aria-describedby="addon-wrapping" required/>
                </div>
                <div className="mb-3 ">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" placeholder="name@example.com" aria-describedby="emailHelp" required/>
                </div>
                <div className="mb-3 ">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required/>
                </div>
                <div className="mb-3 ">
                  <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm Password" required/>
                </div>
                <button type="submit" className="login">Registrarse</button>
            </form>
        </div>
      </>
            
    )
}

export default Registro;