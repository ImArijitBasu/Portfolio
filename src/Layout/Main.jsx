import React from "react";
import { Outlet } from "react-router-dom";


import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import BackToTop from "../Components/BackToTop";
const Main = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-50/30 -mt-10">
      <div className="container mx-auto font-roboto">
        <Navbar></Navbar>
        {/* <AllPages></AllPages> */}
        <Outlet></Outlet>
        <BackToTop/>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
