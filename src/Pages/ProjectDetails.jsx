import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProjects, setRelatedProjects] = useState([]);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch("/projects.json");

        if (!response.ok) {
          throw new Error("Failed to fetch project data");
        }

        const data = await response.json();

        // Find the specific project
        const foundProject = data.find((p) => p.id === id);

        if (!foundProject) {
          navigate("/");
          return;
        }

        setProject(foundProject);

        // Find related projects (different from current)
        const related = data.filter((p) => p.id !== id).slice(0, 3);
        setRelatedProjects(related);
      } catch (error) {
        console.error("Error loading project details:", error);
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProjectDetails();
    }
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black py-24">
        <div className="container-custom">
          <div className="animate-pulse space-y-8">
            {/* Back button skeleton */}
            <div className="h-8 bg-gray-800 rounded w-32"></div>

            {/* Title skeleton */}
            <div className="space-y-4">
              <div className="h-4 bg-gray-800 rounded w-24"></div>
              <div className="h-12 bg-gray-800 rounded w-3/4"></div>
            </div>

            {/* Image skeleton */}
            <div className="h-64 md:h-96 bg-gray-800 rounded-xl"></div>

            {/* Content skeleton */}
            <div className="space-y-4">
              <div className="h-6 bg-gray-800 rounded w-40"></div>
              <div className="h-4 bg-gray-800 rounded w-full"></div>
              <div className="h-4 bg-gray-800 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-black py-24">
        <div className="container-custom text-center">
          <div className="inline-block p-8 border border-gray-800 rounded-xl bg-gray-900/30">
            <h2 className="text-2xl font-bold text-white mb-4">
              Project Not Found
            </h2>
            <p className="text-gray-400 mb-6">
              The project you're looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              <FaArrowLeft />
              <span>Back to Projects</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Helper to categorize tech stack
  const categorizeTechStack = (techStack) => {
    const categories = {
      frontend: [],
      backend: [],
      database: [],
      tools: [],
    };

    const frontendKeywords = [
      "react",
      "vue",
      "angular",
      "next",
      "nuxt",
      "svelte",
      "javascript",
      "typescript",
      "html",
      "css",
      "tailwind",
      "bootstrap",
      "material",
    ];
    const backendKeywords = [
      "node",
      "express",
      "django",
      "flask",
      "spring",
      "laravel",
      "php",
      "python",
      "java",
      "c#",
      ".net",
      "ruby",
      "rails",
      "go",
    ];
    const databaseKeywords = [
      "mongodb",
      "mysql",
      "postgresql",
      "sqlite",
      "redis",
      "elasticsearch",
      "dynamodb",
      "cassandra",
    ];
    const toolsKeywords = [
      "git",
      "docker",
      "aws",
      "firebase",
      "azure",
      "gcp",
      "jenkins",
      "webpack",
      "vite",
      "figma",
      "photoshop",
    ];

    techStack?.forEach((tech) => {
      const techLower = tech.toLowerCase();

      if (frontendKeywords.some((keyword) => techLower.includes(keyword))) {
        categories.frontend.push(tech);
      } else if (
        backendKeywords.some((keyword) => techLower.includes(keyword))
      ) {
        categories.backend.push(tech);
      } else if (
        databaseKeywords.some((keyword) => techLower.includes(keyword))
      ) {
        categories.database.push(tech);
      } else if (toolsKeywords.some((keyword) => techLower.includes(keyword))) {
        categories.tools.push(tech);
      } else {
        categories.tools.push(tech);
      }
    });

    return categories;
  };

  const techCategories = categorizeTechStack(project.techStack);

  return (
    <div className="min-h-screen bg-black py-16">
      <div className="container-custom">
        {/* Back Navigation */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-white mb-8 group transition-colors"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <div className="text-gray-500 text-sm mb-3">PROJECT DETAILS</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {project.name}
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Main Image */}
        <div className="mb-12">
          <div className="relative rounded-2xl overflow-hidden border border-gray-800">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-64 md:h-96 object-cover"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content (2/3 width) */}
          <div className="lg:col-span-2 space-y-12">
            {/* Detailed Description */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-gray-800">
                Project Overview
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed">
                  {project.detailedDescription || project.description}
                </p>
              </div>
            </div>

            {/* Tech Stack by Categories */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-gray-800">
                Technology Stack
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {techCategories.frontend.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-300">
                      <FaCode />
                      <span className="font-medium">Frontend</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {techCategories.frontend.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-gray-900 text-gray-300 text-sm rounded-lg border border-gray-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {techCategories.backend.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-300">
                      <FaServer />
                      <span className="font-medium">Backend</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {techCategories.backend.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-gray-900 text-gray-300 text-sm rounded-lg border border-gray-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {techCategories.database.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-300">
                      <FaDatabase />
                      <span className="font-medium">Database</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {techCategories.database.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-gray-900 text-gray-300 text-sm rounded-lg border border-gray-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {techCategories.tools.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-300">
                      <FaTools />
                      <span className="font-medium">Tools & Services</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {techCategories.tools.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-gray-900 text-gray-300 text-sm rounded-lg border border-gray-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Challenges & Solutions */}
            {project.challenges && project.challenges.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-gray-800">
                  Challenges & Solutions
                </h2>
                <ul className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-gray-500 mt-1">•</span>
                      <span className="text-gray-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Future Improvements */}
            {project.improvements && project.improvements.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-gray-800">
                  Future Improvements
                </h2>
                <ul className="space-y-4">
                  {project.improvements.map((improvement, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-gray-500 mt-1">→</span>
                      <span className="text-gray-300">{improvement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar (1/3 width) */}
          <div className="space-y-8">
            {/* Project Links */}
            <div className="border border-gray-800 rounded-xl p-6 bg-gray-900/20">
              <h3 className="text-lg font-bold text-white mb-4">
                Project Links
              </h3>
              <div className="space-y-3">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors font-medium"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                )}

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-900 hover:text-white transition-colors font-medium"
                  >
                    <FaGithub />
                    <span>View Source Code</span>
                  </a>
                )}
              </div>
            </div>

            {/* Project Metadata */}
            <div className="border border-gray-800 rounded-xl p-6 bg-gray-900/20">
              <h3 className="text-lg font-bold text-white mb-4">
                Project Info
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-gray-500 text-sm mb-1">Status</div>
                  <div className="text-white font-medium">Completed</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm mb-1">Type</div>
                  <div className="text-white font-medium">Web Application</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm mb-1">Technologies</div>
                  <div className="text-white font-medium">
                    {project.techStack?.length || 0} used
                  </div>
                </div>
              </div>
            </div>

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
              <div className="border border-gray-800 rounded-xl p-6 bg-gray-900/20">
                <h3 className="text-lg font-bold text-white mb-4">
                  Related Projects
                </h3>
                <div className="space-y-4">
                  {relatedProjects.map((relatedProject) => (
                    <Link
                      key={relatedProject.id}
                      to={`/project/${relatedProject.id}`}
                      className="block p-3 border border-gray-800 rounded-lg hover:border-gray-700 hover:bg-gray-900/30 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded overflow-hidden flex-shrink-0">
                          <img
                            src={relatedProject.image}
                            alt={relatedProject.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-white font-medium group-hover:text-gray-300 transition-colors">
                            {relatedProject.name}
                          </div>
                          <div className="text-gray-500 text-sm truncate">
                            {relatedProject.techStack?.slice(0, 2).join(", ")}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
