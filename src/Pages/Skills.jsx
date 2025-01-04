import React from "react";

const Skills = () => {
  return (
    <div className="h-96 px-3 mb-32">
        <h1 className="text-3xl text-center font-bold uppercase border-b-4 border-violet-300 my-10 text-blue-500">
          What i do?
        </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 h-full">
        <div className="">
          <div className="hover:scale-105 hover:shadow-lg text-center border p-4 rounded-xl bg-red-100 transition duration-300 flex flex-col justify-center items-center">
            <img
              width="100"
              height="100"
              src="https://img.icons8.com/color/48/html-5--v1.png"
              alt="html-5--v1"
            />
            <p className="uppercase font-extrabold text-3xl">Html</p>
          </div>
        </div>
        <div className="hover:scale-105 hover:shadow-lg text-center border p-4 rounded-xl bg-blue-100 transition duration-300 flex flex-col justify-center items-center">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/color/48/css3.png"
            alt="css3"
          />
          <p className="uppercase font-extrabold text-3xl">css</p>
        </div>
        <div className="hover:scale-105 hover:shadow-lg text-center border p-4 rounded-xl bg-blue-200 transition duration-300 flex flex-col justify-center items-center">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/fluency/48/tailwind_css.png"
            alt="tailwind_css"
          /><p className="uppercase font-extrabold text-3xl">tailwind</p>
        </div>
        <div className="hover:scale-105 hover:shadow-lg text-center border p-4 rounded-xl bg-blue-200 transition duration-300 flex flex-col justify-center items-center">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/plasticine/100/react.png"
            alt="react"
          /><p className="uppercase font-extrabold text-3xl">react</p>
        </div>
        <div className="hover:scale-105 hover:shadow-lg text-center border p-4 rounded-xl bg-green-100 transition duration-300 flex flex-col justify-center items-center">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/fluency/48/node-js.png"
            alt="node-js"
          /><p className="uppercase font-extrabold text-3xl">node</p>
        </div>
        <div className="hover:scale-105 hover:shadow-lg text-center border p-4 rounded-xl bg-orange-100 transition duration-300 flex flex-col justify-center items-center">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/color/48/firebase.png"
            alt="firebase"
          /><p className="uppercase font-extrabold text-3xl">firebase</p>
        </div>
        <div className="hover:scale-105 hover:shadow-lg text-center border p-4 rounded-xl bg-green-100 transition duration-300 flex flex-col justify-center items-center">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/color/48/mongo-db.png"
            alt="mongo-db"
          /><p className="uppercase font-extrabold text-3xl">mongodb</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
