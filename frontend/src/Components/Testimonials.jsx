import React from "react";
import { assets, testimonialsData } from "../Assets/assets";

function Testimonials() {
	return (
		<section className="flex flex-col items-center justify-center my-20 py-12">
			<h2 className="text-3xl sm:text-4xl font-semibold mb-2">
				Happy Customers.
			</h2>
			<p className="text-lg text-tertiary mb-8">"Their Words."</p>

			<div className="flex flex-wrap gap-6">
				{testimonialsData.map((testimonial, idx) => (
					<div
						key={idx}
						className="bg-secondary/50 p-8 rounded-lg shadow-darkScan order w-80 m-auto cursor-pointer hover:scale-105 transition-transform duration-700"
					>
						<div className="flex flex-col items-center">
							<img
								src={testimonial.image}
								alt="profile pic"
								className="rounded-full w-14 border-2 border-white drop-shadow-glow"
							/>
							<h3 className="text-xl font-bold mt-3">
								{testimonial.name}
							</h3>
							<p className="text-quaternary mb-4">
								{testimonial.role}
							</p>
							<div className="flex mb-4 gap-1">
								{Array(testimonial.stars)
									.fill()
									.map((item, idx) => (
										<img
											key={idx}
											src={assets.rating_star}
											alt="rating star"
											className="w-3.5 drop-shadow-glow"
										/>
									))}
							</div>
							<p className="text-center text-sm text-tertiary">
								{testimonial.text}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Testimonials;
