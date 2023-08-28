import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { instagram } from "react-icons-kit/fa/instagram";
import { whatsapp } from "react-icons-kit/fa/whatsapp";
import { envelope } from "react-icons-kit/fa/envelope";
import logo from "../img/logo.png";

const Menu = () => {
  return (
    <div className="bg-customBlue text-gray-100 flex flex-col h-screen">
      <div className="flex justify-between items-center px-8 lg:px-20">
        <div className="text-2xl font-bold">
          <img src={logo} alt="Logo do Site" className="w-32 hover:scale-110 transition-transform duration-500" />
        </div>
        <Link
          to="/"
          className="rounded-full border w-14 h-14 flex items-center hover:border-gray-600 justify-center hover:scale-110 text-white transition duration-700"
        >
          &#x2715;
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center flex-grow tracking-wider font-light">
        <Link
          to="/"
          className="text-2xl my-4 hover:text-blue-300 hover:scale-110 transition-transform duration-500"
        >
          Home
        </Link>
        <hr className="border-gray-600 w-5/6 my-2" />
        <Link
          to="/about"
          className="text-2xl my-4  hover:text-blue-300 hover:scale-110 transition-transform duration-500"
        >
          Sobre
        </Link>
        <hr className="border-gray-600 w-5/6 my-2" />
        <Link
          to="/galery"
          className="text-2xl my-4 hover:text-blue-300 hover:scale-110 transition-transform duration-500"
        >
          Galeria
        </Link>
        <hr className="border-gray-600 w-5/6 my-2" />
        <Link
          to="/contact"
          className="text-2xl my-4 hover:text-blue-300 hover:scale-110 transition-transform duration-500"
        >
          Contato
        </Link>
        <hr className="border-gray-600 w-5/6 my-2" />
      </div>
      <div className="flex justify-between p-4 bg-gray-900 bg-opacity-60 px-8 lg:px-16">
        <div className="flex flex-col space-y-1">
          <p className="text-sm">contato@oficina3d.com.br</p>
          <p className="text-sm">+55 47 3035 7470</p>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/seu_usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-400 hover:scale-125 transition-transform duration-500"
          >
            <Icon icon={instagram} size={30} />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-400 hover:scale-125 transition-transform duration-500"
          >
            <Icon icon={whatsapp} size={30} />
          </a>
          <a
            href="mailto:contato@exemplo.com"
            className="text-red-600 hover:text-red-400 hover:scale-125 transition-transform duration-500"
          >
            <Icon icon={envelope} size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;