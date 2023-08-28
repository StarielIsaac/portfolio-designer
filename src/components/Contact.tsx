import { Icon } from "react-icons-kit";
import { instagram } from "react-icons-kit/fa/instagram";
import { whatsapp } from "react-icons-kit/fa/whatsapp";
import { envelope } from "react-icons-kit/fa/envelope";

function Contact() {
  return (
    <>
      <section className="bg-ligthBlue py-20 px-4 sm:px-8 md:px-16 lg:px-28">
  <div className="flex flex-col items-center md:flex-row justify-between">
    <p className="text-4xl text-white font-light mb-4 md:mb-0">
      Você tem um projeto?
    </p>
    <a 
    className="font-mono bg-transparent hover:bg-gray-200 border hover:text-customBlue animate-bounce-slow-mt text-white py-2 px-4 md:py-4 md:px-6 rounded-full transition duration-500 ease-in-out"
    href="https://api.whatsapp.com/send?phone=1234567890"
    target="_blank"
    rel="noopener noreferrer">
      Entre em contato!
    </a>
  </div>

  <hr className="my-8 border-gray-200" />

  <p className="text-lg text-white tracking-wide font-light">
    Conte conosco para tornar seu projeto realista.
  </p>
</section>

<section className="bg-customBlue py-12 md:py-20">
  <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-20">
    <div className="text-center md:text-left">
      <a
        href="https://www.instagram.com/seu_usuario"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600"
      >
        <Icon icon={instagram} size={30} className="hover:scale-125 transition-transform duration-500 pr-2" />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-600"
      >
        <Icon icon={whatsapp} size={30} className="hover:scale-125 transition-transform duration-500 pr-2" />
      </a>
      <a href="mailto:contato@exemplo.com" className="text-red-600">
        <Icon icon={envelope} size={30} className="hover:scale-125 transition-transform duration-500" />
      </a>
      <p className="text-gray-200 text-lg mt-2 font-light">
        +55 (69) 99328-4448
      </p>
    </div>

    <div className="text-center md:text-left font-light text-xl">
      <p className="text-gray-100 mb-2">contato@oficina3d.com.br</p>
      <p className="text-gray-100">+55 47 3035-7470</p>
      <p className="text-gray-100">+55 47 99189-2961</p>
    </div>

    <div className="text-center md:text-left font-light">
      <p className="text-gray-100">
        R. Dr. Léo de Carvalho, 74 - 2003 / Velha Blumenau / Santa Catarina
        / Brasil
      </p>
    </div>
  </div>
</section>
    </>
  );
}

export default Contact;