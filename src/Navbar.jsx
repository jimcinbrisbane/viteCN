import { useRef } from "react";
import codeNetworkLogo from "./assets/codeNetworkLogoClear.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<div className='edges2'>
				<h3><img src={codeNetworkLogo} alt="Logo of Code Network" width={93} height={60} /></h3>
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
			</div>
		</header>
	);
}

export default Navbar;