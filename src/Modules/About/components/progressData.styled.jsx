import styled, { css } from "styled-components";
import CSS_CONSTANTS from "../../../utils/css.constants";

export const ProgressDataContainer = styled.div``;

export const ProgressBar = styled.div`
	background-color: #f9f9f9;
	background: linear-gradient(
		90deg,
		${CSS_CONSTANTS.COLORPALLETS.secondary} ${(props) => `${props.percentage}%`},
		#f9f9f9 ${(props) => `${props.percentage}%`}
	);
	height: 7px;
	width: 100%;
	margin-bottom: 20px;
	margin-top: 10px;
`;

export const ProgressDataHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	h3 {
		${(props) =>
			props.isSmall &&
			css`
				font-size: 1rem;
			`};
		font-weight: lighter;
		text-transform: uppercase;
	}
	> h3:nth-child(2) {
		${(props) =>
			props.isSmall &&
			css`
				font-size: 1rem;
			`};
		font-weight: bold;
	}
`;
