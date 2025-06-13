import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navButtons = (
    <>
      <li>
        <a
          href="#home"
          className={` text-xl font-bold  ${
            isScrolled
              ? " text-black hover:text-blue-500"
              : " text-white hover:text-red-500"
          } transition-all duration-300 px-5 mx-1`}
        >
          <Link to="/">Home</Link>
        </a>
      </li>
      <li>
        <a
          href="#about"
          className={` text-xl font-bold  ${
            isScrolled
              ? " text-black hover:text-blue-500"
              : " text-white hover:text-red-500"
          } transition-all duration-300 px-5 mx-1`}
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#skills"
          className={` text-xl font-bold  ${
            isScrolled
              ? " text-black hover:text-blue-500"
              : " text-white hover:text-red-500"
          } transition-all duration-300 px-5 mx-1`}
        >
          Skills
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className={` text-xl font-bold  ${
            isScrolled
              ? " text-black hover:text-blue-500"
              : " text-white hover:text-red-500"
          } transition-all duration-300 px-5 mx-1`}
        >
          Projects
        </a>
      </li>
    </>
  );

  return (
    <div>
      <div
        className={`navbar backdrop-blur-lg border-b-2 border-r-8 border-r-transparent border-b-blue-700 sm:border-transparent md:border-transparent lg:border-blue-700 md:rounded-r-full lg:rounded-r-full fixed top-0 left-0 container gap-12 z-10 max-w-fit sm:max-w-full md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl ${
          isScrolled
            ? "bg-blue-100 bg-opacity-50 mt-0"
            : "bg-blue-700 text-white mt-1"
        } transition-all duration-300`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content ${isScrolled ? "bg-blue-100":"bg-blue-700"} rounded-b-box z-[1] mt-3 w-52 p-2 shadow`}
            >
              {navButtons}
            </ul>
          </div>

          <h1 className="uppercase font-extrabold text-4xl">
            ar<span className="text-red-500">i</span>jit
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navButtons}</ul>
        </div>
        <div className="justify-end sm:w-fit md:w-1/2">
          <a
            href="https://drive.google.com/file/d/1PeQ4zS_2dHBO2VY9LbirPprkwmO1rMk9/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className={`rounded-2xl border-2 border-dashed border-black px-6 py-3 font-semibold uppercase transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none ${
                isScrolled
                  ? "text-black bg-transparent"
                  : "text-blue-700 bg-blue-100"
              }`}
            >
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
