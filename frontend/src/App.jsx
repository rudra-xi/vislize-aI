import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";
import Home from "./Pages/Home";
import Result from "./Pages/Result";
import BuyCredit from "./Pages/BuyCredit";

import { styles } from "./Assets/styles";

function App() {
	return (
		<section className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-t from-primary to-secondary text-white">
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/result" element={<Result />} />
				<Route exact path="/buy-credit" element={<BuyCredit />} />
			</Routes>
		</section>
	);
}

export default App;
