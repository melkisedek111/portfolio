import styled from "styled-components";
import CSS_CONSTANTS from "../../../utils/css.constants";

export const CardDetails = styled.div`
	color: #fff;
	z-index: 2;
	background-color: ${CSS_CONSTANTS.RGBA.secondary()};
	padding: 20px;
	height: 300px;
	width: 300px;
	position: relative;
	transition: all 0.3s linear;
	display: block;
	opacity: 0;
	border-top-right-radius: 20px;
	border-bottom-left-radius: 20px;

	h2 {
		font-weight: lighter;
		font-size: 2.3rem;
	}

	h3 {
		font-size: 1.5rem;
	}

	svg {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 60% !important;
		height: 60% !important;
		opacity: 0.3;
	}

	@media ${CSS_CONSTANTS.DEVICES.mobileM} {
		height: 250px !important;
		width: 250px !important;
	}
`;

export const ProjectCardContainer = styled.a`
	overflow: hidden;
	position: relative;
	height: 400px !important;
	width: 400px !important;
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	transition: border 0.3s;
	border-radius: 20px;
	:visited,
	:active {
		text-decoration: none;
	}
	img {
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		object-fit: fill;
		filter: grayscale(100%);
		height: 450px !important;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
	}

	:hover {
		${CardDetails} {
			display: block;
			opacity: 1;
		}

		border: 0.5px solid ${CSS_CONSTANTS.RGBA.secondary()};
	}

	@media ${CSS_CONSTANTS.DEVICES.mobileM} {
		height: 300px !important;
		width: 300px !important;
	}
`;
