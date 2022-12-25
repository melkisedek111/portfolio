import styled from "styled-components";
import CSS_CONSTANTS from "../../utils/css.constants";

export const ExperienceSection = styled.section``;

export const ExperienceContainer = styled.div`
	padding: ${CSS_CONSTANTS.PADDINGS.primary};
	display: grid;
	grid-template-columns: 1fr 1fr;
	place-items: center;
	> svg {
		width: 80% !important;
		height: 80% !important;
	}

	@media ${CSS_CONSTANTS.DEVICES.tablet} {
		grid-template-columns: 1fr;
	}

	@media ${CSS_CONSTANTS.DEVICES.mobileM} {
		padding: ${CSS_CONSTANTS.PADDINGS.mobileM};
	}
`;

export const ExperienceDescription = styled.div`
	h1 {
		text-align: center;
		color: ${CSS_CONSTANTS.COLORPALLETS.secondary};
		font-size: 3rem;
		span {
			color: #000;
		}
		margin-bottom: 30px;
	}
`;


export const ExperienceDetails = styled.div`

`;