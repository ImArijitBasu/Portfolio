import React from "react";
import {
  FaCode,
  FaPaintBrush,
  FaRocket,
  FaLaptopCode,
  FaBrain,
  FaUsers,
  FaGraduationCap,
  FaBriefcase,
  FaCalendarAlt,
} from "react-icons/fa";

const About = () => {
  const expertise = [
    {
      icon: <FaLaptopCode className="text-xl" />,
      title: "Frontend Specialist",
      desc: "Building responsive, polished interfaces with React, Next.js & modern UI practices",
    },
    {
      icon: <FaCode className="text-xl" />,
      title: "Clean Code Advocate",
      desc: "Writing maintainable, scalable code with best practices and TypeScript",
    },
    {
      icon: <FaBrain className="text-xl" />,
      title: "Problem Solver",
      desc: "Strong foundation in DSA, dynamic programming, and system design basics",
    },
    {
      icon: <FaUsers className="text-xl" />,
      title: "Collaborative Developer",
      desc: "Experience working in team environments and collaborating on production features",
    },
  ];

  const stats = [
    {
      icon: <FaBriefcase />,
      value: "Available for Work",
      label: "Current Status",
      subtext: "Open to opportunities",
    },
    {
      icon: <FaCalendarAlt />,
      value: "Internship Completed",
      label: "Recent Experience",
      subtext: "Sept - Nov 2025",
    },
    {
      icon: <FaGraduationCap />,
      value: "Diploma in CSE",
      label: "Education",
      subtext: "Barishal Polytechnic Institute",
    },
    {
      icon: <FaCode />,
      value: "4+ Projects",
      label: "Portfolio",
      subtext: "Production-ready applications",
    },
  ];

  return (
    <section id="about" className="py-24 border-t border-gray-900">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-gray-500 text-sm mb-4 tracking-wider">
            01 — ABOUT ME
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frontend-Focused{" "}
            <span className="text-gray-300">MERN Developer</span>
          </h2>
          <div className="w-24 h-0.5 bg-gray-800 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Passionate about turning Figma designs into clean, maintainable
            components and solving problems with straightforward, scalable code.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Story & Stats */}
          <div className="space-y-8">
            {/* Main Story Card */}
            <div className="border border-gray-800 rounded-2xl p-8 bg-gray-900/20">
              <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>

              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  I'm a{" "}
                  <span className="text-white font-semibold">
                    frontend-focused MERN stack developer
                  </span>{" "}
                  with hands-on experience building and shipping
                  production-ready features using{" "}
                  <span className="text-white font-semibold">
                    React, Next.js, and modern UI practices
                  </span>
                  .
                </p>

                <p className="text-gray-300 leading-relaxed">
                  I recently completed a{" "}
                  <span className="text-white font-semibold">
                    MERN Stack Developer internship at PeopleNTech Institute
                  </span>{" "}
                  (Sept-Nov 2025), where I gained practical experience working
                  with modern web technologies. My technical journey began with
                  foundational web training at{" "}
                  <span className="text-white font-semibold">
                    Programming Hero
                  </span>{" "}
                  and continues with my diploma studies in Computer Science.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  I'm comfortable creating responsive, polished interfaces,
                  integrating APIs, and managing data with modern tools. I enjoy{" "}
                  <span className="text-white font-semibold">
                    turning designs into clean components
                  </span>{" "}
                  and solving problems with efficient code.
                </p>

                <div className="pt-6 border-t border-gray-800">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <h4 className="text-lg font-bold text-white">
                      Currently Available
                    </h4>
                  </div>
                  <p className="text-gray-400">
                    I'm actively looking for frontend developer roles where I
                    can apply my skills and continue growing professionally.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`border border-gray-800 rounded-xl p-6 bg-gray-900/20 hover:border-gray-700 transition-all duration-300 ${
                    index === 0 ? "border-green-800/50 bg-green-900/5" : ""
                  }`}
                >
                  <div className="text-gray-400 mb-3">{stat.icon}</div>
                  <div
                    className={`font-bold text-lg mb-1 ${
                      index === 0 ? "text-green-400" : "text-white"
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-xs">{stat.subtext}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Expertise */}
          <div className="space-y-8">
            {/* Expertise Header */}
            <div className="border border-gray-800 rounded-2xl p-8 bg-gray-900/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                What I Excel At
              </h3>

              <div className="space-y-6">
                {expertise.map((skill, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-gray-900 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">
                          {skill.title}
                        </h4>
                        <p className="text-gray-400">{skill.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Focus */}
            <div className="border border-gray-800 rounded-2xl p-8 bg-gray-900/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Current Focus & Availability
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-800">
                  <span className="text-gray-300">Job Search Status</span>
                  <span className="text-green-400 text-sm font-medium">
                    Actively Looking
                  </span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-800">
                  <span className="text-gray-300">Technical Education</span>
                  <span className="text-gray-500 text-sm">
                    Diploma (Expected 2026)
                  </span>
                </div>

                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-300">Skill Enhancement</span>
                  <span className="text-gray-500 text-sm">
                    Programming Hero L2
                  </span>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-8 pt-6 border-t border-gray-800">
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://github.com/ImArijitBasu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-900 text-gray-300 rounded-lg hover:text-white hover:bg-gray-800 transition-colors text-sm"
                  >
                    View GitHub
                  </a>
                  <a
                    href="https://leetcode.com/u/ImArijitBasu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-900 text-gray-300 rounded-lg hover:text-white hover:bg-gray-800 transition-colors text-sm"
                  >
                    LeetCode Profile
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1PeQ4zS_2dHBO2VY9LbirPprkwmO1rMk9/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-900/20 text-green-300 rounded-lg hover:text-white hover:bg-green-800/30 transition-colors text-sm"
                  >
                    View Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Philosophy */}
        <div className="mt-16 pt-8 border-t border-gray-900">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              Ready for New Challenges
            </h3>
            <p className="text-gray-400 text-lg mb-8">
              With my internship experience completed and a strong foundation in
              modern web technologies, I'm{" "}
              <span className="text-white font-semibold">
                eager to contribute to a professional team
              </span>{" "}
              and tackle meaningful frontend challenges.
            </p>
            <div className="flex justify-center gap-6 mt-8">
              <div className="text-center">
                <div className="text-green-400 font-bold text-2xl mb-1">
                  Immediate
                </div>
                <div className="text-gray-500 text-sm">Availability</div>
              </div>
              <div className="text-center">
                <div className="text-white font-bold text-2xl mb-1">4+</div>
                <div className="text-gray-500 text-sm">Production Projects</div>
              </div>
              <div className="text-center">
                <div className="text-white font-bold text-2xl mb-1">100%</div>
                <div className="text-gray-500 text-sm">Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
