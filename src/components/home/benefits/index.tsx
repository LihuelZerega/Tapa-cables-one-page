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
        Beneficios de tapar el cableado de su fachada
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-center gap-6 md:gap-12 pt-12">
        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1 p-3 border-2 border-blue-400 rounded-md">
            <h4 className="text-blue-500 font-semibold text-xl">
            Una fachada más moderna
            </h4>
            <p className="text-gray-600 text-sm">
              Al ocultar los cables y usar nuestras canaletas de diseño,
              eliminas ese aspecto descuidado y antiguo.
            </p>
          </div>

          <div className="space-y-1 p-3 border-2 border-blue-400 rounded-md">
            <h4 className="text-blue-500 font-semibold text-xl">
              Que lo que tenemos dure más
            </h4>
            <p className="text-gray-600 text-sm">
              Al estar dentro de una canaleta, el cableado queda protegido de
              tirones, desgaste y mal tiempo, lo que ayuda a prolongar su vida
              útil.
            </p>
          </div>

          <div className="space-y-1 p-3 border-2 border-blue-400 rounded-md">
            <h4 className="text-blue-500 font-semibold text-xl">
              Lo más importante
            </h4>
            <p className="text-gray-600 text-sm">
              Al eliminar los cables sueltos, reduce el riesgo de accidentes y
              evita posibles problemas legales.
            </p>
          </div>

          <div className="space-y-1 p-3 border-2 border-blue-400 rounded-md">
            <h4 className="text-blue-500 font-semibold text-xl">
              Aumenta tu valor
            </h4>
            <p className="text-gray-600 text-sm">
              Ocultar los cables mejora el aspecto moderno y profesional de la
              fachada, lo que automáticamente revaloriza tu propiedad en el
              mercado.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:w-1/2 space-y-6">
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
