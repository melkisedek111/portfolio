import React from "react";
import SeoLottie from "../../../assets/lottie/seo.lottie.json";
import { CardDetails, ProjectCardContainer } from "./projectCard.styled.jsx";
import Lottie from "lottie-react";

const ProjectCard = ({ imageSrc, main, title, link }) => {
	return (
		<ProjectCardContainer target="_blank" href={link}>
			<img src={imageSrc} />

			<CardDetails>

                <h3>{main}</h3>
                <h2>{title}</h2>
                <Lottie animationData={SeoLottie} loop={true} />

            </CardDetails>
		</ProjectCardContainer>
	);
};

export default ProjectCard;
