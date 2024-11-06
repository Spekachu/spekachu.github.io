import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { CalendarMonth } from "@mui/icons-material";
import "./ExperiencePage.css";
import { FaExternalLinkAlt } from "react-icons/fa";

const ExperiencePage = () => {
  const educationList = [
    {
      title: "Ruth",
      link: "https://ruth.careers",
      role: "Software Developer",
      details: [
        "Part of the engineering team responsible for developing Ruth's matching algorithm and software platform",
				"Using C#/.NET, SQL"
      ],
      details2: [],
      date: "Nov'24 - Present",
      location: "Graz, Austria",
			open: true
    },
    {
      title: "Impartner",
      link: "https://impartner.com",
      role: "Web Developer / Technical Account Manager",
      details: [
        "Client Support & Legacy Code Management",
        "UI/UX Enhancements",
        "API Development & Integration",
        "Custom Form Creation",
        "Process Automation",
        "Documentation & Knowledge Sharing",
      ],
      details2: [
        "Managed and resolved support tickets for client portals, ensuring smooth operation and timely resolution of issues. Regularly worked with legacy code, refactoring it for improved efficiency, maintainability, and scalability.",
        "Implemented new styling options to modernize client portal designs, improving user experience and client satisfaction. Leveraged CSS and front-end technologies to create visually appealing and responsive layouts.",
        "Designed and integrated APIs to enhance client portal functionality and improve data exchange between systems. Collaborated with clients to ensure seamless API performance and adaptability to their needs.",
        "Developed numerous custom forms tailored to client specifications, enabling better data capture and workflow automation. These forms played a critical role in streamlining user interactions and operational processes.",
        "Developed and integrated automated workflows, reducing back-office workload for clients and delivering faster, more accurate results to partners. These optimizations significantly improved operational efficiency.",
        "Created and maintained comprehensive documentation for processes, troubleshooting steps, and recurring issues.",
      ],
      date: "Oct'20 - Sep'24",
      location: "SLC, Utah, USA & Graz, Austria",
			open: false
    },
    {
      title: "Scorpion",
      link: "https://scorpion.co",
      role: "Frontend Developer",
      details: [
        "Started as a Tech Services Representative, providing client support and resolving bugs for client websites and landing pages.",
        "Quickly demonstrated strong technical skills for implementing custom designs, leading to a role in the development team.",
        "Designed and maintained reusable master templates, with swappable components.",
        "Created a visual tool for project managers to quickly mockup new landing pages with a friendly user interface providing access to all available components I created.",
      ],
      details2: [],
      date: "Mar'16 - Nov'17",
      location: "Valencia, California, USA",
			open: false
    },
  ];

  return (
    <div className="education-container my-container px-8 lg:px-4 ">
      <div className="education-header">
        <p>
          <span>exp</span>erience
        </p>
      </div>
      <p className="text-sm mt-4">
        <i>(expand for details)</i>
      </p>
      <div className="education-list">
        {educationList.map((education, index) => (
          <div key={index} className="education">
            <p className="text-lg">
              <a
                href={education.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                {education.title} <FaExternalLinkAlt className="inline-block ml-2 text-base" />
              </a>
            </p>
            <details className="w-full" open={education.open}>
              <summary className="hover:text-highlight transition-colors">
                {education.role}
              </summary>
              <ul>
								{education.details.map((detail, index) => (
									<li key={index}>
										{education.details2[index] ? (
											<b>{detail} - </b>
										) : (
											<>{detail}</>
										)}
										{education.details2[index]}
									</li>
								))}
              </ul>
            </details>
            <p className="flex flex-wrap mt-2">
              <span>
                <CalendarMonth /> {education.date}
              </span>
              <span>
                <LocationOnIcon />
                {education.location}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
