import { Popover, Typography } from "@mui/material";
import React, { useState } from "react";
import { CardIconContainer } from "./cardIcon.styled.jsx";
import PopoverDetails from "./PopoverDetails.jsx";

const CardIcon = ({
	src,
	name,
	percentage,
	altName,
	experience,
	projects,
	professionalExperience,
}) => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handlePopoverOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handlePopoverClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	return (
		<CardIconContainer
			aria-owns={open ? "mouse-over-popover" : undefined}
			aria-haspopup="true"
			onMouseEnter={handlePopoverOpen}
			onMouseLeave={handlePopoverClose}
			className="card-stack"
		>
			<img src={src} alt={name} />
			<h3>{name}</h3>
			<Popover
				id="mouse-over-popover"
				sx={{
					pointerEvents: "none",
				}}
				open={open}
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: "center",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "center",
					horizontal: "left",
				}}
				onClose={handlePopoverClose}
				disableRestoreFocus
			>
				<PopoverDetails
					src={src}
					name={name}
					altName={altName}
					experience={experience}
					projects={projects}
					professionalExperience={professionalExperience}
					percentage={percentage}
				/>
			</Popover>
		</CardIconContainer>
	);
};

export default CardIcon;
