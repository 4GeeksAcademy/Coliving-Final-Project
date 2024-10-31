import React from "react";
import { Link } from "react-router-dom";
import "./../../styles/footer.css";

export function Footer() {
	return (
		<div className="container-footer mt-5">
			<footer className="pie-pagina">
				<div className="grupo-1">
					<div className="box">
						<figure className="imagen">
							<a href="#">
								<img alt="imagen" src="https://github.com/4GeeksAcademy/Coliving-Final-Project/blob/main/src/front/img/roomies.png?raw=true" />
							</a>
						</figure>
					</div>
					<div className="box">
						<h2>Sobre Nosotros</h2>
						<p>
							Coliving es una plataforma que permite a los usuarios publicar propiedades en la
							red. Los usuarios podrán ver propiedades publicadas por otros usuarios y contactar a los propietarios.</p>
					</div>
					<div className="box">
						<h2>Siguenos</h2>
						<div className="red-social">
							<a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
								<i className="fa-brands fa-facebook"></i>
							</a>
							<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
								<i className="fa-brands fa-instagram"></i>
							</a>
							<a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
								<i className="fa-brands fa-twitter"></i>
							</a>
						</div>
					</div>
				</div>

				<div className="grupo-2">
					<small>&copy; 2024 <b>Roomies</b> - Todos los derechos reservados.</small>
				</div>
			</footer>
		</div>
	);
}

