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
					I love to create simple and clean web apps.
				</div>
				<div className="about-right bg-white p-6 shadow-lg rounded-lg">
					<p>
						I am a versatile Web Developer with a strong foundation in front-end development. I am
						always eager to learn new technologies. I am mainly self-taught and highly motivated to
						succeed in my professional roles. My diverse background in customer service, sales, and
						multimedia production enables me to approach challenges with creativity and adaptability.

					</p>
					<p>
						I am originally from Los Angeles, California and have enjoyed living and traveling in many parts of the world. Now based in Austria (with my lovely Austrian wife), I am eager to contribute to innovative projects that leverage my technical skills and allow me to grow. I thrive in dynamic environments where I can learn quickly, collaborate effectively, and make a meaningful impact.
					</p>
					<p>
						Outside of coding, I'm also passionate about music, singing, chess, and art, and I love spending time in nature and staying active.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
