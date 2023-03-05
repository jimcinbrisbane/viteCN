import { useRef } from "react";
import codeNetworkLogo from "./assets/codeNetworkLogoClear.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./main.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3><img src={codeNetworkLogo} alt="Logo of Code Network" width={100} height={60} /></h3>
			<nav ref={navRef}>
				<a href="/#">Rules</a>
				<a href="/#">About us</a>
				<a href="/#">Sign up</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;