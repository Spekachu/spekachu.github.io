import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./EducationPage.css";

const EducationPage = () => {
  return (
    <div className="education-container my-container px-8 lg:px-4 ">
      <div className="education-header">
        <p><span>exp</span>erience</p>
      </div>
      <div className="education-list">
        <div className="education">
          <p><a href="https://impartner.com" target="_blank" rel="noreferrer">Impartner</a></p>
					<details open>
						<summary>
							Web Developer / Technical Account Manager
						</summary>
						<ul>
							<li><b>Client Support & Legacy Code Management</b>: Managed and resolved support tickets for 
							client portals, ensuring smooth operation and timely resolution of issues. Regularly worked 
							with legacy code, refactoring it for improved efficiency, maintainability, and scalability.</li>
							<li><b>UI/UX Enhancements</b>: Implemented new styling options to modernize client portal 
							designs, improving user experience and client satisfaction. Leveraged CSS and front-end 
							technologies to create visually appealing and responsive layouts.</li>
							<li><b>API Development & Integration</b>: Designed and integrated APIs to enhance client portal 
							functionality and improve data exchange between systems. Collaborated with clients to 
							ensure seamless API performance and adaptability to their needs.</li>
							<li><b>Custom Form Creation</b>: Developed numerous custom forms tailored to client 
							specifications, enabling better data capture and workflow automation. These forms played a 
							critical role in streamlining user interactions and operational processes.</li>
							<li><b>Process Automation</b>: Developed and integrated automated workflows, reducing back-office workload for clients and delivering faster, more accurate results to partners. These 
							optimizations significantly improved operational efficiency.</li>
							<li><b>Documentation & Knowledge Sharing</b>: Created and maintained comprehensive 
							documentation for processes, troubleshooting steps, and recurring issues. </li>
						</ul>
					</details>
          <p>
            <span>Oct'20 - Present</span>
            <a href="/">
              <LocationOnIcon />
              Graz, Austria
            </a>
          </p>
        </div>
        <div className="education">
          <p><a href="https://scorpion.co" target="_blank" rel="noreferrer">Scorpion</a></p>
					<details>
						<summary>Frontend Developer</summary>
						<ul>
							<li>Started as a Tech Services Representative, providing client support and resolving bugs for 
							client websites and landing pages. </li>
							<li>Quickly demonstrated strong technical skills for implementing custom designs, leading to 
							a role in the development team. Independently managed and executed projects, with 
							responsibilities expanding rapidly due to demonstrated capability. </li>
							<li>Designed and maintained reusable master templates, with swappable components.</li>
							<li>Created a visual tool for project managers to quickly mockup new landing pages with a 
							friendly user interface providing access to all available components I created.</li>
						</ul>
					</details>
          <p>
            <span>Mar'16 - Nov'17</span>
            <a href="/">
              <LocationOnIcon />
              Valencia, California, USA
            </a>
          </p>
        </div>
        <div className="my-12">
					<p className="text-xl mb-6">
						Over the years, I have pursued self-education through various online platforms, including FreeCodeCamp and The Odin Project. Below are some of the certifications I've earned along the way:
					</p>

					<div className="certs-wrapper flex flex-wrap gap-6 justify-center">
						{/* Certificate 1 */}
						<div className="cert shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
							<a href="https://learn.codesignal.com/certificates/cm0ezx2je001khgzalxcunriy/course-paths/10" target="_blank" rel="noopener noreferrer">
								<img src="/assets/algo-certificate.png" alt="Mastering Algorithms and Data Structures in JavaScript" className="w-64 h-auto" />
							</a>
						</div>

						{/* Certificate 2 */}
						<div className="cert shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
							<a href="https://www.sololearn.com/certificates/CT-7PBKJV6U" target="_blank" rel="noopener noreferrer">
								<img src="/assets/html-cert.png" alt="HTML Certificate" className="w-64 h-auto" />
							</a>
						</div>

						{/* Certificate 3 */}
						<div className="cert shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
							<a href="https://www.sololearn.com/certificates/CT-OZBC2TAM" target="_blank" rel="noopener noreferrer">
								<img src="/assets/css-cert.png" alt="CSS Certificate" className="w-64 h-auto" />
							</a>
						</div>

						{/* Certificate 4 */}
						<div className="cert shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
							<a href="https://www.sololearn.com/certificates/CT-LPFFZWAK" target="_blank" rel="noopener noreferrer">
								<img src="/assets/js-cert.png" alt="JS Certificate" className="w-64 h-auto" />
							</a>
						</div>

						{/* Certificate 5 */}
						<div className="cert shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
							<a href="https://www.sololearn.com/certificates/CT-6W7K6X93" target="_blank" rel="noopener noreferrer">
								<img src="/assets/php-cert.png" alt="PHP Certificate" className="w-64 h-auto" />
							</a>
						</div>

						{/* Certificate 6 */}
						<div className="cert shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
							<a href="https://www.sololearn.com/certificates/CT-0IXCNSSN" target="_blank" rel="noopener noreferrer">
								<img src="/assets/sql-cert.png" alt="SQL Certificate" className="w-64 h-auto" />
							</a>
						</div>
					</div>
				</div>

      </div>
    </div>
  );
};

export default EducationPage;
