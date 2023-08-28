function Client() {
  return (
    <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl mb-8 font-light">Depoimentos de Clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-6  shadow hover:shadow-xl transition duration-300">
              <div className="text-gray-800 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 inline-block text-blue-500 mb-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-lg italic">
                  "As artes em 3D da nossa casa ficaram incríveis! Superaram
                  nossas expectativas."
                </p>
                <span className="block mt-4 text-blue-500 font-semibold">
                  Ana Silva
                </span>
              </div>
            </div>
            <div className="bg-white p-6  shadow hover:shadow-xl transition duration-300">
              <div className="text-gray-800 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 inline-block text-blue-500 mb-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-lg italic">
                  "Profissionalismo e qualidade excepcionais. Recomendo a
                  todos."
                </p>
                <span className="block mt-4 text-blue-500 font-semibold">
                  João Santos
                </span>
              </div>
            </div>
            <div className="bg-white p-6  shadow hover:shadow-xl transition duration-300">
              <div className="text-gray-800 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 inline-block text-blue-500 mb-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-lg italic">
                  "Os ambientes que a equipe criou para nosso projeto ficaram
                  incrivelmente reais. Estamos muito satisfeitos."
                </p>
                <span className="block mt-4 text-blue-500 font-semibold">
                  Carla Oliveira
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

  );
}

export default Client;


