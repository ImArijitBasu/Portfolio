import React, { useEffect, useState } from "react";
import Project from "../Components/Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/projects.json");

        if (!response.ok) {
          throw new Error(`Failed to load projects: ${response.status}`);
        }

        const data = await response.json();

        // Validate data is an array
        if (!Array.isArray(data)) {
          throw new Error("Invalid data format: Expected an array");
        }

        // Transform data to ensure all required fields
        const transformedProjects = data.map((proj) => ({
          ...proj,
          id: proj.id || `project-${Math.random().toString(36).substr(2, 9)}`,
          name: proj.name || "Unnamed Project",
          image:
            proj.image ||
            "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          description: proj.description || "No description available.",
          techStack: Array.isArray(proj.techStack) ? proj.techStack : [],
        }));

        setProjects(transformedProjects);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError(err.message);
        // Fallback to sample data
        setProjects(getSampleProjects());
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Sample projects for fallback
  const getSampleProjects = () => [
    {
      id: "1",
      name: "Urban Shelter",
      image: "https://i.ibb.co/kgDd4k0X/urban-shelter-building-web-app-1.png",
      description:
        "A building rent management system streamlining landlord-tenant interactions.",
      techStack: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB"],
      liveLink: "https://urban-shelter-building.web.app/",
      githubLink: "https://github.com/ImArijitBasu/Urban_Shelter-client",
      challenges: [
        "Implementing role-based access control for landlords and tenants.",
        "Developing a secure and efficient rent payment system.",
      ],
      improvements: [
        "Integrate automated payment reminders for tenants.",
        "Enhance the dashboard with real-time rent tracking and analytics.",
      ],
      detailedDescription:
        "Urban Shelter is a comprehensive building rent management system that allows landlords to manage their properties efficiently while enabling tenants to pay rent seamlessly. The platform features a secure authentication system, an intuitive dashboard, and a responsive design for a smooth user experience across devices.",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-black">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gray-500 text-sm tracking-wider mb-2 block">
            03 — PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-gray-300">Projects</span>
          </h2>
          <div className="w-20 h-0.5 bg-gray-800 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my recent work and personal projects
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 animate-pulse"
              >
                <div className="h-48 bg-gray-800 rounded mb-4"></div>
                <div className="h-6 bg-gray-800 rounded mb-3 w-3/4"></div>
                <div className="h-4 bg-gray-800 rounded mb-2"></div>
                <div className="h-4 bg-gray-800 rounded mb-4 w-1/2"></div>
                <div className="h-10 bg-gray-800 rounded"></div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-12">
            <div className="inline-block p-4 border border-red-800 bg-red-900/20 rounded-lg mb-6">
              <p className="text-red-400 font-medium mb-2">
                Error Loading Projects
              </p>
              <p className="text-gray-400 text-sm">{error}</p>
            </div>
            <p className="text-gray-500 mb-8">
              Showing sample projects instead:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getSampleProjects().map((project) => (
                <Project key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* Success State */}
        {!loading && !error && projects.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Project key={project.id} project={project} />
              ))}
            </div>

            {/* Stats */}
            <div className="mt-16 pt-8 border-t border-gray-900">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                  <div className="text-3xl font-bold text-white mb-1">
                    {projects.length}
                  </div>
                  <div className="text-gray-500 text-sm">Total Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">
                    {projects.reduce(
                      (count, proj) => count + (proj.techStack?.length || 0),
                      0,
                    )}
                  </div>
                  <div className="text-gray-500 text-sm">Technologies Used</div>
                </div>
                <div className="text-center md:text-right">
                  <a
                    href="https://github.com/ImArijitBasu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300"
                  >
                    <span>View All on GitHub</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Empty State */}
        {!loading && !error && projects.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-block p-8 border border-gray-800 rounded-xl bg-gray-900/30">
              <div className="text-5xl mb-4">📁</div>
              <h3 className="text-xl font-bold text-white mb-2">
                No Projects Found
              </h3>
              <p className="text-gray-400 mb-6">
                Projects will be displayed here once added.
              </p>
              <a
                href="https://github.com/ImArijitBasu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Check GitHub for Projects
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
