import { useEffect, useState } from "react";
import logo from "../img/logo1.png";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

function Navbar() {
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
        className={`navbar ${navbarBg} text-gray-100 py-4 sm:py-6 px-4 sm:px-8 lg:px-20 flex justify-between items-center fixed w-full top-0 left-0 z-50 max-h-28 transition-background duration-700 ease-in-out`}
      >
        {/* Resto do código da navbar */}
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <a
              href="#"
              className="navbar-brand text-2xl sm:text-4xl font-semibold text-gray-900 hover:scale-105 transition-transform"
            >
              <img
                src={logo}
                alt=""
                className="w-40 hover:scale-110 transition-transform duration-700"
              />
            </a>
          </div>

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
              <button className="focus:outline-none border hover:scale-110 border-gray-200 rounded-full p-3 duration-700 transition-transform bg-hover-customBlue">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-8 h-8"
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

      <section className="h-screen bg-cover bg-center flex items-center relative bg-image">
        <div className="container lg:mx-52 md:mx-auto text-center md:text-left font-light px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-5xl text-slate-100 mb-4">
            Experiências Visuais
          </h1>
          <hr className="border-gray-300 my-6" />
          <p className="text-lg md:text-xl lg:text-1xl font-light text-slate-100 mb-8">
            Transforme seus projetos em ambientes realistas e elegantes com
            artes em 3D.
          </p>
          <div className="flex flex-col md:flex-row items-center md:space-x-4">
            <a
              href="https://api.whatsapp.com/send?phone=1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-transparent border font-normal hover:text-slate-800 hover:bg-gray-200 text-slate-100 animate-bounce-slow-mt py-3 md:py-4 lg:py-3 px-8 rounded-full transition duration-300 ease-in-out mb-4 md:mb-0"
            >
              Solicite seu projeto!{" "}
              <span className="ml-2">
                <FaWhatsapp size={30} />
              </span>
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 py-4">
          <div className="container mx-auto text-center">
            <p className="text-white text-sm tracking-wider">
              Veja nosso portfólio e descubra artes incríveis!
            </p>
          </div>
        </div>
      </section>

      <div className="fixed bottom-12 right-3 animate-bounce-slow-mt">
        <a
          href="#top"
          className=" bg-customBlue hover:bg-blue-700 border border-gray-500 text-white font-semibold py-5 px-5 rounded-full transition duration-300 ease-in-out"
        >
          <span className="text-2xl">↑</span>
        </a>
      </div>
    </>
  );
}

export default Navbar;
