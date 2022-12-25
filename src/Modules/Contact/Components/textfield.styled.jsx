import styled, { css } from "styled-components";

export const TextFieldInput = styled.input`
	${(props) =>
		props.fullWidth
			? css`
					width: 100%;
			  `
			: css`
					min-width: 350px;
			  `}
	height: 50px;
	padding: 11px 15px;
	border: 1px solid #bababa;
	font-size: 0.9375rem;
	border-radius: 0.3125rem;
    transition: background-color 0.5s ease-in-out;
	:focus {
		background-color: #f7f7f7;

		outline: none;
	}
`;
