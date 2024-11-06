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
					<ul className="flex flex-wrap gap-2">
						<li className="bg-gray-200 py-1 px-2 rounded-full">JavaScript</li>
						<li className="bg-gray-200 py-1 px-2 rounded-full">C#</li>
						<li className="bg-gray-200 py-1 px-2 rounded-full">PHP</li>
					</ul>
				</div>

				<div className="mb-8">
					<h2 className="text-2xl font-bold mb-4">Web Development</h2>
					<div className="mb-6">
						<h3 className="text-xl mb-2 ">Frontend Development</h3>
						<ul className="flex flex-wrap gap-2">
							<li className="bg-gray-200 py-1 px-2 rounded-full">HTML</li>
							<li className="bg-gray-200 py-1 px-2 rounded-full">CSS</li>
							<li className="bg-gray-200 py-1 px-2 rounded-full">SCSS</li>
							<li className="bg-gray-200 py-1 px-2 rounded-full">JavaScript (ES6+)</li>
							<li className="bg-gray-200 py-1 px-2 rounded-full">React</li>
							<li className="bg-gray-200 py-1 px-2 rounded-full">React Routing</li>
							<li className="bg-gray-200 py-1 px-2 rounded-full">Next.js</li>
							<li className="bg-gray-200 py-1 px-2 rounded-full">jQuery</li>
							<li className="bg-gray-200 py-1 px-2 rounded-full">Bootstrap</li>
							<li className="bg-gray-200 py-1 px-2 rounded-full">Tailwind</li>
						</ul>
					</div>
					<div className="mb-6">
						<h3 className="text-xl mb-2 ">Backend Development</h3>
						<ul className="flex flex-wrap gap-2">
						<li className="bg-gray-200 py-1 px-2 rounded-full">Node.js</li>
							<li className="bg-gray-200 py-1 px-2 rounded-full">ASP.NET</li>
							<li className="bg-gray-200 py-1 px-2 rounded-full">PHP</li>
							<li className="bg-gray-200 py-1 px-2 rounded-full">SQL</li>
						</ul>
					</div>
					<div>
						<h3 className="text-xl mb-2 ">Content Management</h3>
						<ul className="flex flex-wrap gap-2">
							<li className="bg-gray-200 py-1 px-2 rounded-full">WordPress</li>
						</ul>
					</div>
				</div>

				<div className="mb-8">
					<h2 className="text-2xl font-bold mb-4">Development Tools</h2>
					<ul className="flex flex-wrap gap-2">
						<li className="bg-gray-200 py-1 px-2 rounded-full">GitHub</li>
						<li className="bg-gray-200 py-1 px-2 rounded-full">VS Code</li>
						<li className="bg-gray-200 py-1 px-2 rounded-full">PostgreSQL</li>
						<li className="bg-gray-200 py-1 px-2 rounded-full">Docker</li>
						<li className="bg-gray-200 py-1 px-2 rounded-full">LocalWP</li>
						<li className="bg-gray-200 py-1 px-2 rounded-full">Papertrail</li>
						<li className="bg-gray-200 py-1 px-2 rounded-full">Filezilla</li>
					</ul>
				</div>

				<div className="mb-8">
					<h2 className="text-2xl font-bold mb-4">Frameworks & Libraries</h2>
					<ul className="flex flex-wrap gap-2">
						<li className="bg-gray-200 py-1 px-2 rounded-full">React</li>
						<li className="bg-gray-200 py-1 px-2 rounded-full">Next.js</li>
						<li className="bg-gray-200 py-1 px-2 rounded-full">Bootstrap</li>
						<li className="bg-gray-200 py-1 px-2 rounded-full">Tailwind</li>
						<li className="bg-gray-200 py-1 px-2 rounded-full">jQuery</li>
						<li className="bg-gray-200 py-1 px-2 rounded-full">Express</li>
					</ul>
				</div>

				<div className="mb-8">
					<h2 className="text-2xl font-bold mb-4">General Programming Skills</h2>
					<ul className="flex flex-wrap gap-2">
						<li className="bg-gray-200 py-1 px-2 rounded-full">Algorithms</li>
						<li className="bg-gray-200 py-1 px-2 rounded-full">Data Structures</li>
						<li className="bg-gray-200 py-1 px-2 rounded-full">Responsive Design</li>
						<li className="bg-gray-200 py-1 px-2 rounded-full">Mobile Development</li>
						<li className="bg-gray-200 py-1 px-2 rounded-full">REST APIs</li>
						<li className="bg-gray-200 py-1 px-2 rounded-full">Database Management</li>
					</ul>
				</div>
			</div>

    </div>
  );
};

export default SkillPage;
