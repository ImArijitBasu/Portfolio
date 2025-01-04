import React from "react";
import { FaCode, FaTools } from "react-icons/fa";
import { GoDatabase } from "react-icons/go";

const SkillSet = () => {
  return (
    <div>
      <div className="text-center font-bold text-4xl uppercase border-y-8 border-blue-900">
        skills
      </div>
      <div className="bg-gradient-to-tr from-blue-500 to-cyan-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 py-28 gap-5 rounded-b-xl mt-2 ">
        {/* frontend  */}
        <div className="h-full w-full hover:bg-gradient-to-tr from-blue-500 to-cyan-300 transition-all duration-300 ease-in-out rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-blue-900 p-2 hover:border-cyan-500">
          <div className="text-white flex justify-around items-center mb-5">
            <div className="text-4xl text-blue-500 transition-all duration-300 ease-in-out group-hover:text-cyan-300">
              <FaCode />
            </div>
            <p className="uppercase text-2xl font-bold transition-all duration-300 ease-in-out hover:text-cyan-300">
              front end development
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="badge bg-transparent p-3 text-white uppercase min-w-32 max-w-full flex-1 transition-colors duration-300 ease-in-out hover:text-cyan-300">
              HTML5
            </div>
            <div className="badge bg-transparent p-3 text-white uppercase min-w-32 max-w-full flex-1 transition-colors duration-300 ease-in-out hover:text-cyan-300">
              CSS3
            </div>
            <div className="badge bg-transparent p-3 text-white uppercase min-w-32 max-w-full flex-1 transition-colors duration-300 ease-in-out hover:text-cyan-300">
              Tailwind CSS
            </div>
            <div className="badge bg-transparent p-3 text-white uppercase min-w-32 max-w-full flex-1 transition-colors duration-300 ease-in-out hover:text-cyan-300">
              React
            </div>
            <div className="badge bg-transparent p-3 text-white uppercase min-w-32 max-w-full flex-1 transition-colors duration-300 ease-in-out hover:text-cyan-300">
              Bootstrap
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="h-full w-full hover:bg-gradient-to-tr from-blue-500 to-cyan-300 transition-all duration-300 ease-in-out rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-blue-900 p-2 hover:border-cyan-500">
          <div className="text-white flex justify-around items-center mb-5">
            <div className="text-4xl text-blue-500 transition-all duration-300 ease-in-out hover:text-cyan-300">
              <GoDatabase />
            </div>
            <p className="uppercase text-2xl font-bold transition-all duration-300 ease-in-out hover:text-cyan-300">
              back end development
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="badge bg-transparent p-3 text-white uppercase min-w-32 max-w-full flex-1 transition-colors duration-300 ease-in-out hover:text-cyan-300">
              node.js
            </div>
            <div className="badge bg-transparent p-3 text-white uppercase min-w-32 max-w-full flex-1 transition-colors duration-300 ease-in-out hover:text-cyan-300">
              mongodb
            </div>
            <div className="badge bg-transparent p-3 text-white uppercase min-w-32 max-w-full flex-1 transition-colors duration-300 ease-in-out hover:text-cyan-300">
              rest api
            </div>
            <div className="badge bg-transparent p-3 text-white uppercase min-w-32 max-w-full flex-1 transition-colors duration-300 ease-in-out hover:text-cyan-300">
              express js
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="h-full w-full hover:bg-gradient-to-tr from-blue-500 to-cyan-300 transition-all duration-300 ease-in-out rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-blue-900 p-2 hover:border-cyan-500">
          <div className="text-white flex justify-around items-center mb-5">
            <div className="text-4xl text-blue-500 transition-all duration-300 ease-in-out hover:text-cyan-300">
              <FaTools />
            </div>
            <p className="uppercase text-2xl font-bold transition-all duration-300 ease-in-out hover:text-cyan-300">
              tools & technologies
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="badge bg-transparent p-3 text-white uppercase min-w-32 max-w-full flex-1 transition-colors duration-300 ease-in-out hover:text-cyan-300">
              vs code
            </div>
            <div className="badge bg-transparent p-3 text-white uppercase min-w-32 max-w-full flex-1 transition-colors duration-300 ease-in-out hover:text-cyan-300">
              firebase
            </div>
            <div className="badge bg-transparent p-3 text-white uppercase min-w-32 max-w-full flex-1 transition-colors duration-300 ease-in-out hover:text-cyan-300">
              jwt
            </div>
            <div className="badge bg-transparent p-3 text-white uppercase min-w-32 max-w-full flex-1 transition-colors duration-300 ease-in-out hover:text-cyan-300">
              vite
            </div>
            <div className="badge bg-transparent p-3 text-white uppercase min-w-32 max-w-full flex-1 transition-colors duration-300 ease-in-out hover:text-cyan-300">
              daisy ui
            </div>
            <div className="badge bg-transparent p-3 text-white uppercase min-w-32 max-w-full flex-1 transition-colors duration-300 ease-in-out hover:text-cyan-300">
              git & github
            </div>
            <div className="badge bg-transparent p-3 text-white uppercase min-w-32 max-w-full flex-1 transition-colors duration-300 ease-in-out hover:text-cyan-300">
              responsive design
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
