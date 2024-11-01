import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "./../../styles/navbar.css";
import ColivingLogo from "./../../img/coliving.png"
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	console.log(store.type_user)
	// Verifica el rol del usuario si es host o guest le muestra una u otra segun el rol
	if (store.type_user === "host" && store.user) {
		return <NavbarHost />
	} else if (store.type_user === "guest" && store.user) {
		return <NavbarGuest />
	} else {
		return <NavbarPublic />
	}
};

const NavbarPublic = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar" style={{ backgroundColor: "#fff" }}>
			<div className="container d-flex">
				<a href="/" className="C-living">
					<span className="navbar-brand mb-0" style={{ color: "#b64359" }}>
						<img alt="imagen" src="https://github.com/4GeeksAcademy/Coliving-Final-Project/blob/main/src/front/img/roomies-pink-edited.png?raw=true" style={{ width: "200px" }} />
					</span>
				</a>
				<div className="ml-auto d-flex align-items-center gap-3">
					{!store.user &&
						<Link to="/login">
							<button className="btn my-auto" style={{ backgroundColor: "#fff", color: "#b64359", border: "1px solid #b64359" }}>Login</button>
						</Link>
					}
					{!store.user && <Link to="/registro">
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
					<span className="navbar-brand mb-0">
						<img alt="imagen"
							src="https://github.com/4GeeksAcademy/Coliving-Final-Project/blob/main/src/front/img/roomies-pink.png?raw=true"
							style={{ width: "200px" }}
						/>
					</span>
				</Link>
				<div className="ml-auto d-flex align-items-center"> 
					{store.user && <button className="btn my-auto mx-1" style={{ backgroundColor: "#fff", color: "#b64359", border: "1px solid #b64359" }} onClick={() => {
						actions.logout()
					}}>
						Logout
					</button>}
					<div className="dropdown rounded custom-rounded " >
						<button className="btn dropdown-toggle m-2 text-white" style={{ backgroundColor: "#b64359" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
							<i className="fa-solid fa-bars me-2 text-white"></i>
							<i className="fa-solid fa-user text-white"></i>
						</button>
						<ul className="dropdown-menu text-start dropdown-menu-end">
							<li><a className="dropdown-item" href="/property">Pon tu espacio en Roomies</a></li>
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
					<span className="navbar-brand mb-0">
						<img alt="imagen"
							src="https://github.com/4GeeksAcademy/Coliving-Final-Project/blob/main/src/front/img/roomies-pink.png?raw=true"
							style={{ width: "200px" }}
						/>
					</span>
				</Link>
				<div className="ml-auto d-flex align-items-center">
					{store.user && <button className="btn my-auto mx-1" style={{ backgroundColor: "#fff", color: "#b64359", border: "1px solid #b64359" }} onClick={() => actions.logout()}>
						Logout
					</button>}
					<div className="dropdown rounded custom-rounded " >
						<button className="btn dropdown-toggle m-2 text-white" style={{ backgroundColor: "#b64359" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
							<i className="fa-solid fa-bars me-2 text-white"></i>
							<i className="fa-solid fa-user text-white"></i>
						</button>
						<ul className="dropdown-menu text-start dropdown-menu-end">
							<li><a className="dropdown-item" href="/perfil">Ver Perfil</a></li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}