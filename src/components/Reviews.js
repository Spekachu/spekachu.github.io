import React, { useState } from "react";

const ReviewsSection = () => {
	const [currentReview, setCurrentReview] = useState(0);
	
	const reviews = [
		{
			name: "Jared Park",
			role: "Manager from Impartner",
			date: "September 9, 2024",
			image: "https://media.licdn.com/dms/image/v2/C4D03AQGWYCTqc_oaNA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1517053821150?e=1731542400&v=beta&t=GhAR4sVrOHDr7X-XvyIeBE_HQi6CV4P8S2eA15zUV_Q",
			content: [
				"Spencer is a very talented full-stack developer who has the unique ability to also be customer facing. As a technical account manager on my team, Spencer managed our largest enterprise account who was a key strategic account for us. He was loved by all in that account and I repeatedly received unprompted messages from that customer praising Spencer for his impact on their organization as they worked with him to build out our solution in a way that supported their business objectives.",
				"Spencer is a person of integrity and takes great pride in his work. He is a self-starter, and will always go the extra mile to make a customer happy and successful. Not to mention, his skills as a developer are top notch.",
				"It should be noted that the TAM role he operated in for this client required him to be proficient in HTML, CSS, C#, .NET, and Javascript."
			]
		},
		{
			name: "Peter Chiariello",
			role: "Sales Enablement Leader, Program Director, Business Transformation Specialist at Xerox",
			date: "September 23, 2024",
			image: "https://media.licdn.com/dms/image/v2/C4E03AQElXZRDBlcTCw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516276266919?e=1736380800&v=beta&t=YBuofbValfpTgC0-9r_IFSPewDipj35R8QaUYXsaDkg",
			content: [
				"I am delighted to recommend Spencer for roles in PRM and CRM technical account management or solution architecture. Over the past several years, Spencer has been our dedicated PRM and Partner Portal technical account manager, and I have had the pleasure of working closely with him for the last two years.",
				"Spencer is an exceptionally talented problem solver with a unique blend of technical expertise and business acumen. He consistently asks critical and insightful questions, demonstrating his ability to quickly grasp complex concepts and apply them effectively. His eagerness to help and proactive approach make him an invaluable asset to our team.",
				"One of Spencer's standout qualities is his accountability. He holds himself to the highest standards and consistently meets his commitments, even when juggling multiple priorities. His ability to manage his workload efficiently while maintaining a high level of quality is truly impressive.",
				"Moreover, Spencer is a creative solution designer who always finds innovative ways to address challenges and deliver results. His dedication to getting things done, coupled with his technical skills and business insight, makes him an outstanding candidate for any technical account management or consulting role.",
				"In summary, I strongly recommend Spencer. His skills, work ethic, and positive attitude will undoubtedly make him a valuable addition to any organization."
			]
		},
		{
			name: "Eva Gillespie-Larsen",
			role: "Project Management Pro | 14 Years in Tech & IT | Agile, PMP, LSSBB",
			date: "September 23, 2024",
			image: "https://media.licdn.com/dms/image/v2/D5603AQENiMV20zAj-w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1724102070614?e=1736380800&v=beta&t=Zli-_6bWkDi5c4rKodRP9aHRDbKOOhTdkHVbEquw2D8",
			content: [
				"Spencer and I worked together at Impartner, where he was the technical account manager over our most important and complex customer. We worked together on two separate projects for this customer, where I was the project manager. Spencer was consistently one of the best resources on my team for these projects. He is reliable, detail-oriented, sees and brings attention to risks, technically skilled, and an excellent communicator. The customer also loved and trusted Spencer more than anyone else on the team, due to his consistent excellent performance with them. I would absolutely recommend Spencer to any company and would be thrilled to work with him again anytime, on any project."
			]
		},
		{
			name: "Rosemary Ice",
			role: "Staff Product Owner, Channel/Partner | Certified Scrum Master (CSM)",
			date: "November 3, 2024",
			image: "https://media.licdn.com/dms/image/v2/D5603AQFqC1LPQf9VXg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718483783554?e=1736380800&v=beta&t=QqBHCruKBStbhSAlMWcPmg2C1HzXgbaT5T9s5PvyqQM",
			content: [
				"Spencer served as our dedicated technical account manager for our highly complex project. I found him to be personable, approachable, and professional. I was impressed by his ability to quickly familiarize himself with the project and provide exceptional technical support. As a result of his efforts, we were able to modernize our website and enhance program compliance through efficient automation. He created reusable code and trained me to update it, which enabled me to become self-sufficient. Spencer is an outstanding person, and I truly enjoyed working with him. "
			]
		}
	];

	const nextReview = () => {
		setCurrentReview((prev) => (prev + 1) % reviews.length);
	};

	const prevReview = () => {
		setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
	};

	return (
		<div className="my-container px-14 lg:px-4">
			<div className="section-header">
				<p>re<span>views</span></p>
			</div>
			<div className="relative max-w-4xl mx-auto">
				{/* Navigation Buttons */}
				<button
					onClick={prevReview}
					className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
					aria-label="Previous review"
				>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
					</svg>
				</button>
				<button
					onClick={nextReview}
					className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
					aria-label="Next review"
				>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
					</svg>
				</button>

				{/* Review Card */}
				<div className="bg-white p-6 shadow-lg rounded-lg w-full transition-opacity duration-300 ease-in-out">
					{/* Reviewer Information */}
					<div className="flex items-center mb-4">
						<img
							src={reviews[currentReview].image}
							alt={reviews[currentReview].name}
							className="w-12 h-12 rounded-full mr-4"
						/>
						<div>
							<div className="text-lg font-bold">{reviews[currentReview].name}</div>
							<span className="text-gray-500">{reviews[currentReview].role}</span>
						</div>
					</div>
					<div className="text-sm text-gray-500">{reviews[currentReview].date}</div>

					{/* Review Content */}
					<div className="mt-4 text-gray-800 max-h-80 overflow-y-auto">
						{reviews[currentReview].content.map((paragraph, index) => (
							<p key={index} className="mb-4">
								{paragraph}
							</p>
						))}
					</div>
				</div>

				{/* Pagination Dots */}
				<div className="flex justify-center mt-4 gap-2">
					{reviews.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentReview(index)}
							className={`w-2 h-2 rounded-full transition-all duration-300 ${
								currentReview === index ? "bg-green-400 w-4" : "bg-gray-300"
							}`}
							aria-label={`Go to review ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ReviewsSection;
