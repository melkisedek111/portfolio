import React from "react";
import {
	Circle,
	LineContainer,
	SideTimeline,
	TimelineContainer,
	TimelineDescription,
	VerticalLine,
	YearArrow,
} from "./timeline.styled.jsx";
import CircleIcon from "@mui/icons-material/Circle";

const Timeline = ({year, position, company, description}) => {
	return (
		<TimelineContainer>
			<SideTimeline>
				<YearArrow>{year}</YearArrow>
				<LineContainer>
					<CircleIcon />
					<VerticalLine />
				</LineContainer>
			</SideTimeline>
			<TimelineDescription>
				<h2>{position}</h2>
				<h4>{company}</h4>
				<p>{description}</p>
			</TimelineDescription>
		</TimelineContainer>
	);
};

export default Timeline;
