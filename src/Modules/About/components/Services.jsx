import React from "react";
import { ServiceContainer } from "./services.styled.jsx";

const Service = ({ IconComponent, heading, description }) => {
	return (
		<ServiceContainer>
			<IconComponent />
			<h5>{heading}</h5>
			<p>{description}</p>
		</ServiceContainer>
	);
};

export default Service;
