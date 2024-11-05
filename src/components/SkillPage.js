import React from "react";
import "./SkillPage.css";

const SkillPage = () => {
  return (
    <div className="skill-container my-container px-8 lg:px-4">
			<div className="section-header">
				<p><span>ski</span>lls</p>
			</div>
			<div>
				<div className="mb-8">
					<h2 className="text-2xl font-bold mb-4">Programming Languages</h2>
					<ul className="flex flex-wrap gap-4">
						<li className="bg-gray-200 p-2 rounded">JavaScript</li>
						<li className="bg-gray-200 p-2 rounded">C#</li>
						<li className="bg-gray-200 p-2 rounded">PHP</li>
					</ul>
				</div>

				<div className="mb-8">
					<h2 className="text-2xl font-bold mb-4">Web Development</h2>
					<div className="mb-6">
						<h3 className="text-xl mb-2 ">Frontend Development</h3>
						<ul className="flex flex-wrap gap-4">
							<li className="bg-gray-200 p-2 rounded">HTML</li>
							<li className="bg-gray-200 p-2 rounded">CSS</li>
							<li className="bg-gray-200 p-2 rounded">SCSS</li>
							<li className="bg-gray-200 p-2 rounded">JavaScript (ES6+)</li>
							<li className="bg-gray-200 p-2 rounded">React</li>
							<li className="bg-gray-200 p-2 rounded">React Routing</li>
							<li className="bg-gray-200 p-2 rounded">Next.js</li>
							<li className="bg-gray-200 p-2 rounded">jQuery</li>
							<li className="bg-gray-200 p-2 rounded">Bootstrap</li>
							<li className="bg-gray-200 p-2 rounded">Tailwind</li>
						</ul>
					</div>
					<div className="mb-6">
						<h3 className="text-xl mb-2 ">Backend Development</h3>
						<ul className="flex flex-wrap gap-4">
						<li className="bg-gray-200 p-2 rounded">Node.js</li>
							<li className="bg-gray-200 p-2 rounded">ASP.NET</li>
							<li className="bg-gray-200 p-2 rounded">PHP</li>
							<li className="bg-gray-200 p-2 rounded">SQL</li>
						</ul>
					</div>
					<div>
						<h3 className="text-xl mb-2 ">Content Management</h3>
						<ul className="flex flex-wrap gap-4">
							<li className="bg-gray-200 p-2 rounded">WordPress</li>
						</ul>
					</div>
				</div>

				<div className="mb-8">
					<h2 className="text-2xl font-bold mb-4">Development Tools</h2>
					<ul className="flex flex-wrap gap-4">
						<li className="bg-gray-200 p-2 rounded">GitHub</li>
						<li className="bg-gray-200 p-2 rounded">VS Code</li>
						<li className="bg-gray-200 p-2 rounded">PostgreSQL</li>
						<li className="bg-gray-200 p-2 rounded">Docker</li>
						<li className="bg-gray-200 p-2 rounded">LocalWP</li>
						<li className="bg-gray-200 p-2 rounded">Papertrail</li>
						<li className="bg-gray-200 p-2 rounded">Filezilla</li>
					</ul>
				</div>

				<div className="mb-8">
					<h2 className="text-2xl font-bold mb-4">Frameworks & Libraries</h2>
					<ul className="flex flex-wrap gap-4">
						<li className="bg-gray-200 p-2 rounded">React</li>
						<li className="bg-gray-200 p-2 rounded">Next.js</li>
						<li className="bg-gray-200 p-2 rounded">Bootstrap</li>
						<li className="bg-gray-200 p-2 rounded">Tailwind</li>
						<li className="bg-gray-200 p-2 rounded">jQuery</li>
						<li className="bg-gray-200 p-2 rounded">Express</li>
					</ul>
				</div>

				<div className="mb-8">
					<h2 className="text-2xl font-bold mb-4">General Programming Skills</h2>
					<ul className="flex flex-wrap gap-4">
						<li className="bg-gray-200 p-2 rounded">Algorithms</li>
						<li className="bg-gray-200 p-2 rounded">Data Structures</li>
						<li className="bg-gray-200 p-2 rounded">Responsive Design</li>
						<li className="bg-gray-200 p-2 rounded">Mobile Development</li>
						<li className="bg-gray-200 p-2 rounded">REST APIs</li>
						<li className="bg-gray-200 p-2 rounded">Database Management</li>
					</ul>
				</div>
			</div>

    </div>
  );
};

export default SkillPage;
