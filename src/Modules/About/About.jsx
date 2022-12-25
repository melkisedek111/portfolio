import React from "react";
import {
	AboutContainer,
	AboutDescription,
	AboutSection,
	ProgressDetails,
	ServicesContainer,
} from "./about.styled.jsx";
import Lottie from "lottie-react";
import AboutLogo from "../../assets/lottie/dashboard.lottie.json";
import ProgressData from "./components/ProgressData.jsx";

import ArchitectureIcon from "@mui/icons-material/Architecture";
import WebIcon from "@mui/icons-material/Web";
import FormatShapesIcon from "@mui/icons-material/FormatShapes";
import LanguageIcon from "@mui/icons-material/Language";
import SsidChartIcon from "@mui/icons-material/SsidChart";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Service from "./components/Services.jsx";

const About = () => {
	return (
		<AboutSection>
			<AboutContainer>
				<Lottie animationData={AboutLogo} loop={true} />
				<AboutDescription>
					<h1>
						<span>A</span>bout
					</h1>
					<p>
						Hello! My name is <b>Melkisedek Ubalde</b> but can just call me <b>Mel</b>, and I am a junior software engineer with about 1 year of professional experience. In addition to my formal
						education in computer related course, I am also a self-taught programmer
						and have been teaching myself to code for several years. I received
						my bachelor's degree in information system from Catanduanes State University, where I
						gained a strong foundation in programming and software development
						principles. However, I have always been drawn to the field of
						software engineering and have spent a lot of time outside of class
						learning and experimenting with different programming languages and
						technologies. Since graduating, I have been working as a junior
						software engineer at some IT companies, where I have had the opportunity to
						continue learning and growing as a developer. I am always looking
						for ways to improve my skills and stay up to date with the latest
						technologies, and I enjoy participating or doing mini personal projects and online
						coding challenges in my free time. I am excited to see where my
						career in software engineering takes me and am eager to make a
						positive impact through my work.
					</p>
					<ProgressDetails>
						<h2>My Skills</h2>
						<ProgressData name="Design" percentage={60} />
						<ProgressData name="Development" percentage={80} />
						<ProgressData name="Branding" percentage={60} />
					</ProgressDetails>
					<ServicesContainer>
						<Service
							IconComponent={ArchitectureIcon}
							heading="Design"
							description="Focused on creating minimalist UI designs that prioritize functionality and simplicity. I believe that by reducing distractions and unnecessary elements, I can create more intuitive and user-friendly interfaces."
						/>
						<Service
							IconComponent={WebIcon}
							heading="Development"
							description="Developing clean and well-structured code. I believe that taking the time to properly organize and plan out my code not only makes it easier to read and maintain, but also leads to more efficient and reliable software."
						/>
						<Service
							IconComponent={FormatShapesIcon}
							heading="Branding"
							description="Creating and implementing branding strategies through advertising and marketing efforts. I am passionate about helping companies establish a strong brand identity and presence in the market."
						/>
						<Service
							IconComponent={LanguageIcon}
							heading="Wed Design"
							description="Strong foundation in web design principles and am skilled in creating visually appealing and user-friendly websites. I am always looking for ways to improve my skills and stay up to date with the latest web development technologies."
						/>
						<Service
							IconComponent={SsidChartIcon}
							heading="Marketing"
							description="Developing strong marketing strategies that help businesses reach their target audiences and achieve their goals. I am passionate about using my technical skills to drive successful marketing campaigns and drive growth for my clients."
						/>
						<Service
							IconComponent={PhoneAndroidIcon}
							heading="Responsive"
							description="Creating responsive UI designs that adapt to different screen sizes and devices. I understand the importance of ensuring that a website or application is easily accessible and user-friendly on all platforms."
						/>
					</ServicesContainer>
				</AboutDescription>
			</AboutContainer>
		</AboutSection>
	);
};

export default About;
