import styled from "styled-components";
import CSS_CONSTANTS from "../../utils/css.constants";

export const MainSection = styled.section``;

export const MainContainer = styled.div`
	padding: ${CSS_CONSTANTS.PADDINGS.primary};
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	position: relative;

	@media ${CSS_CONSTANTS.DEVICES.tablet} {
		grid-template-columns: 1fr;
		place-items: center;
	}

	@media ${CSS_CONSTANTS.DEVICES.mobileM} {
		padding: ${CSS_CONSTANTS.PADDINGS.mobileM};
	}
`;

export const LottieContainer = styled.div`
	svg {
		width: 80% !important;
		height: 80% !important;
	}

	@media ${CSS_CONSTANTS.DEVICES.tablet} {
		svg {
			width: 100% !important;
			height: 100% !important;
		}
	}
`;

export const MainDetails = styled.div`
	text-align: right;
	h1 {
		font-size: 6.5rem;
		color: ${CSS_CONSTANTS.COLORPALLETS.secondary};
		display: inline-block;
	}
	h2 {
		font-size: 5rem;
		display: inline-block;
		margin-right: 0.4rem;
	}
	h3 {
		font-size: 2.5rem;
		font-weight: lighter;
	}

	@media ${CSS_CONSTANTS.DEVICES.mobileM} {
		text-align: left;
	}
`;

export const SocialMediaContainer = styled.div`
	position: absolute;
	text-align: center;
	right: 10%;
	bottom: 0;
	a {
		display: block;
		margin-bottom: 10px;
		color: #000;
		text-decoration: none;
		:active,
		:visited {
			color: #000;
		}
		svg {
			font-size: 2rem;
		}

		:hover {
			color: ${CSS_CONSTANTS.COLORPALLETS.secondary};
			transition: ease-in-out 0.3s;
		}
	}
`;

export const Vertical = styled.div`
	background-color: ${CSS_CONSTANTS.COLORPALLETS.secondary};
	height: 150px;
	width: 5px;
	display: block;
	margin: 0 auto;
	margin-bottom: 15px;
`;
