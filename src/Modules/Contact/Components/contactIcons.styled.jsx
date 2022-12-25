import styled from "styled-components";
import CSS_CONSTANTS from "../../../utils/css.constants";


export const ContactIconsContainer = styled.div`
    display: flex;
    margin-bottom: 20px;
    div:nth-child(1) {
        margin-right: 20px;
        display: inline-block;
        padding: 15px;
        background-color: red;
        border-radius: 7px;
        background-color: ${CSS_CONSTANTS.COLORPALLETS.secondary};;
    }

    div:nth-child(2){
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h4 {
            text-transform: uppercase;
            letter-spacing: 3px;
            font-weight: lighter;
            font-size: 1.2rem
        }
    }
`;