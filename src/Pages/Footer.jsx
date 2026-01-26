import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-900">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Arijit Basu. All rights reserved.
          </div>
          <div className="text-gray-500 text-sm">
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
