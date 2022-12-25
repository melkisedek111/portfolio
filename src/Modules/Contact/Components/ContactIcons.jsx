import React from "react";
import { ContactIconsContainer } from "./contactIcons.styled.jsx";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const ContactIcons = ({ Icon, title, detail }) => {
	return (
		<ContactIconsContainer>
			<div>
				<Icon />
			</div>
            <div>
                <h4>{title}</h4>
                <p>{detail}</p>
            </div>
		</ContactIconsContainer>
	);
};

export default ContactIcons;
