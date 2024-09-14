import React, { useState } from "react";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
// import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
		<div className="bg-slate-50/75 backdrop-blur-md sticky top-0 z-10">
			<div className="my-container px-8 lg:px-4 py-4 mx-auto flex justify-between">
				<div className="">
					<Link to="home" spy={true} smooth={true} duration={500}>
						spencer johnson
					</Link>
				</div>
				<div className="md:hidden">
					{isMenuOpen ? (
						<div className="fixed w-dvw right-0 top-0 text-right flex flex-col items-end h-dvh bg-slate-50/95 py-4 px-8">
							<CloseIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
							<div className="flex flex-col justify-around min-h-[50dvh]">
								<Link
									onClick={() => setIsMenuOpen(!isMenuOpen)}
									to="home"
									spy={true}
									smooth={true}
									duration={500}
								>
									home
								</Link>
								<Link
									onClick={() => setIsMenuOpen(!isMenuOpen)}
									to="about"
									spy={true}
									smooth={true}
									duration={500}
								>
									about
								</Link>
								<Link
									onClick={() => setIsMenuOpen(!isMenuOpen)}
									to="experience"
									spy={true}
									smooth={true}
									duration={500}
								>
									experience
								</Link>
								<Link
									onClick={() => setIsMenuOpen(!isMenuOpen)}
									to="reviews"
									spy={true}
									smooth={true}
									duration={500}
								>
									reviews
								</Link>
								<Link
									onClick={() => setIsMenuOpen(!isMenuOpen)}
									to="skills"
									spy={true}
									smooth={true}
									duration={500}
								>
									skills
								</Link>
								<Link
									onClick={() => setIsMenuOpen(!isMenuOpen)}
									to="projects"
									spy={true}
									smooth={true}
									duration={500}
								>
									projects
								</Link>
								<Link
									onClick={() => setIsMenuOpen(!isMenuOpen)}
									to="certifications"
									spy={true}
									smooth={true}
									duration={500}
								>
									certifications
								</Link>
								<Link
									onClick={() => setIsMenuOpen(!isMenuOpen)}
									to="contact"
									spy={true}
									smooth={true}
									duration={500}
								>
									contact
								</Link>

							</div>
						</div>
					) : (
						<MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
					)}
				</div>
				<div className="navbar-right-options justify-between hidden md:flex">
					<Link className="px-2" to="about" spy={true} smooth={true} duration={500}>
						about
					</Link>
					<Link className="px-2" to="experience" spy={true} smooth={true} duration={500}>
						experience
					</Link>
					<Link className="px-2" to="reviews" spy={true} smooth={true} duration={500}>
						reviews
					</Link>
					<Link className="px-2" to="skills" spy={true} smooth={true} duration={500}>
						skills
					</Link>
					<Link className="px-2" to="projects" spy={true} smooth={true} duration={500}>
						projects
					</Link>
					<Link className="px-2" to="contact" spy={true} smooth={true} duration={500}>
						contact
					</Link>
				</div>
			</div>
			
		</div>
  );
};

export default Navbar;
