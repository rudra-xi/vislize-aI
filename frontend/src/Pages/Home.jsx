import React from "react";
import Header from "../Components/Header";
import Steps from "../Components/Steps";
import Description from "../Components/Description";
import Testimonials from "../Components/Testimonials";
import GenerateBtn from "../Components/GenerateBtn";

function Home() {
	return (
		<section>
			<Header />
			<Steps />
			<Description />
			<Testimonials />
			<GenerateBtn />
		</section>
	);
}

export default Home;
