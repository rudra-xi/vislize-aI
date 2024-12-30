import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Result from "./Pages/Result";
import BuyCredit from "./Pages/BuyCredit";

function App() {
	return (
		<section>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/result" element={<Result />} />
				<Route exact path="/buy-credit" element={<BuyCredit />} />
			</Routes>
		</section>
	);
}

export default App;
