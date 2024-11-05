import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const ProjectPage = () => {
	const [currentAdditionalProject, setCurrentAdditionalProject] = useState(0);

	const featuredProjects = [
	];

	const additionalProjects = [
		{
			title: "Word Wanderer",
			description: "language learning app built with react, node, postgrseql, tailwind",
			link: "https://www.wordwanderer.app/",
			imgSrc: "/assets/project-screenshots/word-wanderer.png",
			altText: "Word Wanderer Screenshot"
		},
		{
			title: "Our Little Shop",
			description: "e-commerce, wordpress, react, interactivity api",
			link: "https://ourlittledev.wpenginepowered.com/",
			imgSrc: "/assets/project-screenshots/our-little-shop.png",
			altText: "Our Little Shop Project Screenshot"
		},
		{
			title: "Tic-Tac-Toe",
			description: "game, javascript, css",
			link: "https://spekachu.github.io/Tic-Tac-Toe/",
			imgSrc: "/assets/project-screenshots/tic-tac-toe.png",
			altText: "Tic-Tac-Toe Project Screenshot"
		},
		{
			title: "Linear Gradient Generator",
			description: "tool, javascript, css",
			link: "https://spekachu.github.io/Linear-Gradient-Generator/",
			imgSrc: "/assets/project-screenshots/linear-gradient.png",
			altText: "Linear Gradient Generator Project Screenshot"
		},
		{
			title: "JavaScript Drum Kit",
			description: "Instrument, javascript, css",
			link: "https://spekachu.github.io/JavaScript-Drum-Kit/",
			imgSrc: "/assets/project-screenshots/drum-machine.png",
			altText: "JavaScript Drum Kit Project Screenshot"
		},
		{
			title: "Drawing Grid",
			description: "Interactive, javascript, css",
			link: "https://spekachu.github.io/DrawingGrid/",
			imgSrc: "/assets/project-screenshots/drawing-grid.png",
			altText: "Drawing Grid Project Screenshot"
		},
		{
			title: "JavaScript Calculator",
			description: "Tool, javascript, css",
			link: "https://codepen.io/Spekachu/full/jWwEpW/",
			imgSrc: "/assets/project-screenshots/calculator.png",
			altText: "JavaScript Calculator Project Screenshot"
		}
	];

	const nextProject = () => {
		setCurrentAdditionalProject((prev) => (prev + 1) % additionalProjects.length);
	};

	const prevProject = () => {
		setCurrentAdditionalProject((prev) => (prev - 1 + additionalProjects.length) % additionalProjects.length);
	};

	return (
		<>
			<div className="project-container my-container px-14 lg:px-4">
				<div className="section-header">
					<p><span>pro</span>jects</p>
					<p className='mt-4'>Most of my experience comes from the companies I've worked for, but here are some small projects I've built as part of my self-education.</p>
				</div>

				{/* Additional Projects */}
				<div className="additional-projects mt-12">
					<div className="relative max-w-2xl mx-auto">
						{/* Navigation Buttons */}
						<button
							onClick={prevProject}
							className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
							aria-label="Previous project"
						>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
							</svg>
						</button>
						<button
							onClick={nextProject}
							className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
							aria-label="Next project"
						>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						</button>

						{/* Project Display */}
						<div className="transition-opacity duration-300 ease-in-out">
							<ProjectCard
								title={additionalProjects[currentAdditionalProject].title}
								description={additionalProjects[currentAdditionalProject].description}
								link={additionalProjects[currentAdditionalProject].link}
								imgSrc={additionalProjects[currentAdditionalProject].imgSrc}
								altText={additionalProjects[currentAdditionalProject].altText}
							/>
						</div>

						{/* Pagination Dots */}
						<div className="flex justify-center mt-6 gap-2">
							{additionalProjects.map((_, index) => (
								<button
									key={index}
									onClick={() => setCurrentAdditionalProject(index)}
									className={`w-2 h-2 rounded-full transition-all duration-300 ${
										currentAdditionalProject === index ? "bg-green-400 w-4" : "bg-gray-300"
									}`}
									aria-label={`Go to project ${index + 1}`}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectPage;
