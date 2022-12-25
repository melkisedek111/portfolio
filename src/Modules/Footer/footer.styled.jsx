import styled from "styled-components";
import CSS_CONSTANTS from "../../utils/css.constants";

export const FooterSection = styled.section`
	background-color: #f7f7f7;
`;

export const FooterContainer = styled.div`
	padding: 50px 75px;
	/* display: grid;
	grid-template-columns: 1fr 1fr;
	> svg {
		width: 80% !important;
		height: 80% !important;
	} */
`;

export const LinkContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 50px;
	margin-bottom: 50px;
	a {
		text-decoration: none;
		display: flex;
		align-items: center;
		gap: 10px;
		letter-spacing: 3px;
		color: #000;

		svg {
			color: ${CSS_CONSTANTS.COLORPALLETS.secondary};
			transition: transform 0.5s, opacity 0.5s;
			transform: translateY(100%);
			opacity: 0;
		}

		:hover {
			svg {
				transform: translateY(0%);
				opacity: 1;
			}
		}
	}

	@media ${CSS_CONSTANTS.DEVICES.mobileM} {
		flex-direction: column;
		a {
			margin-bottom: 20px;
		}
	}
`;

export const Subtitle = styled.div`
	p {
		text-align: center;

		a {
			text-decoration: none;
			color: #FFF;
            background-color: #000;
            padding: 0 10px;
            letter-spacing: 3px;
		}
		span {
			color: ${CSS_CONSTANTS.COLORPALLETS.secondary} !important;
		}
	}
`;
