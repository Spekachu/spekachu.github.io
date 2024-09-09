import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const HeroSection = () => {
  return (
    <div className="my-container px-8 lg:px-4 py-8 justify-around mx-auto sm:flex">
      <div className="flex flex-col justify-between">
        <div className="text-6xl">
          <p>
            Meet <span className="font-medium text-highlight">Spencer</span>,<br></br>
        		<span className="text-4xl inline-block mt-4">a software developer.</span>
          </p>
        </div>

				<div className="flex text-5xl py-2">
					<a
						href="https://github.com/Spekachu"
						target="_blank"
						rel="noopener noreferrer"
					>
						<GitHubIcon fontSize="inherit"/>
					</a>
					<a
						href="https://www.linkedin.com/in/spencer-johnson-02662492/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<LinkedInIcon fontSize="inherit"/>
					</a>

				</div>
      </div>
      <div id="ProfilePhoto" className="bg-cover bg-center rounded-lg aspect-square shadow flex flex-col justify-end max-h-[25rem] h-auto w-[25rem] shrink ms-auto" style={{ backgroundImage: "url('/assets/spencer-profile.jpeg')" }}>
      </div>
			
    </div>
  );
};

export default HeroSection;
