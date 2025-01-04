import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navButtons = (
    <>
      <li>
        <Link to={'/'}><a href="#home" className="text-black hover:text-blue-500">
          Home
        </a></Link>
      </li>
      <li>
        <a href="#about" className="text-black hover:text-blue-500">
          About
        </a>
      </li>
      <li>
        <a href="#skills" className="text-black hover:text-blue-500">
          Skills
        </a>
      </li>
      <li>
        <a href="#projects" className="text-black hover:text-blue-500">
          Projects
        </a>
      </li>
    </>
  );

  return (
    <div>
     <div className="navbar bg-blue-100 bg-opacity-50 backdrop-blur-lg border-b-2 border-r-8 border-blue-700 fixed top-0 container mx-auto z-10">
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
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        {navButtons}
      </ul>
    </div>

    <img width="100px" className="object-fill" src="/logo.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">{navButtons}</ul>
  </div>
  <div className="navbar-end">
    <a
      href="https://drive.google.com/file/d/1_Shs75NiN06ghalA79tWExKZHZWXosFG/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="rounded-2xl border-2 border-dashed border-black bg-transparent px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
        Resume
      </button>
    </a>
  </div>
</div>

    </div>
  );
};

export default Navbar;
