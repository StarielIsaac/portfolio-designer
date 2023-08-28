function Footer() {
  return (
<footer className="bg-customBlue text-white py-8">
  <div className="container mx-auto text-center">
    <div className="mb-8">
      <a
        href="#top"
        className="bg-customBlue hover:bg-blue-700 border border-gray-600 text-white animate-bounce-slow-mt font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out inline-block"
      >
        <span className="text-xl mr-1">↑</span> Voltar
      </a>
    </div>
    <p className="mb-4 text-sm">
      &copy; {new Date().getFullYear()} Kevin. Todos os direitos reservados.
    </p>
    <div className="flex justify-center space-x-8">
      <a
        href="#about"
        className="hover:text-blue-400 hover:scale-125 transition-transform duration-500"
      >
        Sobre
      </a>
      <a
        href="#galery"
        className="hover:text-blue-400 hover:scale-125 transition-transform duration-500"
      >
        Galeria
      </a>
      <a
        href="#"
        className="hover:text-blue-400 hover:scale-125 transition-transform duration-500"
      >
        Contato
      </a>
    </div>
    <div className="mt-8">
      <p className="text-gray-400 text-xs">
        Desenvolvido por <strong>Stariel Isaac</strong>
      </p>
    </div>
  </div>
</footer>
  );
}

export default Footer;
