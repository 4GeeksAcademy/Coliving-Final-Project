import React from 'react';

export default function Login() {
    return (
        <>
            <div className="container mt-5">
                <p className="text-center pt-3"><strong>LOGIN</strong></p>
                <form>

                    <div className="mt-4">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="name@example.com" aria-describedby="emailHelp" required/>
                    </div>
                    <div className="mb-3 mt-4">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required/>
                    </div>

                    <button className="login">Iniciar Sesion</button>
                </form>
            </div>
        </>
    );
}