import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar";

const Main = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="pt-16">
        {" "}
        {/* Adjust based on navbar height */}
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
