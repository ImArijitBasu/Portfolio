
import About from "../Pages/About";
// import Portfolio from "../Pages/Portfolio";
import Skills from "../Pages/Skills";
import Contact from "../Pages/Contact";
import Footer from "../Pages/Footer";
import Banner from "../Pages/Banner";
import Projects from "../Pages/Projects";

const AllPages = () => {
  return (
    <div className="bg-black">
      {/* <Home /> */}
      {/* <div className="border-t border-gray-900"></div> */}
      <Banner />
      <div className="border-t border-gray-900"></div>
      <About />
      <div className="border-t border-gray-900"></div>
      {/* <Portfolio /> */}
      <Skills />
      <div className="border-t border-gray-900"></div>
      <Projects/>
      <div className="border-t border-gray-900"></div>
      <Contact />
      <Footer />
    </div>
  );
};

export default AllPages;
