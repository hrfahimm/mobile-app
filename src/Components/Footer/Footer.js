/** @format */

import React from "react";
import "./Footer.css";
const Footer = () => {
	return (
		<div class="container">
			<div class="row footer">
				<div class="single-cta">
					<i class="fas fa-map-marker-alt"></i>
					<div class="cta-text">
						<h4>Find us</h4>
						<span>Mandari,Laxmipur,Bangladesh</span>
					</div>
				</div>

				<div class="single-cta">
					<i class="fas fa-phone"></i>
					<div class="cta-text">
						<h4>Call us</h4>
						<span>01758781699</span>
					</div>
				</div>

				<div class="single-cta">
					<i class="far fa-envelope-open"></i>
					<div class="cta-text">
						<h4>Mail us</h4>
						<span>fahim@gmail.com</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
