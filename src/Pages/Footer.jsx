import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-blue-100">
      <footer className="container mx-auto footer bg-blue-100 text-blue-900 items-center p-4">
        <aside className="grid-flow-col items-center">
          <img src="/logo.png" width={'50px'} alt="" />
          <p>Copyright © {new Date().getFullYear()} - All right reserved by ARIJIT BASU</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="https://www.facebook.com/originaljit" className="text-2xl" target="_blank">
            <FaFacebook></FaFacebook>
          </a>
          <a href="https://github.com/ImArijitBasu" className="text-2xl" target="_blank">
            <FaGithub></FaGithub>
          </a>
          <a href="https://www.linkedin.com/in/arijit-basu-606626310/" className="text-2xl" target="_blank">
            <FaLinkedin></FaLinkedin>
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
