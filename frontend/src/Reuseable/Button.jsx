import React from "react";
import { assets } from "../Assets/assets";

function Button() {
	return (
		<div className="button-container">
			<a href="#" className="button">
				<div className="button__line"></div>
				<div className="button__line"></div>
				<span className="button__text">
					Render Images{" "}
					<img
						src={assets.star_icon}
						alt=""
						className="px-2 h-5"
					/>
				</span>
				<div className="button__draw1"></div>
				<div className="button__draw2"></div>
			</a>
		</div>
	);
}

export default Button;
