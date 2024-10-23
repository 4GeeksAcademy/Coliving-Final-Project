import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "./../../styles/navbar.css";
import ColivingLogo from "./../../img/coliving.png"

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">

				<a href="/" className="C-living">
					<span className="navbar-brand mb-0" style={{ color: "#b64359" }}>Home</span>
				</a>
				<div className="ml-auto d-flex align-items-center">
					<button className="btn btn-link p-0 border-0 my-2 mx-3">
						<i className="fa-solid fa-globe me-2"></i>
					</button>
					{!store.token && <Link to="/login">
						<button className="btn my-auto text-white" style={{ backgroundColor: "#b64359" }}>Login</button>
					</Link>}


					{store.token && <button className="btn my-auto mx-1" onClick={() => actions.logout()}>
						Logout
					</button>}
					<div className="dropdown rounded custom-rounded">
						<button className="btn btn-secondary dropdown-toggle m-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							<i className="fa-solid fa-bars me-2"></i>
							<i className="fa-solid fa-user"></i>
						</button>
						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="/registro">Registrate</a></li>
							<li><a className="dropdown-item" href="/property">Espacio en Coliving</a></li>
							<li><a className="dropdown-item" href="/perfil">Perfil</a></li>
							<li><a className="dropdown-item" href="/filtros">Filtros</a></li>
						</ul>
					</div>

				</div>
			</div>
		</nav>
	);
};


