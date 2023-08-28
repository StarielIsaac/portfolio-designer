import TrackVisibility from "react-on-screen";
import foto from "../img/foto.png";
import { FiCopy } from "react-icons/fi";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

function About() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmailToClipboard = () => {
    const email = "seu-email@gmail.com";
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section
      id="about"
      className="about w-full py-20 text-slate-100 bg-slate-500 flex flex-col md:flex-row justify-center items-center"
    >
      <div className="container mx-auto px-10 flex flex-col md:flex-row md:space-x-8 items-center">
        {/* Foto */}
        <TrackVisibility>
          {({ isVisible }) => (
            <div className="animate-bounce-slow-mt w-full md:w-3/4 mb-8 md:mb-0">
              <img
                className={`w-full h-auto rounded-3xl shadow-2xl border border-gray-700 ${
                  isVisible ? "animate-zoomIn-mild" : ""
                }`}
                src={foto}
                alt="Minha Foto"
              />
            </div>
          )}
        </TrackVisibility>

        {/* Descrição */}
        <div className="md:w-2/3">
          <div className="flex items-center">
            <span className="text-3xl mr-3 text-customBlue">➤</span>
            <p className="font-bold tracking-wider">
              ARTISTA 3D | MODELAGEM | AMBIENTES REALISTAS
            </p>
          </div>
          <p className="text-3xl mt-4 font-light">
            Artista 3D especializado em modelagem e criação de ambientes
            realistas e elegantes com arte em 3D.
          </p>
          <p className="mt-4">
            Meu nome é Kevin, tenho 25 anos e sou apaixonado por criar ambientes
            visuais deslumbrantes usando técnicas avançadas de modelagem em 3D.
            Minhas criações buscam combinar a estética com a funcionalidade,
            proporcionando experiências únicas e imersivas. 
          </p>
          <p className="mt-4">
            Trabalho no campo da renderização há 4 anos, meu objetivo é
            transmitir sensações por meio de imagens. Ajudo arquitetos a
            convencer seus clientes que sua arquitetura é ideal para eles,
            minhas especialidades são ambientes comerciais, interiores de
            apartamentos.
          </p>
          <p className="mt-4">
            Abaixo você encontrará mais informações sobre minhas habilidades e
            trabalhos. Se desejar, podemos agendar uma conversa através do meu
            e-mail disponibilizado.
          </p>

          {/* Botões */}
          <div className="flex flex-col md:flex-row mt-6 space-y-4 md:space-y-0 md:space-x-4 items-center md:justify-start">
            <a
              href="https://api.whatsapp.com/send?phone=1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center font-semibold bg-transparent border hover:text-slate-800 hover:bg-gray-200 text-slate-100 py-3 md:py-4 lg:py-3 px-4 rounded-lg transition duration-300 ease-in-out mb-4 md:mb-0"
            >
              Fale comigo!{" "}
              <span className="ml-2 ">
                <FaWhatsapp size={30} />
              </span>
            </a>
            <button
              className={`bg-green-600 text-white font-semibold py-4 px-7 rounded-lg hover:bg-green-700 ${
                emailCopied ? "bg-green-600" : ""
              }`}
              onClick={copyEmailToClipboard}
            >
              {emailCopied ? "Email copiado!" : "Copiar email"}
              <FiCopy className="inline-block ml-2" size={22}  />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
