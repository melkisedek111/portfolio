import React from "react";
import {
	ContactContainer,
	ContactDetails,
	ContactFields,
	ContactForm,
	ContactIconContainer,
	ContactSection,
} from "./contact.styled.jsx";
import Lottie from "lottie-react";
import ContactLottie from "../../assets/lottie/send.lottie.json";
import Textfield from "./Components/Textfield.jsx";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import ContactIcons from "./Components/ContactIcons.jsx";


const Contact = () => {


	return (
		<ContactSection>
			<ContactContainer>
				<ContactDetails>
					<h1>
						<span>C</span>ontact
					</h1>
					<h5>
						Get in touch with us today to discover how I can help your business
						grow and succeed!
					</h5>
					<ContactFields>
						<ContactIconContainer>
							<ContactIcons
								Icon={LocalPhoneIcon}
								title="CALL US:"
								detail="+63 930 543 1343"
							/>
							<ContactIcons
								Icon={EmailIcon}
								title="E-MAIL:"
								detail="melkisedek222@gmail.com"
							/>
							<ContactIcons
								Icon={LocationOnIcon}
								title="Address"
								detail="Salvacion, Virac, Catanduanes"
							/>
						</ContactIconContainer>
					</ContactFields>
				</ContactDetails>
				<Lottie animationData={ContactLottie} loop={true} />
			</ContactContainer>
		</ContactSection>
	);
};

export default Contact;
