import { p } from "framer-motion/client";
import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const project = projects.find((project) => project.id === id);
  if (!project) {
    return <div>Project not found</div>;
  }

  const {
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

  return (
    <div className="py-40 px-3 ">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="border-8 border-blue-900 md:w-2/5 rounded-lg">
          <img src={image} alt="" />
        </div>
        <div className="md:w-3/5 flex flex-col justify-around items-center">
          <div className="">
            <div className="flex justify-between items-center ">
              <p className="uppercase font-bold text-blue-900 text-3xl">
                {name}
              </p>
              <div className="flex gap-2 text-xl">
                <a href={githubLink} target="_blank">
                  <FaGithub />
                </a>
                <a href={liveLink} target="_blank">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-blue-500">{description}</p>
              <p className="uppercase font-semibold border-b-2 ">Details </p>
              <p className="text-gray-500 leading-7 py-3">
                {detailedDescription}
              </p>
              <p className="uppercase font-semibold border-b-2 ">challenges </p>

              <p className="text-gray-500 leading-7 py-3">{challenges}</p>
              <p className="uppercase font-semibold border-b-2 ">
                improvements{" "}
              </p>

              <p className="text-gray-500 leading-7 py-3">{improvements}</p>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            {techStack.map((tech, index) => (
              <p className="badge badge-outline" key={index}>
                {tech}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
