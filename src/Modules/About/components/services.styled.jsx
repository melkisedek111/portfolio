import styled from "styled-components";
import CSS_CONSTANTS from "../../../utils/css.constants";

export const ServiceContainer = styled.div`
    flex-basis: 30%;
	text-align: left;
    margin-bottom: 10px;
	svg {
		height: 40px !important;
		width: 40px !important;
		object-fit: contain;
        color: ${CSS_CONSTANTS.COLORPALLETS.secondary};
	}
    h5 {
        font-size: 1.3rem;
        font-weight: lighter;
        margin: 7px 0;
    }
    p {
        font-size: .8rem;
        font-weight: lighter;
        line-height: 20px;
        text-align: justify;
    }
`;
