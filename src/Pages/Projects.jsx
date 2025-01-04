import React, { useEffect, useState } from "react";
import Project from "../Components/Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);
  return (
    <div className="bg-blue-50 p-10 hover:shadow-sm">
      <div className="text-center my-10 py-4 font-bold text-4xl uppercase border-y-8 border-blue-900">
        Projects
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <Project project={project}></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
