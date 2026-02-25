import React from "react";
import { Chart } from "./chart";
import BlurFade from "@/components/magicui/blur-fade";

function index() {
  return (
    <BlurFade
      inView
      className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-12"
    >
      <div className="text-center">
        <h2 className="text-gray-800 font-bold text-3xl md:text-4xl md:leading-tight">
          <span className="text-brand-primary">Beneficios</span> de tapar el cableado de su fachada
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-center gap-6 md:gap-12 pt-12">
        <div className="lg:w-1/2 grid grid-cols-1 max-w-md gap-6">
          {/* <div className="space-y-1 p-3 border-2 border-blue-400 rounded-md">
            <h4 className="text-brand-primary font-semibold text-xl">
              1. Una fachada más moderna
            </h4>
            <p className="text-gray-600 text-sm">
              Al ocultar los cables, eliminas ese aspecto descuidado y antiguo,
              y le das la oportunidad a tu casa de tener el aspecto que merece
              tener.
            </p>
          </div>
          <div className="space-y-1 p-3 border-2 border-blue-400 rounded-md">
            <h4 className="text-brand-primary font-semibold text-xl">
              2. Que lo que tenemos dure más
            </h4>
            <p className="text-gray-600 text-sm">
              Al estar dentro de una canaleta, el cableado queda protegido de
              tirones, desgaste y mal tiempo, lo que ayuda a prolongar su vida
              útil.
            </p>
          </div>
          <div className="space-y-1 p-3 border-2 border-blue-400 rounded-md">
            <h4 className="text-brand-primary font-semibold text-xl">
              3. Y lo más importante
            </h4>
            <p className="text-gray-600 text-sm">
              Al eliminar la posibilidad de cables sueltos, reduce el riesgo de
              accidentes y evita posibles problemas legales.
            </p>
          </div> */}

          <ul className="max-w-md mx-auto space-y-12">
            <li className="relative flex items-start">
              <div
                className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
                aria-hidden="true"
              ></div>

              <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white text-brand-primary rounded-full shadow text-lg">
                1
              </div>
              <div className="mt-5 ml-6">
                <h3 className="text-base font-semibold text-gray-800">
                  Una fachada más moderna
                </h3>
                <p className="text-sm text-gray-600">
                  {" "}
                  Al ocultar los cables, eliminas ese aspecto descuidado y
                  antiguo, y le das la oportunidad a tu casa de tener el aspecto
                  que merece tener.
                </p>
              </div>
            </li>

            <li className="relative flex items-start">
              <div
                className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
                aria-hidden="true"
              ></div>

              <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white text-brand-primary rounded-full shadow text-lg">
                2
              </div>
              <div className="mt-5 ml-6">
                <h3 className="text-base font-semibold text-gray-800">
                  Que lo que tenemos dure más
                </h3>
                <p className="text-sm text-gray-600">
                  Al estar dentro de una canaleta, el cableado queda protegido de
                  tirones, desgaste y mal tiempo, lo que ayuda a prolongar su vida
                  útil.
                </p>
              </div>
            </li>

            <li className="relative flex items-start">
              <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white text-brand-primary rounded-full shadow text-lg">
                3
              </div>
              <div className="mt-5 ml-6">
                <h3 className="text-base font-semibold text-gray-800">
                  Y lo más importante...
                </h3>
                <p className="text-sm text-gray-600">
                  Al eliminar la posibilidad de cables sueltos, reduce el riesgo de
                  accidentes y evita posibles problemas legales.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col lg:w-1/2 space-y-6 mt-6 lg:mt-4">
          <h4 className="text-gray-700">
            Además, en base a estos beneficios realizamos un estudio a 300
            personas que ya tenían instaladas canaletas en su fachada y le
            realizamos la siguiente pregunta:
          </h4>
          <Chart />
        </div>
      </div>
    </BlurFade>
  );
}

export default index;
