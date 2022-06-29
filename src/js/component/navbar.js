import React from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.css"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light p-2">
			<Link to="/">
				<img className="bg-light logo" src="https://i.pinimg.com/originals/06/b2/c4/06b2c4e587960d952004be90c96a3170.jpg" alt="star-wars-icon"/>
			</Link>
			<div className="ml-auto">
				<Link to="/favs">
					<button className="btn btn-warning">Favoritos</button>
				</Link>
			</div>
		</nav>
	);
};
