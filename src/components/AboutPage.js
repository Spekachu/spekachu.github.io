import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
	return (
		<div className="about-container my-container px-8 lg:px-4">
			<div className="about-header">
				ab<span>out</span>
			</div>
			<div className="about-info">
				<div className="about-left">
					<p className="mt-4">
						I am a versatile <span className="text-highlight">Software Developer</span> with a strong foundation in <span className="text-highlight">Frontend Web Development</span>.
					</p>
				</div>
				<div className="about-right bg-white p-6 shadow-lg rounded-lg">
					<p>
						I am originally from <span className="text-highlight">Los Angeles, California</span> and have enjoyed living and traveling in many parts of the world. Now based in <span className="text-highlight">Austria</span> (with my lovely Austrian wife), I am eager to contribute to innovative projects that leverage my technical skills and allow me to grow. I thrive in dynamic environments where I can learn quickly, collaborate effectively, and make a meaningful impact.
					</p>
					<p>
						Outside of coding, I'm also passionate about music, singing, chess, and art, and I love spending time in nature and staying active.
					</p>
					<p className="relative before:block before:absolute before:h-full before:w-px before:bg-highlight before:-left-2">An exciting project I am currently working is a vocabulary word map app that displays vocab words as a contextual map. I am passionate about languages and am building something I myself would find very useful.</p>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;