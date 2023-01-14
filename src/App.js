import React, { useRef, useEffect } from "react";
import { Routes } from "react-router-dom";
import Navbar from "./Modules/Navbar/Navbar.jsx";

import "./App.css";
import Main from "./Modules/Main/Main.jsx";
import ParticleEffect from "./Modules/ParticleEffect/ParticleEffect.jsx";
import About from "./Modules/About/About.jsx";
import Skills from "./Modules/Skills/Skills.jsx";
import Experience from "./Modules/Experience/Experience.jsx";
import Projects from "./Modules/Projects/Projects.jsx";
import Contact from "./Modules/Contact/Contact.jsx";
import Footer from "./Modules/Footer/Footer.jsx";

const App = () => {
	const mainRef = useRef(null);
	const aboutRef = useRef(null);
	const skillsRef = useRef(null);
	const experienceRef = useRef(null);
	const projectsRef = useRef(null);
	const contactRef = useRef(null);

	const sections = [
		{
			ref: mainRef,
			id: "mainRef",
			title: "Home",
		},
		{
			ref: aboutRef,
			id: "aboutRef",
			title: "About",
		},
		{
			ref: skillsRef,
			id: "skillsRef",
			title: "Tech Stack",
		},
		{
			ref: experienceRef,
			id: "experienceRef",
			title: "Experiences",
		},
		{
			ref: projectsRef,
			id: "projectsRef",
			title: "Projects",
		},
		{
			ref: contactRef,
			id: "contactRef",
			title: "Contact",
		},
	];
	const scrollIntoView = (title) => {
		if (title) {
			const selectedRef = sections.find((section) => section.title === title);
			if (selectedRef) {
				selectedRef.ref.current?.scrollIntoView({
					behavior: "smooth",
                    block: 'start'
				});
			}
		}
	};

	useEffect(() => {
		document.title = "MUBALDE | Freelance Web Developer"
	}, [])

	return (
		<>
			<ParticleEffect />
			<Navbar scrollIntoView={scrollIntoView} />
			{/* {sections.map(({ Component, ref, id }, index) => (
				<Component key={index} ref={ref} id={id} />
			))} */}
			<div ref={mainRef}>
				<Main />
			</div>
			<div ref={aboutRef}>
				<About />
			</div>
			<div ref={skillsRef}>
				<Skills />
			</div>
			<div ref={experienceRef}>
				<Experience />
			</div>
			<div ref={projectsRef}>
				<Projects />
			</div>
			<div ref={contactRef}>
				<Contact />
			</div>
			<Footer />
		</>
	);
};

export default App;
