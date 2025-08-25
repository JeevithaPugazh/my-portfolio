import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation, useNavigate} from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi"; // Import hamburger icon

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(
    window.scrollY
  );
  const [visible, setVisible] = useState(true);
  // State for hamburger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp =
        prevScrollPos > currentScrollPos;

      setVisible(isScrollingUp || currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleNavClick = (section) => {
    navigate("/");
    setTimeout(() => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  };

  return (
    <nav
      className={`z-20 p-4 bg-gray-900 text-white flex justify-between items-center fixed w-full transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo or Title */}
      <div className="text-xl font-bold">
        <Link to="/">JP</Link>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex space-x-6">
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer px-4 py-2 rounded-full border border-transparent hover:border-white hover:bg-white/10 transition-all duration-300"
          onClick={() => handleNavClick("projects")}
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="skills"
          smooth={true}
          duration={500}
          className="cursor-pointer px-4 py-2 rounded-full border border-transparent hover:border-white hover:bg-white/10 transition-all duration-300"
          onClick={() => handleNavClick("skills")}
        >
          Skills
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer px-4 py-2 rounded-full border border-transparent hover:border-white hover:bg-white/10 transition-all duration-300"
          onClick={() => handleNavClick("contact")}
        >
          Contact
        </ScrollLink>
        <Link
          to="/aboutMe"
          className="cursor-pointer px-4 py-2 rounded-full border border-transparent hover:border-white hover:bg-white/10 transition-all duration-300"
        >
          About Me
        </Link>
        <a
          href="https://github.com/JeevithaPugazh/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-transparent hover:border-white hover:bg-white/10 transition-all duration-300"
        >
          <FaGithub />
          GitHub
        </a>
        <a
          href="https://drive.google.com/file/d/1__jFwOAL7k_wWWLeupKC0iXD76iYU5Ze/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-transparent hover:border-white hover:bg-white/10 transition-all duration-300"
        >
          <HiOutlineDocumentText />
          Resume
        </a>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <GiHamburgerMenu
          className="text-3xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-gray-900 text-white md:hidden p-6 space-y-4`}
      >
        <Link
          to="/"
          className="cursor-pointer block px-4 py-2 rounded-full border border-transparent hover:border-white hover:bg-white/10 transition-all duration-300"
          onClick={() => {
            setIsMenuOpen(false);
            setTimeout(() => {
              const sectionElement = document.getElementById("projects");
              if (sectionElement) {
                sectionElement.scrollIntoView({ behavior: "smooth" });
              }
            }, 500);
          }}
        >
          Projects
        </Link>
        <Link
          to="/"
          className="cursor-pointer block px-4 py-2 rounded-full border border-transparent hover:border-white hover:bg-white/10 transition-all duration-300"
          onClick={() => {
            setIsMenuOpen(false);
            setTimeout(() => {
              const sectionElement = document.getElementById("skills");
              if (sectionElement) {
                sectionElement.scrollIntoView({ behavior: "smooth" });
              }
            }, 500);
          }}
        >
          Skills
        </Link>
        <Link
          to="/"
          className="cursor-pointer block px-4 py-2 rounded-full border border-transparent hover:border-white hover:bg-white/10 transition-all duration-300"
          onClick={() => {
            setIsMenuOpen(false);
            setTimeout(() => {
              const sectionElement = document.getElementById("contact");
              if (sectionElement) {
                sectionElement.scrollIntoView({ behavior: "smooth" });
              }
            }, 500);
          }}
        >
          Contact
        </Link>
        <Link
          to="/aboutMe"
          className="cursor-pointer block px-4 py-2 rounded-full border border-transparent hover:border-white hover:bg-white/10 transition-all duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          About Me
        </Link>
        <a
          href="https://github.com/JeevithaPugazh/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-transparent hover:border-white hover:bg-white/10 transition-all duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          <FaGithub />
          GitHub
        </a>
        <a
          href="https://drive.google.com/file/d/1__jFwOAL7k_wWWLeupKC0iXD76iYU5Ze/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-transparent hover:border-white hover:bg-white/10 transition-all duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          <HiOutlineDocumentText />
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
