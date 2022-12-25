import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Logo from "../../assets/logo/Logo_2.svg";

const ParticleEffect = () => {
	const [particlesEngine, setParticleEngine] = useState(undefined);
	const particlesInit = useCallback(async (engine) => {
		// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		if (engine) {
			setParticleEngine(engine);
			await loadFull(engine);
		}
	}, [particlesEngine]);

	const particlesLoaded = useCallback(async (container) => {
		await container;
	}, []);

	useEffect(() => {}, [particlesEngine]);
	return (
		<div
			style={{
				position: "fixed",
				backgroundAttachment: "fixed",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				zIndex: -99,
				minHeight: "100%",
				width: "100vh",
			}}
		>
			<Particles
					id="tsparticles"
					init={particlesInit}
					loaded={particlesLoaded}
					options={{
						particles: {
							number: {
								value: 1.5,
								density: {
									enable: true,
									value_area: 800,
								},
							},
							color: {
								value: "#000",
							},
							shape: {
								type: "image",
								stroke: {
									width: 0,
									color: "#000",
								},
								polygon: {
									nb_sides: 6,
								},
								image: {
									src: Logo,
									width: 50,
									height: 50,
								},
							},
							opacity: {
								value: 0.2,
								random: true,
								anim: {
									enable: false,
									speed: 1,
									opacity_min: 0.1,
									sync: false,
								},
							},
							size: {
								value: 90,
								random: false,
								anim: {
									enable: true,
									speed: 10,
									size_min: 40,
									sync: false,
								},
							},
							line_linked: {
								enable: false,
								distance: 200,
								color: "#ffffff",
								opacity: 1,
								width: 2,
							},
							move: {
								enable: true,
								speed: 5,
								direction: "none",
								random: false,
								straight: false,
								out_mode: "out",
								bounce: false,
								attract: {
									enable: false,
									rotateX: 600,
									rotateY: 1200,
								},
							},
						},
						interactivity: {
							detect_on: "canvas",
							events: {
								onhover: {
									enable: false,
									mode: "grab",
								},
								onclick: {
									enable: false,
									mode: "push",
								},
								resize: true,
							},
							modes: {
								grab: {
									distance: 400,
									line_linked: {
										opacity: 1,
									},
								},
								bubble: {
									distance: 400,
									size: 35,
									duration: 2,
									opacity: 8,
									speed: 3,
								},
								repulse: {
									distance: 200,
									duration: 0.4,
								},
								push: {
									particles_nb: 4,
								},
								remove: {
									particles_nb: 2,
								},
							},
						},
						retina_detect: true,
					}}
				/>
		</div>
	);
};

export default ParticleEffect;
