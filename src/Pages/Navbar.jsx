import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-black/95 backdrop-blur-sm border-b border-gray-900"
          : "py-4 bg-black"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-xl font-bold"
          >
            <span className="text-white">ARIJIT</span>
            <span className="text-gray-500">.</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300 uppercase tracking-wide"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://github.com/ImArijitBasu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/arijit-basu-055060266/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}

        <div
          className={`fixed top-0 right-0 h-full w-64 bg-black border-l border-gray-900 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <span className="text-white font-bold">MENU</span>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white"
              >
                <FaTimes />
              </button>
            </div>

            <div className="flex-1 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                    setIsOpen(false);
                  }}
                  className="block py-3 text-gray-400 hover:text-white text-sm uppercase tracking-wide border-b border-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-900">
              <div className="flex space-x-4">
                <a
                  href="https://github.com/ImArijitBasu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-white"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/arijit-basu-055060266/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-white"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
