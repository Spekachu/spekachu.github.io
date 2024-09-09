import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./App.css";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectPage from "./components/ProjectPage";
import SkillPage from "./components/SkillPage";
import EducationPage from "./components/EducationPage";

export default function App() {
  const [showBackToTopBtn, setShowBackToTopBtn] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setShowBackToTopBtn(true);
    } else if (scrolled <= 500) {
      setShowBackToTopBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
			<div id="home" className="bg-slate-50 text-emerald-900">
				
				<Navbar />
				<div className="app-section sm:pt-8">
					{/* <HomePage /> */}
					<HeroSection />
				</div>
				<div className="app-section pt-16" id="about">
					<AboutPage />
				</div>
				<div className="app-section pt-16" id="skills">
					<SkillPage />
				</div>
				<div className="app-section pt-16" id="projects">
					<ProjectPage />
				</div>
				<div className="app-section pt-16">
					<EducationPage />
				</div>
				<div className="app-section pt-16" id="contact">
					<ContactPage />
				</div>
				{showBackToTopBtn && (
					<button className="btn btn-back-to-top hover:bg-emerald-900 hover:text-white" onClick={scrollToTop}>
						<span className="text-sm"> Back to Top</span>
						<ArrowUpwardIcon />
					</button>
				)}
			</div>
    </>
  );
}
