import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [navbarBg, setNavbarBg] = useState("bg-transparent");

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavbarBg("bg-customBlue");
    } else {
      setNavbarBg("bg-transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`navbar ${navbarBg} text-gray-100 py-4 sm:py-6 px-4 sm:px-8 lg:px-20 flex justify-between items-center fixed w-full top-0 left-0 z-50 max-h-28  transition-background duration-700 ease-in-out`}
      >
        {/* Resto do código da navbar */}
        <div className="container mx-auto flex justify-end items-center">
          {/* Mobile Menu Content */}
          <div className="lg:hidden animate-bounce-slow-mt">
            <button
              onClick={toggleMobileMenu}
              className={`navbar-toggler ${
                isMobileMenuOpen ? "active" : ""
              } p-2 focus:outline-none focus:ring`}
            >
              <Link to="/menu">
                <button className="focus:outline-none border-solid border border-gray-200 rounded-full p-3 hover:scale-105 transition-transform bg-hover-customBlue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4.75a.75.75 0 000 1.5h14a.75.75 0 000-1.5H3zm0 5a.75.75 0 000 1.5h14a.75.75 0 000-1.5H3zm0 5a.75.75 0 000 1.5h14a.75.75 0 000-1.5H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Link>
            </button>
          </div>

          {/* Desktop Menu */}

          <div className="hidden lg:flex items-center space-x-5 text-gray-100 ">
            <p className="text-lg hover:scale-110 transition-transform tracking-widest">
              PT
            </p>
            <span className="text-3xl font-extralight">|</span>
            <p className="text-lg hover:scale-110 transition-transform tracking-widest">
              EN
            </p>
            <Link to="/menu">
              <button className="focus:outline-none border-solid border hover:scale-110 border-gray-200 rounded-full p-3 duration-700 transition-transform bg-hover-customBlue">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4.75a.75.75 0 000 1.5h14a.75.75 0 000-1.5H3zm0 5a.75.75 0 000 1.5h14a.75.75 0 000-1.5H3zm0 5a.75.75 0 000 1.5h14a.75.75 0 000-1.5H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;