import React from "react";
import {
	FooterContainer,
	FooterSection,
	LinkContainer,
	Subtitle,
} from "./footer.styled.jsx";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
	return (
		<FooterSection>
			<FooterContainer>
				<LinkContainer>
					<a href="https://www.facebook.com/hakdoggoo" target="_blank">
						<FacebookIcon /> FACEBOOK
					</a>
					<a href="https://twitter.com/Melkisedek222U" target="_blank">
						<TwitterIcon /> TWITTER
					</a>
					<a href="https://www.instagram.com/_mrexcommunicado" target="_blank">
						<InstagramIcon /> INSTAGRAM
					</a>
					<a href="https://www.linkedin.com/in/melx-ubalde-35a856144" target="_blank">
						<LinkedInIcon /> LINKEDIN
					</a>
					<a href="https://github.com/melkisedek111" target="_blank">
						<GitHubIcon /> GITHUB
					</a>
				</LinkContainer>
				<Subtitle>
					<p>
						{" "}
						© mubalde 2022. All Right Reserved. Images and Totties are credited
						to <a href="https://www.pixeltrue.com" target="_blank"><span>P</span>IXELTRUE</a>
					</p>
				</Subtitle>
			</FooterContainer>
		</FooterSection>
	);
};

export default Footer;
