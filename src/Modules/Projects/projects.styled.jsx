import styled from "styled-components";
import CSS_CONSTANTS from "../../utils/css.constants";

export const ProjectsSection = styled.section``;

export const ProjectsContainer = styled.div`
	padding: ${CSS_CONSTANTS.PADDINGS.primary};
	h1 {
		text-align: center;
		color: ${CSS_CONSTANTS.COLORPALLETS.secondary};
		font-size: 3rem;
		span {
			color: #000;
		}
		margin-bottom: 30px;
	}

	@media ${CSS_CONSTANTS.DEVICES.mobileM} {
		padding: ${CSS_CONSTANTS.PADDINGS.mobileM};
	}
`;

export const ProjectContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    gap: 15px;

	@media ${CSS_CONSTANTS.DEVICES.laptop} {
		grid-template-columns: 1fr 1fr;
	}

	@media ${CSS_CONSTANTS.DEVICES.tablet} {
		grid-template-columns: 1fr;

	}
`;
