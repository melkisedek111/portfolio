import styled from "styled-components";
import CSS_CONSTANTS from "../../utils/css.constants";

export const SkillsSection = styled.section``;

export const SkillsContainer = styled.div`
	padding: ${CSS_CONSTANTS.PADDINGS.primary};
	display: grid;
	grid-template-columns: 1fr 1fr;
	place-items: center;

	svg {
		width: 80% !important;
		height: 80% !important;
		display: block;
		margin: 0 auto;
	}

	@media ${CSS_CONSTANTS.DEVICES.tablet} {
		grid-template-columns: 1fr;
		padding: ${CSS_CONSTANTS.PADDINGS.tablet};
	}

	@media ${CSS_CONSTANTS.DEVICES.mobileM} {
		padding: ${CSS_CONSTANTS.PADDINGS.mobileM};
	}
`;

export const SkillsDescription = styled.div`
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

export const IconContainer = styled.div`
	display: flex;
	gap: 10px;
	flex-wrap: wrap;
	justify-content: center;

	@media ${CSS_CONSTANTS.DEVICES.tablet} {
		gap: 2px;
	}
`;

export const SliderContainer = styled.div`
	width: 90vw;
	margin: 0 auto;

	@media ${CSS_CONSTANTS.DEVICES.tablet} {
		width: 80vw;
		> div > div > div > div > div > div {
			margin: 0 auto;
		}
	}

	@media ${CSS_CONSTANTS.DEVICES.mobileM} {
		> div > div > div > div > div > div {
			margin: 0 auto;
		}
	}
`;
