import React, { useEffect, useState } from "react";
import {
	MenuContainer,
	NavbarContainer,
	NavbarSection,
	NavLinks,
} from "./navbar.styled.jsx";
import Logo from "../../assets/logo/Logo_2.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Navbar = ({ scrollIntoView }) => {
	const [isNavVisible, setIsNavVisible] = useState(false);
	const [isWidthLaptopSize, setIsWidthLaptopSize] = useState(false);
	const handleCloseNavVisible = (event) => {
		if (isNavVisible && !event.target.closest("#menu-icon")) {
			setIsNavVisible(false);
		}
	};

	const handleNavVisible = () => {
		setIsNavVisible(!isNavVisible);
	};
	const links = [
		{
			title: "Home",
			isActive: false,
		},
		{
			title: "About",
			isActive: false,
		},
		{
			title: "Tech Stack",
			isActive: false,
		},
		{
			title: "Experiences",
			isActive: false,
		},
		{
			title: "Projects",
			isActive: false,
		},
		{
			title: "Contact",
			isActive: true,
		},
	];

	useEffect(() => {
		document.addEventListener("click", handleCloseNavVisible);
		const width = window.innerWidth;
		width >= 1280 ? setIsWidthLaptopSize(true) : setIsWidthLaptopSize(false);

		return () => {
			document.addEventListener("click", handleCloseNavVisible);
		};
	}, [isNavVisible, isWidthLaptopSize]);

	return (
		<NavbarSection>
			<NavbarContainer>
				<img src={Logo} />
				{isNavVisible || isWidthLaptopSize ? (
					<NavLinks>
						{links.map((link, index) => (
							<a
								onClick={() => scrollIntoView(link.title)}
								key={index}
								className={link.isActive ? "active" : ""}
							>
								{link.title}
							</a>
						))}
					</NavLinks>
				) : null}

				<MenuContainer onClick={handleNavVisible}>
					{isNavVisible ? (
						<CloseIcon id="close-icon" />
					) : (
						<MenuIcon id="menu-icon" />
					)}
				</MenuContainer>
			</NavbarContainer>
		</NavbarSection>
	);
};

export default Navbar;
