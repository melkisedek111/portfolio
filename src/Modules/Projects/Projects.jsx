import React from "react";
import ProjectCard from "./components/ProjectCard.jsx";
import {
	ProjectContainer,
	ProjectsContainer,
	ProjectsSection,
} from "./projects.styled.jsx";
import CrwnImage from "../../assets/images/crwn.png";
import AmazonImage from "../../assets/images/amazon.png";
import LoftiImage from "../../assets/images/lofti.png";
import SlackImage from "../../assets/images/slack.png";
import PostAppImage from "../../assets/images/postman.png";
import ChatAppImage from "../../assets/images/chatter.png";
import TinderImage from "../../assets/images/tinder.png";

const Projects = () => {
	const personalProjects = [
		{
			imageSrc: CrwnImage,
			title: "Crwn Clothing",
			main: "React",
			link: "https://crown-db-8d196.web.app",
		},
		{
			imageSrc: AmazonImage,
			title: "Amazon Clone",
			main: "React",
			link: "https://fb-clone-dfb08.web.app",
		},
		{
			imageSrc: LoftiImage,
			title: "Lofti E-Commerce",
			main: "React",
			link: "https://lofti-commerce.netlify.app",
		},
		{
			imageSrc: SlackImage,
			title: "Slack Clone",
			main: "React",
			link: "https://slack-clone-73769.web.app",
		},
		{
			imageSrc: PostAppImage,
			title: "Post App",
			main: "React",
			link: "https://my-post-app.netlify.app",
		},
		{
			imageSrc: ChatAppImage,
			title: "Chat App",
			main: "React",
			link: "https://my-chatter-app.netlify.app",
		},
		{
			imageSrc: TinderImage,
			title: "Tinder Clone",
			main: "React",
			link: "https://tinder-clone-47b26.web.app",
		},
	];
	return (
		<ProjectsSection>
			<ProjectsContainer>
				<h1>
					<span>Personal</span> Projects
				</h1>
				<ProjectContainer>
					{personalProjects.map((data, index) => (
						<ProjectCard
							key={index}
							imageSrc={data.imageSrc}
							main={data.main}
							title={data.title}
							link={data.link}
						/>
					))}
				</ProjectContainer>
			</ProjectsContainer>
		</ProjectsSection>
	);
};

export default Projects;
