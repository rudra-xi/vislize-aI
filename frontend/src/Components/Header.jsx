import React from "react";
import { assets, monstersData } from "../Assets/assets";
import Button from "../Reuseable/Button";

// Header component for the application
function Header() {
	return (
		<section className="flex flex-col justify-center items-center text-center my-20">
			{/* Introductory text with a decorative star image */}
			<div className="text-sm text-tertiary inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full drop-shadow-glow">
				<p>Unleash Your Imagination with Text-to-Image Magic.</p>
				<img
					src={assets.star_group}
					alt="star svg"
					className="w-4"
				/>
			</div>
			{/* Main heading of the header section */}
			<h1 className="text-2xl max-w[300px] sm:text-4xl sm:max-w-[590px] mx-auto mt-10 text-center">
				Effortlessly Turn{" "}
				<span className="text-quaternary">Words</span> into{" "}
				<span className="text-quaternary">Visuals</span>.
			</h1>
			{/* Subheading with a brief description */}
			<p className="text-center max-w-xl mx-auto mt-5">
				Unleash your creativity with{" "}
				<span className="text-quaternary text-xl">Vislize-Ai</span>:
				turn your imagination into visual art in just seconds. Type,
				and watch the magic happen!
			</p>
			{/* Button to trigger image rendering */}
			<Button />
			{/* Display a collection of images */}
			<div className="flex flex-wrap justify-center mt-3 gap-5">
				{monstersData.map((item, idx) => (
					<img
						className="rounded-md drop-shadow-dark hover:scale-110 transition-all duration-700 w-[90px] cursor-pointer max-sm:w-10"
						src={item.image}
						alt={`Monster ${item.id}`}
						key={idx}
					/>
				))}
			</div>
			{/* Footer text for the header section */}
			<p className="mt-3 text-quaternary text-xs tracking-widest">
				Witness Vislize in Action.
			</p>
		</section>
	);
}

export default Header;
