
const ProjectCard = ({ title, description, link, imgSrc, altText }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <div>
        <p className="text-gray-600 text-sm mb-1">{description}</p>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="mt-2">
          <a href={link} target="_blank" rel="noreferrer" className="text-highlight hover:text-green-300">
            Tap to view
          </a>
        </p>
      </div>
      <div className="mt-4">
        <img src={imgSrc} alt={altText} className="rounded-md" />
      </div>
    </div>
  );
};

export default ProjectCard;
