import React from "react";
import { stepsData } from "../Assets/assets";

function Steps() {
	return (
		<section className="flex flex-col items-center justify-center my-32">
			<h2 className="text-3xl sm:text-4xl font-semibold mb-2">
				Discover the Process.
			</h2>
			<p className="text-lg text-tertiary mb-8">
				"Bring Words to Life with Images."
			</p>

			<div className="space-y-3 w-full max-w-3xl text-sm">
				{stepsData.map((step, idx) => (
					<div
						key={idx}
						className="flex items-center gap-4 p-4 px-8 bg-white/20 shadow-scan border cursor-pointer hover:scale-[1.05] transition-all duration-300 rounded-lg"
					>
						<img
							src={step.icon}
							alt="icons"
							className="w-8"
						/>
						<div>
							<h3 className="text-lg font-bold">
								{step.title}
							</h3>
							<p className="text-quaternary">
								{step.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Steps;
