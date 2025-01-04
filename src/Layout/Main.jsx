import React from "react";
import { Outlet } from "react-router-dom";

import AllPages from "./AllPages";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";

const Main = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-50/30 -mt-10">
      <div className="container mx-auto font-roboto">
      <Navbar></Navbar>
      {/* <AllPages></AllPages> */}
      <Outlet></Outlet>
    </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
