const CertificationsPage = () => {
	return (
		<div className="">
			<div className="my-container px-8 lg:px-4">
				<div className="section-header">
					<p><span>cert</span>ifications</p>
					<p className="text-base lg:text-lg text-stone-900 leading-relaxed mt-2">
						Over the years, I have pursued self-education through various online platforms, including CodeSignal, FreeCodeCamp, The Odin Project, countless YouTube tutorials, and of course now ChatGPT and AI are fantastic tools for learning. Below are some of the certifications I've earned along the way:
					</p>
				</div>
			</div>

			<div className="certs-wrapper flex flex-wrap gap-6 justify-center max-w-6xl mx-auto">
				{/* Certificate 1 */}
				<div className="cert shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
					<a href="https://learn.codesignal.com/certificates/cm0ezx2je001khgzalxcunriy/course-paths/10" target="_blank" rel="noopener noreferrer">
						<img src="/assets/certs/algo-certificate.png" alt="Mastering Algorithms and Data Structures in JavaScript" className="w-80 h-auto" />
					</a>
				</div>

				{/* Certificate 2 */}
				<div className="cert shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
					<a href="https://www.sololearn.com/certificates/CT-7PBKJV6U" target="_blank" rel="noopener noreferrer">
						<img src="/assets/certs/html-cert.png" alt="HTML Certificate" className="w-80 h-auto" />
					</a>
				</div>

				{/* Certificate 3 */}
				<div className="cert shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
					<a href="https://www.sololearn.com/certificates/CT-OZBC2TAM" target="_blank" rel="noopener noreferrer">
						<img src="/assets/certs/css-cert.png" alt="CSS Certificate" className="w-80 h-auto" />
					</a>
				</div>

				{/* Certificate 4 */}
				<div className="cert shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
					<a href="https://www.sololearn.com/certificates/CT-LPFFZWAK" target="_blank" rel="noopener noreferrer">
						<img src="/assets/certs/js-cert.png" alt="JS Certificate" className="w-80 h-auto" />
					</a>
				</div>

				{/* Certificate 5 */}
				<div className="cert shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
					<a href="https://www.sololearn.com/certificates/CT-6W7K6X93" target="_blank" rel="noopener noreferrer">
						<img src="/assets/certs/php-cert.png" alt="PHP Certificate" className="w-80 h-auto" />
					</a>
				</div>

				{/* Certificate 6 */}
				<div className="cert shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
					<a href="https://www.sololearn.com/certificates/CT-0IXCNSSN" target="_blank" rel="noopener noreferrer">
						<img src="/assets/certs/sql-cert.png" alt="SQL Certificate" className="w-80 h-auto" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default CertificationsPage;
