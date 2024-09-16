import React from "react";
import { Chart } from "./chart";
import BlurFade from "@/components/magicui/blur-fade";

function index() {
  return (
    <BlurFade
      inView
      className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
    >
      <div className="text-center">
        <h2 className="text-gray-800 font-bold text-3xl md:text-4xl md:leading-tight">
          Beneficios principales de tapar los cables en su fachada.
        </h2>
        <p className="text-base text-gray-600 max-w-4xl text-center mx-auto">
          Poner una canaleta para ocultar el cableado en una fachada ofrece
          varios beneficios clave
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-center gap-6 md:gap-12 pt-12">
        <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1 p-3 border-2 border-blue-400 rounded-md">
            <h4 className="text-blue-500 font-semibold text-xl">
              Mejora Estética y eliminar aspecto antiguo
            </h4>
            <p className="text-gray-600 text-sm">
              Ocultar los cables expuestos mejora significativamente la
              apariencia de la fachada, además, instalar canaletas elimina la
              sensación de una fachada descuidada o envejecida.
            </p>
          </div>

          <div className="space-y-1 p-3 border-2 border-blue-400 rounded-md">
            <h4 className="text-blue-500 font-semibold text-xl">
              Protección del Cableado
            </h4>
            <p className="text-gray-600 text-sm">
              Los cables, al estar protegidos dentro de una canaleta, quedan
              resguardados frente a tirones, desgaste por fricción, vandalismo y
              factores climáticos adversos, prolongando su vida útil.
            </p>
          </div>

          <div className="space-y-1 p-3 border-2 border-blue-400 rounded-md">
            <h4 className="text-blue-500 font-semibold text-xl">Seguridad</h4>
            <p className="text-gray-600 text-sm">
              Al eliminar la posibilidad de cables sueltos y colgantes, se
              reduce el riesgo de accidentes, lo que también disminuye la
              responsabilidad legal en caso de incidentes.
            </p>
          </div>

          <div className="space-y-1 p-3 border-2 border-blue-400 rounded-md">
            <h4 className="text-blue-500 font-semibold text-xl">
              Incremento del Valor de la Propiedad
            </h4>
            <p className="text-gray-600 text-sm">
              Un cableado oculto da a la propiedad una apariencia más
              profesional, limpia y moderna, lo que puede aumentar su valor en
              el mercado.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:w-1/2 space-y-6">
          <h4 className="text-gray-700">
            Además, en base a estos beneficios realizamos un estudio a 300
            personas que ya se habían instalado canaletas en su fachada y le
            realizamos la siguiente pregunta:
          </h4>
          <Chart />
        </div>
      </div>
    </BlurFade>
  );
}

export default index;
