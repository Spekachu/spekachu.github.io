import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./EducationPage.css";

const EducationPage = () => {
  return (
    <div className="education-container">
      <div className="education-header">
        <p><span>exp</span>erience</p>
      </div>
      <div className="education-list">
        <div className="education">
          <p>Impartner</p>
					<details>
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
          <p>Scorpion</p>
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
        
      </div>
    </div>
  );
};

export default EducationPage;
