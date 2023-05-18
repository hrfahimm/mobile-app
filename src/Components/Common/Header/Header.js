/** @format */

import React from "react";
import "./Header.css";

import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<div className="header container" >
			<div className="navlink">
				<NavLink to="/home">Home</NavLink>
				<NavLink to="/product">Product</NavLink>
				<NavLink to="/account"> Account</NavLink>
			</div>
		</div>



	);
};

export default Header;


