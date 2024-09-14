import ProjectCard from './ProjectCard';

const ProjectPage = () => {
	return (
		<>
			<div className="project-container my-container px-8 lg:px-4 ">
				<div className="section-header">
					<p><span>pro</span>jects</p>
					<p className='mt-4'>Most of my experience comes from the companies I've worked for, but here some small projects I've built as part of my self-education.</p>
				</div>
			</div>

			<div className="project-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-6xl">
				<ProjectCard
					title="Our Little Shop"
					description="e-commerce, wordpress, react, interactivity api"
					link="https://ourlittledev.wpenginepowered.com/"
					imgSrc="/assets/project-screenshots/our-little-shop.png"
					altText="Our Little Shop Project Screenshot"
				/>

				<ProjectCard
					title="Linear Gradient Generator"
					description="tool, javascript, css"
					link="https://spekachu.github.io/Linear-Gradient-Generator/"
					imgSrc="/assets/project-screenshots/linear-gradient.png"
					altText="Linear Gradient Generator Project Screenshot"
				/>

				<ProjectCard
					title="Tic-Tac-Toe"
					description="game, javascript, css"
					link="https://spekachu.github.io/Tic-Tac-Toe/"
					imgSrc="/assets/project-screenshots/tic-tac-toe.png"
					altText="Tic-Tac-Toe Project Screenshot"
				/>

				<ProjectCard
					title="JavaScript Drum Kit"
					description="Instrument, javascript, css"
					link="https://spekachu.github.io/JavaScript-Drum-Kit/"
					imgSrc="/assets/project-screenshots/drum-machine.png"
					altText="JavaScript Drum Kit Project Screenshot"
				/>

				<ProjectCard
					title="Drawing Grid"
					description="Interactive, javascript, css"
					link="https://spekachu.github.io/DrawingGrid/"
					imgSrc="/assets/project-screenshots/drawing-grid.png"
					altText="Drawing Grid Project Screenshot"
				/>

				<ProjectCard
					title="JavaScript Calculator"
					description="Tool, javascript, css"
					link="https://codepen.io/Spekachu/full/jWwEpW/"
					imgSrc="/assets/project-screenshots/calculator.png"
					altText="JavaScript Calculator Project Screenshot"
				/>
			</div>
		</>
	);
};

export default ProjectPage;
