import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Banner = () => {
  return (
    <div>
      <div className="flex border-r-8 flex-col md:flex-row justify-center items-center pt-24 lg:rounded-none border-blue-700 min-h-[800px] h-screen">
        <div className="flex flex-col md:w-1/2 justify-center items-start pl-2 md:pl-10 space-y-3">
          <h1 className="capitalize text-blue-900 font-extrabold text-5xl">
            <span className="text-blue-500">MERN</span> stack developer
          </h1>
          <h3 className="capitalize text-blue-500 text-lg">
            front end specialist
          </h3>
          <div className="flex flex-row gap-2">
            <a
              href="https://www.facebook.com/originaljit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn bg-blue-900 text-white rounded-full hover:bg-orange-500">
                <FaFacebook />
              </button>
            </a>

            <a
              href="https://github.com/ImArijitBasu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn bg-gray-500 text-white rounded-full hover:bg-orange-500">
                <FaGithub />
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/arijit-basu-606626310/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn bg-blue-600 text-white rounded-full hover:bg-orange-500">
                <FaLinkedinIn />
              </button>
            </a>
          </div>
          <div className="">
            {" "}
            <a
              href="https://drive.google.com/file/d/1PeQ4zS_2dHBO2VY9LbirPprkwmO1rMk9/view?usp=drive_link"
              target="_blank"
              download
              rel="noopener noreferrer"
            >
              <button className="rounded-2xl border-2 border-dashed border-black bg-transparent px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                Download Resume
              </button>
            </a>
          </div>
        </div>
        <div className="md:w-1/2 border-b-8 rounded-3xl lg:rounded-bl-full bg-gradient-to-t from-blue-500 via-transparent to-transparent border-orange-300 overflow-hidden mt-10 lg:mt-0">
          <div className="w-96 h-96 border-b-4 border-blue-300 hover:border-blue-700 ease-linear rounded-full overflow-hidden flex items-center justify-center group transform rotate-45 bg-gradient-to-t from-blue-300  to-blue-100 hover:via-blue-200 hover:pt-2 transition-all duration-200">
            <img
              className="w-[87%] transition-transform duration-300 ease-in-out scale-100 group-hover:scale-110 transform -rotate-45"
              src="/myImage.png"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
