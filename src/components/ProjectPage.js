import React from "react";
import "./ProjectPage.css";

const ProjectPage = () => {
  return (
    <div className="project-container my-container px-8 lg:px-4 ">
      <div className="project-header">
        <span>pro</span>jects
      </div>
      <div className="project-list">
				<div className="project">
          <p>e-commerce wordpress website</p>
          <p>Our Little Shop</p>
          <p>
            <a href="https://ourlittledev.wpenginepowered.com/">
              Tap to view
            </a>
          </p>
        </div>
        <div className="project">
          <p>Tool</p>
          <p>Linear Gradient Generator</p>
          <p>
            <a href="https://spekachu.github.io/Linear-Gradient-Generator/">
              Tap to view
            </a>
          </p>
        </div>
        <div className="project">
          <p>Game</p>
          <p>Tic-Tac-Toe</p>
          <p>
            <a href="https://spekachu.github.io/Tic-Tac-Toe/">
              Tap to view
            </a>
          </p>
        </div>
        <div className="project">
          <p>Instrument</p>
          <p>JavaScript Drum Kit</p>
          <p>
            <a href="https://spekachu.github.io/JavaScript-Drum-Kit/">
              Tap to view
            </a>
          </p>
        </div>
        <div className="project">
          <p>Interactive</p>
          <p>Drawing Grid</p>
          <p>
            <a href="https://spekachu.github.io/DrawingGrid/">
              Tap to view
            </a>
          </p>
        </div>
        <div className="project">
          <p>Tool</p>
          <p>JavaScript Calculator</p>
          <p>
            <a href="https://codepen.io/Spekachu/full/jWwEpW/">
              Tap to view
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
