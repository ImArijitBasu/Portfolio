import React from "react";
import Navbar from "../Pages/Navbar";
import Banner from "../Pages/Banner";
import About from "../Pages/About";
import SkillSet from "../Pages/SkillSet";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";
const AllPages = () => {
  return (
      <div className="mt-10">
        <div id="home">
          <Banner></Banner>
        </div>
        <div id="about">
          <About></About>
        </div>
        <div id="skills">
          <SkillSet></SkillSet>
        </div>
        <div id="projects">
          <Projects></Projects>
        </div>
        <div id="projects">
          <Contact></Contact>
        </div>
      </div>
  );
};

export default AllPages;
