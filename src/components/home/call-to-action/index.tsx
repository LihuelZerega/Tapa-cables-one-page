import React from "react";

function Index() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-gray-50 max-w-[85rem] mx-auto rounded-md border-2 border-blue-500">
        <div className="py-16">
          <div className="container m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-20">
            <div className="m-auto space-y-6">
              <h1 className="text-center text-4xl font-bold text-gray-800 md:text-4xl">
                <span>
                  ¿Te interesa contar con una{" "}
                  <span className="text-blue-500">
                    instalación profesional
                  </span>
                  ?
                </span>{" "}
                <br />
                ¡Aprovecha
                <span className="text-blue-500">
                  {" "}
                  20% de Descuento{" "}
                </span>
                exclusivo!
              </h1>
              <p className="text-center text-base text-gray-600 max-w-3xl mx-auto">
                Al contratar nuestro servicio de instalación, aplicamos un 20%
                de descuento en el material. El precio del servicio es
                personalizado y se ajusta a las características de tu proyecto,
                ¡solicita tu presupuesto sin compromiso y asegura una
                instalación eficiente y estética con Tapacables!
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="#"
                  className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-md before:bg-blue-600 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span className="relative text-base font-semibold text-white">
                    Solicitar presupuesto ahora
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
