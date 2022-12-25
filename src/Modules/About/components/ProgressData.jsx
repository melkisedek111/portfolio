import React from "react";
import {
	ProgressBar,
	ProgressDataContainer,
	ProgressDataHeader,
} from "./progressData.styled.jsx";

const ProgressData = ({ name, percentage, isSmall }) => {
	return (
		<ProgressDataContainer>
			<ProgressDataHeader isSmall={isSmall}>
				<h3>{name}</h3>
				<h3>{percentage}%</h3>
			</ProgressDataHeader>
			<ProgressBar percentage={percentage} />
		</ProgressDataContainer>
	);
};

export default ProgressData;
