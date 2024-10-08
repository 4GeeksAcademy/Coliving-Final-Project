import React from 'react';



export default function Login() {
    return (
        <>
            <div className="container mt-5">
                <p className="text-center mt-5"><strong>Login</strong></p>
                <form>

                    <div className="mb-3 ">
                        <label for="exampleInputEmail" className="form-label mt-5">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label mt-4">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <button className="login">Iniciar Sesion</button>
                </form>
            </div>
        </>
    );
}