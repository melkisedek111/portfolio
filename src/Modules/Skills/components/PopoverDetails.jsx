import React from "react";
import ProgressData from "../../About/components/ProgressData.jsx";
import {
    Details,
	PopoverDescription,
	PopoverDetailsContainer,
	ProgressDataHolder,
} from "./popoverDetails.styled.jsx";

const PopoverDetails = ({ src, name, percentage, altName, experience, projects, professionalExperience }) => {
	return (
		<PopoverDetailsContainer>
			<PopoverDescription>
				<Details>
                    <h5>Name: <span>{altName}</span></h5>
                    <h5>Experience: <span>{experience}</span></h5>
                    <h5>Personal Project: <span>{projects} Project(s)</span></h5>
                    <h5>Professional Experience: <span>{professionalExperience}</span></h5>
                </Details>
				<img src={src} alt={name} />
			</PopoverDescription>
			<ProgressDataHolder>
				<ProgressData isSmall name="Proficiency" percentage={percentage} />
			</ProgressDataHolder>
		</PopoverDetailsContainer>
	);
};

export default PopoverDetails;
