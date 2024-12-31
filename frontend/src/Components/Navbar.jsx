import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { assets } from "../Assets/assets";

function Navbar() {
	const [user, setUser] = useState(false);

	const navigate = useNavigate();

	return (
		<nav className="flex items-center justify-between w-full py-5">
			<Link to="/">
				<img
					src={assets.logo}
					alt="logo"
					className="w-32 sm:w-[150px] lg:w-40"
				/>
			</Link>

			<div>
				{user ? (
					<div className="flex items-center gap-2 sm:gap-3">
						<button
							className="flex items-center gap-2 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full bg-quaternary hover:scale-105 transition-all duration-500"
							onClick={() => navigate("/buy-credit")}
						>
							<img
								src={assets.credit_icon}
								alt="credit star"
								className="w-5"
							/>
							<p className="text-xs sm:text-sm text-primary ml-1">
								Credit Left: 10
							</p>
						</button>
						<p className="max-sm:hidden pl-4 text-white">
							Hi, User
						</p>
						<div className="relative group ">
							<img
								src={assets.profile_icon}
								alt="user img"
								className="w-10 drop-shadow-glow"
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
						<p
							className="cursor-pointer "
							onClick={() => navigate("/buy-credit")}
						>
							Pricing
						</p>
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
