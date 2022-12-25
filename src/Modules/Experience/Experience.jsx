import React from "react";
import Lottie from "lottie-react";

import ExperienceLottie from "../../assets/lottie/experience.lottie.json";
import {
	ExperienceContainer,
	ExperienceDescription,
	ExperienceDetails,
	ExperienceSection,
} from "./experience.styled.jsx";
import Timeline from "./components/Timeline.jsx";

const Experience = () => {
	const experiences = [
		{
			year: 2022,
			position: "MS Tech Solutions Developer",
			company: "GECO Asia Pte Ltd (2022 - Present) | One Global Place, 5th Avenue & 25th Street, BGC, Taguig, Philippines",
			description:
				"TBH . .  .",
		},
		{
			year: 2021,
			position: "Junior Software Engineer",
			company: "Village88 (2021 - 2022) | San Fernando, La Union",
			description:
				"As a Jr. Software Engineer, I am responsible for researching, designing, implementing, and managing specific software program features, particularly on the backend side. I create test cases and maintain software improvements to ensure strong functionality and optimization. I also develop changes for identified changes in existing program features while writing, implementing, and maintaining efficient code. I work closely with other developers, such as UX/UI designers, Frontend engineers, and Systems Analysts, on new features and update changes. I also work with experienced team members to perform root cause analysis of issues, review new and existing code, and identify ideas to improve system performance and impact availability. Additionally, I make good technical decisions that provide solutions to business challenges.",
		},
	];

	return (
		<ExperienceSection>
			<ExperienceContainer>
				<Lottie animationData={ExperienceLottie} loop={true} />
				<ExperienceDescription>
					<h1>
						<span>E</span>xperiences
					</h1>
					<ExperienceDetails>
						{experiences.map((data, index) => (
							<Timeline
								key={index}
								position={data.position}
								company={data.company}
								description={data.description}
								year={data.year}
							/>
						))}
					</ExperienceDetails>
				</ExperienceDescription>
			</ExperienceContainer>
		</ExperienceSection>
	);
};

export default Experience;
