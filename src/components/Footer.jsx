import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-900 text-white text-center">
      <p>&copy; {new Date().getFullYear()} JP. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
