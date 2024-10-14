import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Coliving</span>
				</Link>
				{!store.token && <link to="/login">
					<button className="submit">Login</button>
				</link>}


				{store.token && <button className="btn btn-danger mx-1" onClick={() => actions.logout()}>
					Logout
				</button>}


				<div className="ml-auto d-flex align-items-center">
					<button className="btn btn-link p-0 border-0">
						<i className="fa-solid fa-globe me-2"></i>
					</button>
					<div className="dropdown rounded custom-rounded">
						<button className="btn btn-secondary dropdown-toggle m-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							<i className="fa-solid fa-bars me-2"></i>
							<i className="fa-solid fa-user"></i>
						</button>
						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#">Registrate</a></li>
							<li><a className="dropdown-item" href="#">Iniciar Seccion</a></li>
							<li><a className="dropdown-item" href="#">Espacio en Coliving</a></li>
							<li><a className="dropdown-item" href="#">Experiencia</a></li>
							<li><a className="dropdown-item" href="#">Centro de Ayuda</a></li>
						</ul>
					</div>
					{/* <Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link> */}
				</div>
			</div>
		</nav>
	);
};
