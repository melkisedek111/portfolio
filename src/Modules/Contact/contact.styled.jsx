import styled from "styled-components";
import CSS_CONSTANTS from "../../utils/css.constants";

export const ContactSection = styled.section`
	height: 100%;
`;

export const ContactContainer = styled.div`
	padding: ${CSS_CONSTANTS.PADDINGS.primary};
	display: grid;
	grid-template-columns: 70% 30%;
	> svg {
		width: 80% !important;
		height: 80% !important;
	}
	height: 100%;

	@media ${CSS_CONSTANTS.DEVICES.tablet} {
		grid-template-columns: 1fr;
	}

	@media ${CSS_CONSTANTS.DEVICES.mobileM} {
		padding: ${CSS_CONSTANTS.PADDINGS.mobileM};
	}
`;

export const ContactDetails = styled.div`
	h1 {
		text-align: center;
		color: ${CSS_CONSTANTS.COLORPALLETS.secondary};
		font-size: 3rem;
		span {
			color: #000;
		}
	}
	h5 {
		text-align: center;
		font-size: 1.3rem;
		font-weight: lighter;
		margin-bottom: 30px;
	}
`;

export const ContactForm = styled.div`
	flex-basis: 70%;
	> div {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 10px;
	}

	textarea {
		width: 100%;
		padding: 11px 15px;
		border: 1px solid #bababa;
		font-size: 0.9375rem;
		border-radius: 0.3125rem;
		transition: background-color 0.5s ease-in-out;
		resize: none;
		:focus {
			background-color: #f7f7f7;

			outline: none;
		}
		margin: 10px 0;
	}
	button {
		border-radius: 5px;
		padding: 16px 34px;
		background-color: ${CSS_CONSTANTS.COLORPALLETS.secondary};
		outline: none;
		border: none;
		text-transform: uppercase;
		transition: background-color 0.5s ease-in-out;
		letter-spacing: 3px;
		font-size: 0.8rem;
		cursor: pointer;
		:hover {
			background-color: #000;
			color: #fff;
		}
	}

	@media ${CSS_CONSTANTS.DEVICES.mobileM} {
		> div {
			grid-template-columns: 1fr;
		}
	}
`;

export const ContactFields = styled.div`
	@media ${CSS_CONSTANTS.DEVICES.tablet} {
		display: flex;
		flex-direction: column-reverse;
	}
`;

export const ContactIconContainer = styled.div`
	margin-top: 50px;
	/* flex-basis: 30%; */
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	justify-content: center;
	@media ${CSS_CONSTANTS.DEVICES.tablet} {
		justify-content: center;
	}
`;
