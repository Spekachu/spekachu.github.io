import React, { useState } from "react";

const CertificationsPage = () => {
	const [currentCert, setCurrentCert] = useState(0);

	const certificates = [
		{
			title: "Mastering Algorithms and Data Structures in JavaScript",
			image: "/assets/certs/algo-certificate.png",
			link: "https://learn.codesignal.com/certificates/cm0ezx2je001khgzalxcunriy/course-paths/10"
		},
		{
			title: "JavaScript Level 1",
			image: "/assets/certs/js_1_certificate.png",
			link: "#"
		},
		{
			title: "JavaScript Level 2",
			image: "/assets/certs/js_2_certificate.png",
			link: "#"
		},
		{
			title: "JavaScript Level 3",
			image: "/assets/certs/js_3_certificate.png",
			link: "#"
		},
		{
			title: "JavaScript Level 4",
			image: "/assets/certs/js_4_certificate.png",
			link: "#"
		},
		{
			title: "Python Certificate",
			image: "/assets/certs/python_certificate_1.png",
			link: "#"
		},
		{
			title: "HTML Certificate",
			image: "/assets/certs/html-cert.png",
			link: "https://www.sololearn.com/certificates/CT-7PBKJV6U"
		},
		{
			title: "CSS Certificate",
			image: "/assets/certs/css-cert.png",
			link: "https://www.sololearn.com/certificates/CT-OZBC2TAM"
		},
		{
			title: "JavaScript Certificate",
			image: "/assets/certs/js-cert.png",
			link: "https://www.sololearn.com/certificates/CT-LPFFZWAK"
		},
		{
			title: "PHP Certificate",
			image: "/assets/certs/php-cert.png",
			link: "https://www.sololearn.com/certificates/CT-6W7K6X93"
		},
		{
			title: "SQL Certificate",
			image: "/assets/certs/sql-cert.png",
			link: "https://www.sololearn.com/certificates/CT-0IXCNSSN"
		},
	];

	const nextCert = () => {
		setCurrentCert((prev) => (prev + 1) % certificates.length);
	};

	const prevCert = () => {
		setCurrentCert((prev) => (prev - 1 + certificates.length) % certificates.length);
	};

	return (
			<div className="my-container px-8 lg:px-4">
				<div className="section-header">
					<p><span>cert</span>ifications</p>
					<p className="text-base lg:text-lg text-stone-900 leading-relaxed mt-2">
						Over the years, I have pursued self-education through various online platforms, including CodeSignal, FreeCodeCamp, The Odin Project, countless YouTube tutorials, and of course now ChatGPT and AI are fantastic tools for learning. Below are some of the certifications I've earned along the way:
					</p>
				</div>

				<div className="relative max-w-xl mx-auto mt-8">
					{/* Navigation Buttons */}
					<button
						onClick={prevCert}
						className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 md:-translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
						aria-label="Previous certificate"
					>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
						</svg>
					</button>
					<button
						onClick={nextCert}
						className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 md:translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
						aria-label="Next certificate"
					>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
						</svg>
					</button>

					{/* Certificate Display */}
					<div className="cert-display transition-opacity duration-300 ease-in-out">
						<a 
							href={certificates[currentCert].link} 
							target="_blank" 
							rel="noopener noreferrer"
							className="block shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden"
						>
							<img 
								src={certificates[currentCert].image} 
								alt={certificates[currentCert].title}
								className="w-full h-auto"
							/>
						</a>
						<h3 className="text-center mt-4 text-lg font-semibold text-gray-800">
							{certificates[currentCert].title}
						</h3>
					</div>

					{/* Pagination Dots */}
					<div className="flex justify-center mt-6 gap-2 flex-wrap max-w-lg mx-auto">
						{certificates.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentCert(index)}
								className={`w-2 h-2 rounded-full transition-all duration-300 ${
									currentCert === index ? "bg-green-400 w-4" : "bg-gray-300"
								}`}
								aria-label={`Go to certificate ${index + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
	);
};

export default CertificationsPage;
