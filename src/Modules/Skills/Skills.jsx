import React, { useEffect, useState } from "react";
import {
	IconContainer,
	SkillsContainer,
	SkillsDescription,
	SkillsSection,
	SliderContainer,
} from "./skills.styled.jsx";
import SkillLogo from "../../assets/lottie/skills.lottie.json";
import Lottie from "lottie-react";
import CardIcon from "./components/CardIcon.jsx";
import Slider from "react-styled-carousel";

const Skills = () => {
	const [isWidthLaptopSize, setIsWidthLaptopSize] = useState(false);
	const skillsData = [
		{
			src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png",
			name: "React",
			percentage: 75,
			altName: "React JS",
			experience: "2 year(s)",
			projects: 8,
			professionalExperience: "1+ year(s)",
		},
		{
			src: "https://cdn.iconscout.com/icon/free/png-256/redux-283024.png",
			name: "Redux",
			percentage: 75,
			altName: "React JS",
			experience: "2 year(s)",
			projects: 3,
			professionalExperience: "1+ year(s)",
		},
		{
			src: "https://static-00.iconduck.com/assets.00/netlify-icon-511x512-idkvcd89.png",
			name: "Netlify",
			percentage: 50,
			altName: "Netlify",
			experience: "2 year(s)",
			projects: 4,
			professionalExperience: "0 year(s)",
		},
		{
			src: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
			name: "Javascript",
			percentage: 80,
			altName: "Javascript",
			experience: "2 year(s)",
			projects: 8,
			professionalExperience: "1+ year(s)",
		},
		{
			src: "https://res.cloudinary.com/apideck/image/upload/w_196,f_auto/v1593641955/icons/commercejs.png",
			name: "CommerceJS",
			percentage: 45,
			altName: "Commerce JS",
			experience: "5 month(s)",
			projects: 1,
			professionalExperience: "0 year(s)",
		},
		{
			src: "https://cdn.iconscout.com/icon/free/png-256/stripe-2-498440.png",
			name: "Stripe API",
			percentage: 50,
			altName: "Stripe API",
			experience: "5 month(s)",
			projects: 1,
			professionalExperience: "0 year(s)",
		},
		{
			src: "https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png",
			name: "Node JS",
			percentage: 75,
			altName: "Node JS",
			experience: "2 year(s)",
			projects: 2,
			professionalExperience: "1+ year(s)",
		},
		{
			src: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png",
			name: "CSS",
			percentage: 65,
			altName: "CSS",
			experience: "1+ year(s)",
			projects: 2,
			professionalExperience: "6 month(s)",
		},
		{
			src: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png",
			name: "MySQL",
			percentage: 85,
			altName: "MySQL",
			experience: "1+ year(s)",
			projects: 2,
			professionalExperience: "1+ year(s)",
		},
		{
			src: "https://img.icons8.com/color/480/mongodb.png",
			name: "MongoDB",
			percentage: 50,
			altName: "Mongo DB",
			experience: "4 month(s)",
			projects: 2,
			professionalExperience: "0 year(s)",
		},
		{
			src: "https://cdn.worldvectorlogo.com/logos/jquery-4.svg",
			name: "jQuery",
			percentage: 65,
			altName: "jQuery",
			experience: "1 year(s)",
			projects: 2,
			professionalExperience: "2 month(s)",
		},
		{
			src: "https://cdn.iconscout.com/icon/free/png-256/redis-83994.png",
			name: "Redis",
			percentage: 50,
			altName: "Redis",
			experience: "3 month(s)",
			projects: 1,
			professionalExperience: "0 year(s)",
		},
		{
			src: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
			name: "Github",
			percentage: 60,
			altName: "Github",
			experience: "1+ year(s)",
			projects: 1,
			professionalExperience: "1+ year(s)",
		},
		{
			src: "https://mui.com/static/logo.png",
			name: "MUI",
			percentage: 75,
			altName: "Material UI",
			experience: "1+ year(s)",
			projects: 3,
			professionalExperience: "0 year(s)",
		},
		{
			src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/1024px-Socket-io.svg.png",
			name: "Socket IO",
			percentage: 35,
			altName: "Socket IO",
			experience: "3 mornths",
			projects: 1,
			professionalExperience: "0 year(s)",
		},
		{
			src: "https://static-00.iconduck.com/assets.00/c-sharp-c-icon-456x512-9sej0lrz.png",
			name: "C#",
			percentage: 30,
			altName: "C#",
			experience: "2 month(s)",
			projects: 1,
			professionalExperience: "0 year(s)",
		},
		{
			src: "https://cdn.iconscout.com/icon/free/png-256/azure-devops-3628645-3029870.png",
			name: "Azure DevOps",
			percentage: 30,
			altName: "Azure DevOps",
			experience: "2 month(s)",
			projects: 1,
			professionalExperience: "0 year(s)",
		},
		{
			src: "https://cdn-icons-png.flaticon.com/512/2306/2306019.png",
			name: "ASP.Net",
			percentage: 30,
			altName: "Azure DevOps",
			experience: "2 month(s)",
			projects: 1,
			professionalExperience: "0 year(s)",
		},
	];
	const responsive = [
		{ breakPoint: 1280, cardsToShow: 5 },
		{ breakPoint: 768, cardsToShow: 3 },
		{ breakPoint: 375, cardsToShow: 1 },
	];

	useEffect(() => {
		const width = window.innerWidth;
		width >= 1280 ? setIsWidthLaptopSize(true) : setIsWidthLaptopSize(false);
	}, []);
	const MySlider = (props) => {
		return <div></div>;
	};
	return (
		<SkillsSection>
			<SkillsContainer>
				<SkillsDescription>
					<h1>
						<span>Tech</span> Stacks
					</h1>
					{isWidthLaptopSize ? (
						<IconContainer>
							{skillsData.map((data, index) => (
								<CardIcon
									key={index}
									src={data.src}
									name={data.name}
									altName={data.altName}
									experience={data.experience}
									projects={data.projects}
									professionalExperience={data.professionalExperience}
									percentage={data.percentage}
								/>
							))}
						</IconContainer>
					) : (
						<SliderContainer className="adasdasd">
							<Slider
								DotsWrapper={MySlider}
								responsive={responsive}
								className="qweqwe"
							>
								{skillsData.map((data, index) => (
									<CardIcon
										key={index}
										src={data.src}
										name={data.name}
										altName={data.altName}
										experience={data.experience}
										projects={data.projects}
										professionalExperience={data.professionalExperience}
										percentage={data.percentage}
									/>
								))}
							</Slider>
						</SliderContainer>
					)}
				</SkillsDescription>
				<Lottie animationData={SkillLogo} loop={true} />
			</SkillsContainer>
		</SkillsSection>
	);
};

export default Skills;
