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
						Outside of coding, I'm also passionate about music, singing, chess, art, language learning, and I love spending time in nature and staying active.
					</p>
					<p className="relative before:block before:absolute before:h-full before:w-px before:bg-highlight before:-left-2">I am currently developing an exciting <span className="text-highlight">language learning app</span> that displays vocabulary lists as a contextual map for users to explore. As I am currently studying <span className="text-highlight">German</span>, I am building something I myself would find very useful.</p>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
