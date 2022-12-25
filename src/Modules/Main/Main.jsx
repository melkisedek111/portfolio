import React from "react";
import {
	LottieContainer,
	MainContainer,
	MainDetails,
	MainSection,
	SocialMediaContainer,
	Vertical,
} from "./main.styled.jsx";
import Lottie from "lottie-react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from "@mui/icons-material/GitHub";

import LottieWebHosting from "../../assets/lottie/web-hosting.json";

const Main = () => {
	return (
		<MainSection>
			<MainContainer>
				<MainDetails>
					<h2>I'm</h2>
					<h1>Mel Ubalde</h1>
					<h3>Web Developer & Jr. Software Engineer</h3>
				</MainDetails>
				<LottieContainer>
					<Lottie animationData={LottieWebHosting} loop={true} />
				</LottieContainer>
				<SocialMediaContainer>
					<Vertical/>
					<a href="https://www.facebook.com/hakdoggoo" target="_blank"><FacebookIcon /></a>
					<a href="https://twitter.com/Melkisedek222U" target="_blank"><TwitterIcon /></a>
					<a href="https://www.instagram.com/_mrexcommunicado" target="_blank"><InstagramIcon /></a>
					<a href="https://www.linkedin.com/in/melx-ubalde-35a856144" target="_blank"><LinkedInIcon /></a>
					<a href="https://github.com/melkisedek111" target="_blank"><GitHubIcon /></a>
				</SocialMediaContainer>
			</MainContainer>
		</MainSection>
	);
};

export default Main;
