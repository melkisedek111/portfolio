import styled, { css } from "styled-components";
import CSS_CONSTANTS from "../../../utils/css.constants";

const DefaultTransitionBackground = css`
	box-shadow: inset 0 0 0 0 #e5e4e2;
	-webkit-transition: ease-out 0.4s;
	-moz-transition: ease-out 0.4s;
	transition: ease-in-out 0.4s;
`;

export const SideTimeline = styled.div`
	display: flex;
	gap: 15px;
	position: relative;
`;

export const YearArrow = styled.h2`
	clip-path: polygon(0% 0%, 80% 0%, 100% 50%, 80% 100%, 0% 100%);
	color: #fff;
	background-color: #e5e4e2;
	display: inline;
	padding: 5px 20px;
	height: 40px;
	${DefaultTransitionBackground}

	@media ${CSS_CONSTANTS.DEVICES.mobileM} {
		display: none;
		position: absolute;
		left: -100px;
		transition: left 1s;
	}
`;

export const LineContainer = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	svg {
		max-width: 20px;
		margin: 10px 0;
		color: #e5e4e2;
		transition: ease-in-out 0.4s;
		${DefaultTransitionBackground}
	}
`;

export const Circle = styled.div`
	/* max-width: 20px;
	max-height: 20px; */
	width: 20px;
	height: 20px;
	margin: 10px 0;
	border-radius: 50%;
	background-color: #e5e4e2;
	-webkit-transition: ease-out 0.4s;
	-moz-transition: ease-out 0.4s;
	transition: ease-in-out 0.4s;
`;

export const VerticalLine = styled.div`
	width: 3px;
	height: 100%;
	background-color: #e5e4e2;
	margin: 0 auto;
	${DefaultTransitionBackground}
`;

export const TimelineDescription = styled.div`
	h2 {
		text-transform: uppercase;
	}
	h4 {
		color: #36454f;
		font-weight: lighter;
	}
	p {
		line-height: 40px;
		text-align: justify;
	}
`;

export const TimelineContainer = styled.div`
	display: flex;
	gap: 20px;
	margin-bottom: 15px;

	:hover {
		${YearArrow} {
			box-shadow: inset 400px 0 0 0 ${CSS_CONSTANTS.COLORPALLETS.secondary};
			@media ${CSS_CONSTANTS.DEVICES.mobileM} {
				left: -85px;
				display: inline;
			}
		}
		${VerticalLine} {
			box-shadow: inset 0 0 0 50px ${CSS_CONSTANTS.COLORPALLETS.secondary};
		}
		svg {
			color: ${CSS_CONSTANTS.COLORPALLETS.secondary};
		}
	}
`;
