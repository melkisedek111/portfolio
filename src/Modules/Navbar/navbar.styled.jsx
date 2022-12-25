import styled from "styled-components";
import CSS_CONSTANTS from "../../utils/css.constants";

export const MenuContainer = styled.div`
	display: none;
	svg {
		font-size: 50px;
		cursor: pointer;
	}

	@media ${CSS_CONSTANTS.DEVICES.tablet} {
		display: block;
	}
`;
export const NavbarSection = styled.nav`
	padding: 25px 100px;

	@media ${CSS_CONSTANTS.DEVICES.tablet} {
		padding: 25px;
		img {
			object-fit: contain;
			max-height: 50px;
		}
	}
`;
export const NavbarContainer = styled.div`
	display: flex;
	margin: 0 auto;
	gap: 1rem;
	/* grid-template-columns: 1fr 1fr; */
	justify-content: space-between;
	img {
		object-fit: contain;
		max-height: 100px;
	}

	@media ${CSS_CONSTANTS.DEVICES.tablet} {
		position: relative;
		img {
			object-fit: contain;
			max-height: 50px;
		}
	}
`;

export const NavLinks = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 2rem;
	a {
		text-decoration: none;
		font-size: 1.2em;
		padding: 15px 35px;
		-webkit-transition: ease-out 0.4s;
		-moz-transition: ease-out 0.4s;
		transition: ease-out 0.4s;
		box-shadow: inset 0 0 0 0 #000;
		cursor: pointer;
		:active,
		:visited {
			color: inherit;
		}

		:hover {
			color: #ffd700;
			box-shadow: inset 400px 0 0 0 #000;
		}
	}

	.active {
		background-color: #000;
		color: #fff !important;
	}

	@media ${CSS_CONSTANTS.DEVICES.tablet} {
		display: block;
		position: absolute;
		z-index: 10;
		left: 50%;
		bottom: 0;
		transform: translate(-50%, 100%);
		width: 100%;

		a {
			display: block;
			text-align: center;
			background-color: #fff;
		}
	}
`;

export const NavLinksResponsive = styled.div`

`;


