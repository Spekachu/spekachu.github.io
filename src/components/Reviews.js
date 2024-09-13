import React from "react";

const ReviewsSection = () => {
	return (
		<div className="my-container px-8 lg:px-4">
			<div className="section-header">
				<p>re<span>views</span></p>
			</div>
			<div className="bg-white p-6 max-w-4xl mx-auto shadow-lg rounded-lg">
      {/* Reviewer Information */}
      <div className="flex items-center mb-4">
        <img
          src="https://media.licdn.com/dms/image/v2/C4D03AQGWYCTqc_oaNA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1517053821150?e=1731542400&v=beta&t=GhAR4sVrOHDr7X-XvyIeBE_HQi6CV4P8S2eA15zUV_Q" // Replace this with the actual profile image URL
          alt="Jared Park"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <div className="text-lg font-bold">Jared Park</div>
          <span className="text-gray-500">Manager from Impartner</span>
        </div>
      </div>
      <div className="text-sm text-gray-500">September 9, 2024</div>

      {/* Review Content */}
      <div className="mt-4 text-gray-800">
        <p className="mb-4">
          Spencer is a very talented full-stack developer who has the unique ability to also be customer facing. As a
          technical account manager on my team, Spencer managed our largest enterprise account who was a key strategic
          account for us. He was loved by all in that account and I repeatedly received unprompted messages from that
          customer praising Spencer for his impact on their organization as they worked with him to build out our
          solution in a way that supported their business objectives.
        </p>
        <p className="mb-4">
          Spencer is a person of integrity and takes great pride in his work. He is a self-starter, and will always go
          the extra mile to make a customer happy and successful. Not to mention, his skills as a developer are top
          notch.
        </p>
        <p>
          It should be noted that the TAM role he operated in for this client required him to be proficient in HTML,
          CSS, C#, .NET, and Javascript.
        </p>
      </div>
    </div>
		</div>
	);
};

export default ReviewsSection;
