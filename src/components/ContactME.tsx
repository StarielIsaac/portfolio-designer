import { Icon } from "react-icons-kit";
import { instagram } from "react-icons-kit/fa/instagram";
import { whatsapp } from "react-icons-kit/fa/whatsapp";
import { envelope } from "react-icons-kit/fa/envelope";

function ContactME() {
  return (
<section id="contatos" className="bg-customBlue md:py-20 px-10 h-screen flex flex-col justify-center items-center">
  <div className="container mx-auto">
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
        <p className="text-gray-200 text-lg mt-2">
          Siga-nos nas redes sociais para atualizações!
        </p>
      </div>

      <div className="text-center md:text-left font-light text-xl">
        <p className="text-gray-100 mb-2">contato@oficina3d.com.br</p>
        <p className="text-gray-100">+55 47 3035-7470</p>
        <p className="text-gray-100">+55 47 99189-2961</p>
        <p className="text-gray-100">Entre em contato para orçamentos e dúvidas.</p>
      </div>

      <div className="text-center md:text-left font-light">
        <p className="text-gray-100">
          R. Dr. Léo de Carvalho, 74 - 2003 / Velha Blumenau / Santa Catarina
          / Brasil
        </p>
        <p className="text-gray-100">Visite nossa loja para conhecer nossos produtos!</p>
      </div>
    </div>
    <div className="mt-16 text-center text-gray-300">
      <p>&copy; {new Date().getFullYear()} Kevin. Todos os direitos reservados.</p>
      <p>Feito com <span role="img" aria-label="Coração Vermelho">❤️</span> por Stariel Isaac</p>
    </div>
  </div>
</section>
  );
}

export default ContactME;