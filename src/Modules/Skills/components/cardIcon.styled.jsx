import styled from "styled-components";

export const CardIconContainer = styled.div`
	background-color: #f9f9f9;
	padding: 30px;
	text-align: center;
	border-radius: 20px;
	max-width: 165px;
	width: 165px;
	box-shadow: inset 0 0 0 50px #f9f9f9;
	-webkit-transition: ease-out 0.6s;
	-moz-transition: ease-out 0.6s;
	transition: ease-in-out 0.6s;
	img {
		object-fit: contain;
		height: 90px;
	}

	h3 {
		margin: 0;
		margin-top: 10px;
	}

	:hover {
		color: #fff;
		box-shadow: inset 400px 0 0 0 #ffd700;
	}
`;
