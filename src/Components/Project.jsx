import React from "react";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  const {
    
      id,
      name,
      image,
      description,
      techStack,
      liveLink,
      githubLink,
      challenges,
      improvements,
      detailedDescription,
    
   } = project;
//    techStack
//    challenges
//    improvements
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-2xl hover:shadow-transparent hover:scale-95 transition-all duration-300 ease-in-out h-full">
        <figure className="max-w-96 h-96 p-10">
          <img
            src={image}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title uppercase text-3xl">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Link to={`/project/${id}`}><button className="btn btn-primary w-full">View details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
