import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Coliving</span>
				</Link>
				<div className="ml-auto d-flex align-items-center">
					<button class="btn btn-link p-0 border-0">
						<i class="fa-solid fa-globe me-2"></i>
					</button>
					<div class="dropdown rounded custom-rounded">
						<button class="btn btn-secondary dropdown-toggle m-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							<i class="fa-solid fa-bars me-2"></i>
							<i class="fa-solid fa-user"></i>
						</button>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="#">Registrate</a></li>
							<li><a class="dropdown-item" href="#">Iniciar Seccion</a></li>
							<li><a class="dropdown-item" href="#">Espacio en Coliving</a></li>
							<li><a class="dropdown-item" href="#">Experiencia</a></li>
							<li><a class="dropdown-item" href="#">Centro de Ayuda</a></li>
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
