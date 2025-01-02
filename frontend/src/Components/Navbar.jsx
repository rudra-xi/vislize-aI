import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AppContext } from "../Context/AppContext";

import { assets } from "../Assets/assets";

// Navbar component for navigation and user interaction
function Navbar() {
	const navigate = useNavigate();

	// Access user data from the AppContext
	const { user } = useContext(AppContext);

	return (
		<nav className="flex items-center justify-between w-full py-4">
			{/* Logo linking to the homepage */}
			<Link to="/">
				<img
					src={assets.logo}
					alt="logo"
					className="w-30 sm:w-[125px] lg:w-38"
				/>
			</Link>

			<div>
				{/* Conditional rendering based on user authentication status */}
				{user ? (
					<div className="flex items-center gap-2 sm:gap-3">
						{/* Button to navigate to the buy credit page */}
						<button
							className="flex items-center gap-2 px-4 sm:px-5 py-1 sm:py-3 rounded-full bg-quaternary hover:scale-105 transition-all duration-500"
							onClick={() => navigate("/buy-credit")}
						>
							<img
								src={assets.credit_icon}
								alt="credit star"
								className="w-5"
							/>
							<p className="text-xs sm:text-sm text-primary ml-2">
								Credit Left: 10
							</p>
						</button>
						{/* Greeting message for the user */}
						<p className="max-sm:hidden pl-4 text-white">
							Hi, User
						</p>
						{/* User profile icon with a dropdown menu */}
						<div className="relative group ">
							<img
								src={assets.profile_icon}
								alt="user img"
								className="w-11 drop-shadow-glow"
							/>
							<div className="absolute hidden group-hover:block top-0 right-0 z-10 rounded pt-12">
								<ul className="list-none m-0 p-2 rounded-lg text-sm bg-quaternary text-secondary">
									<li className="py-1 px-2 cursor-pointer pr-10">
										Logout
									</li>
								</ul>
							</div>
						</div>
					</div>
				) : (
					<div className="flex items-center gap-2 sm:gap-5">
						{/* Link to the pricing page */}
						<p
							className="cursor-pointer "
							onClick={() => navigate("/buy-credit")}
						>
							Pricing
						</p>
						{/* Login button for unauthenticated users */}
						<button className="bg-tertiary px-7 py-2 sm:px-10 text-sm rounded-full">
							Login
						</button>
					</div>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
