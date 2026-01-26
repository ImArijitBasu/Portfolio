import React from "react";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  // Safety check
  if (!project) {
    return null;
  }

  const { id, name, image, description, techStack } = project;

  return (
    <div className="bg-black border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all duration-300 card-hover group">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
            e.target.alt = "Default project image";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tech Stack Badges */}
        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {techStack.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-900 text-gray-400 text-xs rounded border border-gray-800"
              >
                {tech}
              </span>
            ))}
            {techStack.length > 3 && (
              <span className="px-2 py-1 bg-gray-900 text-gray-500 text-xs rounded border border-gray-800">
                +{techStack.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Project Name */}
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
          {name}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>

        {/* View Details Button */}
        <Link to={`/project/${id}`} className="block">
          <button className="w-full py-2.5 px-4 bg-transparent border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-900 hover:text-white hover:border-gray-600 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
            <span>View Details</span>
            <span className="group-hover/btn:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Project;
