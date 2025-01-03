import React from "react";
import { assets } from "../Assets/assets";

function Footer() {
	return (
		<section className="flex items-center justify-between gap-4 py-3 mt-20">
			<img src={assets.logo} alt="logo" className="w-28" />
			<p className="flex-1  text-center text-sm text-quaternary max-sm:hidden">
				© 2025 Rudra-Xi | All rights reserved.
			</p>

			<div className="flex gap-4 ">
				<img
					src={assets.facebook_icon}
					alt="facebook"
					className="w-7 hover:scale-110 transition-all duration-300 hover:drop-shadow-glow"
				/>
				<img
					src={assets.instagram_icon}
					alt="instagram"
					className="w-7 hover:scale-110 transition-all duration-300 hover:drop-shadow-glow"
				/>
				<img
					src={assets.twitter_icon}
					alt="twitter"
					className="w-7 hover:scale-110 transition-all duration-300 hover:drop-shadow-glow"
				/>
			</div>
		</section>
	);
}

export default Footer;
