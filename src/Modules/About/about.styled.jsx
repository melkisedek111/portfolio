import styled from "styled-components";
import CSS_CONSTANTS from "../../utils/css.constants";

export const AboutSection = styled.section``;

export const AboutContainer = styled.div`
	padding: ${CSS_CONSTANTS.PADDINGS.primary};
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	> svg {
		width: 80% !important;
		height: 80% !important;
		display: block;
		margin: 0 auto;
	}

	@media ${CSS_CONSTANTS.DEVICES.tablet} {
		grid-template-columns: 1fr;
		place-items: center;
	}

	@media ${CSS_CONSTANTS.DEVICES.mobileM} {
		padding: ${CSS_CONSTANTS.PADDINGS.mobileM};
	}
`;

export const AboutDescription = styled.div`
	h1 {
		text-align: center;
		color: ${CSS_CONSTANTS.COLORPALLETS.secondary};
		font-size: 3rem;
		span {
			color: #000;
		}
		margin-bottom: 30px;
	}

	p {
		font-size: 1.2rem;
		line-height: 40px;
	}
`;

export const ProgressDetails = styled.div`
	h2 {
		text-align: center;
		margin: 30px 0;
	}
`;

export const ServicesContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
    gap: 5px;
    justify-content: space-between;
	@media ${CSS_CONSTANTS.DEVICES.mobileM} {
		flex-wrap: nowrap;
		flex-direction: column;
	}
`;
