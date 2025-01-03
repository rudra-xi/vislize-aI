import React from "react";
import { assets, descriptionData } from "../Assets/assets";

function Description() {
	return (
		<section className="flex flex-col items-center justify-center my-24 p-6 md:px-28">
			<h2 className="text-3xl sm:text-4xl font-semibold mb-2">
				Generate AI Art.
			</h2>
			<p className="text-lg text-tertiary mb-8">
				"Visualize Imagination."
			</p>

			<div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
				<img
					src={assets.monster_6}
					alt="monster"
					className="w-64 xl:w-96 rounded-full drop-shadow-dark"
				/>
				<div>
					<h3 className="text-2xl font-medium max-w-lg mb-4">
						{descriptionData[0].heading}
					</h3>
					<p className="text-quaternary mb-4">
						{descriptionData[0].shortDes}
					</p>
					<p className="text-tertiary tracking-wide text-sm">
						{descriptionData[0].extendedDes}
					</p>
				</div>
			</div>
		</section>
	);
}

export default Description;
