import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaCss3Alt,
  FaGitAlt,
  FaDatabase,
  FaAws,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiPostman,
  SiFigma,
  SiPostgresql,
  SiPrisma,
  SiFramer,
  SiStripe,
  SiZod,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const Skills = () => {
  // Actual skills from your resume
  const skills = [
    {
      category: "Frontend",
      icon: <FaReact className="text-2xl text-blue-500" />,
      items: [
        { name: "React.js", level: 90, icon: <FaReact /> },
        { name: "Next.js", level: 85, icon: <SiNextdotjs /> },
        { name: "JavaScript (ES6+)", level: 90, icon: <FaJs /> },
        { name: "TypeScript", level: 80, icon: <SiTypescript /> },
        { name: "Tailwind CSS", level: 95, icon: <SiTailwindcss /> },
        { name: "Framer Motion", level: 85, icon: <SiFramer /> },
        { name: "Responsive UI", level: 95, icon: <FaCss3Alt /> },
      ],
    },
    {
      category: "Backend",
      icon: <FaNodeJs className="text-2xl text-green-500" />,
      items: [
        { name: "Node.js", level: 85, icon: <FaNodeJs /> },
        { name: "Express.js", level: 80, icon: <SiExpress /> },
        { name: "Prisma ORM", level: 80, icon: <SiPrisma /> },
        { name: "JWT Authentication", level: 85, icon: <FaDatabase /> },
        { name: "REST API Development", level: 85, icon: <FaNodeJs /> },
      ],
    },
    {
      category: "Database & Auth",
      icon: <FaDatabase className="text-2xl text-purple-500" />,
      items: [
        { name: "PostgreSQL", level: 90, icon: <SiPostgresql /> },
        { name: "MongoDB", level: 80, icon: <SiMongodb /> },
        { name: "Mongoose", level: 75, icon: <FaDatabase /> },
        { name: "Firebase Auth", level: 85, icon: <SiFirebase /> },
        { name: "Firebase", level: 80, icon: <SiFirebase /> },
      ],
    },
    {
      category: "Tools & Others",
      icon: <FaGitAlt className="text-2xl text-orange-500" />,
      items: [
        { name: "Git & GitHub", level: 90, icon: <FaGitAlt /> },
        { name: "VS Code", level: 95, icon: <TbBrandVscode /> },
        { name: "Postman", level: 85, icon: <SiPostman /> },
        { name: "Stripe", level: 75, icon: <SiStripe /> },
        { name: "Zod", level: 85, icon: <SiZod /> },
        { name: "Figma", level: 70, icon: <SiFigma /> },
      ],
    },
    {
      category: "Special Interests",
      icon: <FaAws className="text-2xl text-yellow-500" />,
      items: [
        { name: "Data Structures & Algorithms", level: 75 },
        { name: "Dynamic Programming", level: 70 },
        { name: "System Design Basics", level: 65 },
        { name: "Penetration Testing", level: 60 },
        { name: "UI/UX Design Principles", level: 70 },
        { name: "Performance Optimization", level: 75 },
      ],
    },
  ];

  // Languages from your resume
  const languages = [
    { name: "Bangla", proficiency: "Native", level: 100 },
    { name: "English", proficiency: "Fluent", level: 85 },
    { name: "Hindi", proficiency: "Intermediate", level: 60 },
  ];

  const certifications = [
    {
      issuer: "Programming Hero",
      title: "Complete Web Development - L1",
      description: "HTML, CSS, JavaScript, React, Backend",
      statusText: "2024 • Completed",
      isOngoing: false,
    },
    {
      issuer: "Programming Hero",
      title: "Next Level Web Dev - L2",
      description: "Next.js, TypeScript, Advanced Patterns",
      statusText: "2025 • Ongoing",
      isOngoing: true,
    },
    {
      issuer: "Simplilearn",
      title: "TypeScript Basics",
      description: "Types, Interfaces, Generics, React",
      statusText: "2024 • Completed",
      isOngoing: false,
    },
    {
      issuer: "Simplilearn",
      title: "Getting Started with NodeJS",
      description: "Modules, Express, REST APIs",
      statusText: "2024 • Completed",
      isOngoing: false,
    },
  ];

  return (
    <section id="skills" className="py-24 border-t border-gray-900">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-gray-500 text-sm mb-4 tracking-wider">
            02 — SKILLS & TECHNOLOGIES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-gray-300">Expertise</span>
          </h2>
          <div className="w-24 h-0.5 bg-gray-800 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My toolkit for building modern, scalable web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skillCategory, index) => (
            <div
              key={index}
              className="card-dark p-8 rounded-lg hover:border-gray-700 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-gray-900/50 group-hover:scale-110 transition-transform duration-300">
                  {skillCategory.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {skillCategory.category}
                </h3>
              </div>

              <div className="space-y-4">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {skill.icon && (
                          <span className="text-gray-500">{skill.icon}</span>
                        )}
                        <span className="text-gray-300 font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-gray-500 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-gray-700 to-gray-400 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animation: "slideIn 1s ease-out",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-4">Languages</h3>
            <p className="text-gray-400">
              Communication abilities for global collaboration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {languages.map((language, index) => (
              <div
                key={index}
                className="card-dark p-6 rounded-lg hover:border-gray-700 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-white">
                    {language.name}
                  </h4>
                  <span className="text-gray-400 text-sm">
                    {language.proficiency}
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-gray-600 to-gray-300 rounded-full"
                    style={{ width: `${language.level}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-gray-500 text-xs">Basic</span>
                  <span className="text-gray-500 text-xs">Native</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Certifications
            </h3>
            <p className="text-gray-400">
              Professional credentials and continuous learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="card-dark p-6 rounded-lg hover:border-gray-700 transition-all duration-300"
              >
                <div className="text-gray-500 text-sm mb-2">{cert.issuer}</div>
                <h4 className="text-white font-bold mb-2">
                  {cert.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  {cert.description}
                </p>
                {cert.isOngoing ? (
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-xs">●</span>
                    <span className="text-gray-500 text-xs">{cert.statusText}</span>
                  </div>
                ) : (
                  <div className="text-gray-500 text-xs">{cert.statusText}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Summary */}
        <div className="mt-16 pt-8 border-t border-gray-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-3xl font-bold text-white mb-1">15+</div>
              <div className="text-gray-500 text-sm">Technologies Mastered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">4</div>
              <div className="text-gray-500 text-sm">Certifications Earned</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">3</div>
              <div className="text-gray-500 text-sm">Languages</div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-gray-500 text-sm">Continuous Learning</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
          to {
            width: var(--skill-level);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;