import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "./../../styles/navbar.css";
import ColivingLogo from "./../../img/coliving.png"

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	console.log(store.type_user)
	// Verifica el rol del usuario si la progra esta correcta
	if (store.type_user === "host" && store.token) {
		return <NavbarHost />
	} else if (store.type_user === "guest" && store.token) {
		return <NavbarGuest />
	} else {
		return <NavbarPublic />
	}
};

const NavbarPublic = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<a href="/" className="C-living">
					<span className="navbar-brand mb-0" style={{ color: "#b64359" }}>Home</span>
				</a>
				<div className="ml-auto d-flex align-items-center gap-3">
					{!store.token &&
						<Link to="/login">
							<button className="btn my-auto text-white" style={{ backgroundColor: "#b64359" }}>Login</button>
						</Link>
					}
					{!store.token && <Link to="/registro">
						<button className="btn my-auto text-white" style={{ backgroundColor: "#b64359" }}>Registro</button>
					</Link>}
				</div>
			</div>
		</nav>
	);
}

const NavbarHost = () => {
	const { store, actions } = useContext(Context);
	return (

		<nav className="navbar navbar-light bg-light">
			<div className="container">

				<Link to={"/"} className="C-living">
					<span className="navbar-brand mb-0" style={{ color: "#b64359" }}>Home</span>
				</Link>
				<div className="ml-auto d-flex align-items-center">
					{store.token && <button className="btn my-auto mx-1" onClick={() => actions.logout()}>
						Logout
					</button>}
					<div className="dropdown rounded custom-rounded">
						<button className="btn btn-secondary dropdown-toggle m-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							<i className="fa-solid fa-bars me-2"></i>
							<i className="fa-solid fa-user"></i>
						</button>
						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="/property">Pon tu espacio en Coliving</a></li>
							<li><a className="dropdown-item" href="/filtros">Filtros</a></li>
							<li><a className="dropdown-item" href="/perfil">Ver Perfil</a></li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}

const NavbarGuest = () => {
	const { store, actions } = useContext(Context);
	return (

		<nav className="navbar navbar-light bg-light">
			<div className="container">

				<Link to={"/"} className="C-living">
					<span className="navbar-brand mb-0" style={{ color: "#b64359" }}>Home</span>
				</Link>
				<div className="ml-auto d-flex align-items-center">
					{store.token && <button className="btn my-auto mx-1" onClick={() => actions.logout()}>
						Logout
					</button>}
					<div className="dropdown rounded custom-rounded">
						<button className="btn btn-secondary dropdown-toggle m-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							<i className="fa-solid fa-bars me-2"></i>
							<i className="fa-solid fa-user"></i>
						</button>
						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="/filtros">Filtros</a></li>
							<li><a className="dropdown-item" href="/perfil">Ver Perfil</a></li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}