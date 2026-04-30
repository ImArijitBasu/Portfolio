import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn, FaArrowDown, FaDownload } from "react-icons/fa";
import { FaFacebook} from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { SiLeetcode } from "react-icons/si";

const Banner = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      icon: <FaFacebook />,
      href: "https://www.facebook.com/originaljit",
      label: "Facebook",
      color: "hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/30"
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/ImArijitBasu",
      label: "GitHub",
      color: "hover:bg-white/10 hover:text-white hover:border-white/30"
    },
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/arijit-basu-606626310/",
      label: "LinkedIn",
      color: "hover:bg-blue-600/10 hover:text-blue-400 hover:border-blue-600/30"
    },
    {
      icon: <SiLeetcode/>,
      href: "https://leetcode.com/u/ImArijitBasu",
      label: "LeetCode",
      color: "hover:bg-yellow-500/10 hover:text-yellow-400 hover:border-yellow-500/30"
    }
  ];

  const techStack = ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "Tailwind"];

  return (
    <div id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          style={{
            transform: `translate(${-mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Welcome Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/50 border border-gray-800 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-400 text-sm font-medium">
                FRONTEND DEVELOPER
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <div className="mb-4">
                <span className="text-gray-500 text-lg font-medium">Hi, I'm</span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 leading-tight">
                <span className="block text-white">Arijit</span>
                <span className="block text-gray-300">Basu</span>
              </h1>
              
              {/* Typewriter Effect */}
              <div className="h-10 mb-6">
                <span className="text-2xl text-gray-400">
                  <Typewriter
                    words={['Frontend Developer', 'MERN Stack Developer', 'React Specialist', 'Problem Solver']}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Building responsive web applications with modern technologies. 
              Passionate about clean code and intuitive user interfaces.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1.5 bg-gray-900 text-gray-300 text-sm rounded-lg border border-gray-800 hover:border-gray-700 transition-all"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/file/d/1PeQ4zS_2dHBO2VY9LbirPprkwmO1rMk9/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-3.5 bg-white text-black font-semibold rounded-lg overflow-hidden"
              >
                <span className="relative flex items-center justify-center gap-2">
                  <FaDownload className="group-hover:animate-bounce" />
                  <span>Download Resume</span>
                </span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToAbout}
                className="px-8 py-3.5 border border-gray-700 text-gray-300 font-semibold rounded-lg hover:border-gray-600 hover:text-white transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore More</span>
                <FaArrowDown className="group-hover:animate-bounce" />
              </motion.button>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <div className="text-gray-500 text-sm mb-4">Connect with me</div>
              <div className="flex items-center gap-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 rounded-lg border border-gray-800 flex items-center justify-center text-gray-400 transition-all ${link.color}`}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border border-gray-800 rounded-full opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-gray-800 rounded-full opacity-30"></div>
              
              {/* Main Container */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6">
                {/* Image Container */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative w-64 h-64 md:w-72 md:h-72 mx-auto"
                >
                  {/* Glow Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-gray-700/20 to-transparent rounded-full blur-xl opacity-50"></div>
                  
                  {/* Image */}
                  <div className="relative w-full h-full overflow-hidden rounded-full border-2 border-gray-800">
                    <img
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      src="/myImage.png"
                      alt="Arijit Basu - Frontend Developer"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  
                  {/* Decorative Dots */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gray-700 rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gray-700 rounded-full"></div>
                </motion.div>

                {/* Info Cards */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="p-4 bg-gray-900/50 rounded-xl border border-gray-800"
                  >
                    <div className="text-gray-500 text-xs mb-1">Location</div>
                    <div className="text-white font-semibold">Dhaka, BD</div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="p-4 bg-gray-900/50 rounded-xl border border-gray-800"
                  >
                    <div className="text-gray-500 text-xs mb-1">Status</div>
                    <div className="text-white font-semibold">Available</div>
                  </motion.div>
                </div>

                {/* Current Role */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-6 p-4 bg-black/50 rounded-xl border border-gray-800"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-gray-400 text-sm">Current Role</div>
                      <div className="text-white font-semibold">Unemployed !</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-xs">Open to Work</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="text-gray-500 text-xs tracking-widest">SCROLL</div>
            <div className="w-px h-10 bg-gradient-to-b from-gray-600 via-gray-400 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;