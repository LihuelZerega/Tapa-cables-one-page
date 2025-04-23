import React from "react";
import { NanoTechnologyIcon } from "@/lib/icons";
import BlurFade from "@/components/magicui/blur-fade";

function index() {
  return (
    // <div className="max-w-[85rem] mx-auto px-6 lg:px-0 py-12 mt-12">
    //   <div className="flex flex-col items-center justify-center">
    //     <BlurFade inView className="text-center mb-10">
    //       <h2 className="text-blue-500 font-bold text-3xl md:text-4xl md:leading-tight">
    //       Servicio integral <span className="text-gray-800">de</span> instalación
    //       </h2>
    //     </BlurFade>

    //     <div className="grid grid-cols-1 lg:grid-cols-3 items-start justify-center gap-6 lg:px-12 2xl:mx-24">
    //       <BlurFade
    //         inView
    //         className="border border-neutral-300 rounded-md lg:h-[170px] p-6"
    //       >
    //         <div>
    //           <h3 className="uppercase text-left font-semibold text-xl lg:text-3xl text-gray-800">
    //             <span className="text-blue-500">1. Análisis</span>
    //           </h3>
    //           <p className="mt-3 text-gray-600">
    //           Evaluamos tu fachada y necesidades para confirmar si nuestra solución es adecuada.
    //           </p>
    //         </div>
    //       </BlurFade>

    //       <BlurFade
    //         inView
    //         className="border border-neutral-300 rounded-md lg:h-[170px] p-6"
    //       >
    //         <div>
    //           <h3 className="uppercase text-left font-semibold text-xl lg:text-3xl text-gray-800">
    //             <span className="text-blue-500">2. Instalación</span>
    //           </h3>
    //           <p className="mt-3 text-gray-600">
    //           Nos encargamos de todo, asegurando un resultado funcional y estéticamente impecable.
    //           </p>
    //         </div>
    //       </BlurFade>

    //       <BlurFade
    //         inView
    //         className="border border-neutral-300 rounded-md lg:h-[170px] p-6"
    //       >
    //         <div>
    //           <h3 className="uppercase text-left font-semibold text-xl lg:text-3xl text-gray-800">
    //             <span className="text-blue-500">3. Garantía</span>
    //           </h3>
    //           <p className="mt-3 text-gray-600">
    //           Ofrecemos garantía en materiales e instalación, y estamos disponibles para cualquier duda o eventualidad.
    //           </p>
    //         </div>
    //       </BlurFade>
    //     </div>

    //     <BlurFade inView className="flex flex-col items-center justify-between">
    //       <div className="mt-10">
    //         <a
    //           href="#contacto"
    //           className="bg-blue-500 hover:bg-blue-600 transition text-white p-3 rounded-md mt-6"
    //         >
    //           Solicitar Presupuesto
    //         </a>
    //       </div>
    //     </BlurFade>
    //   </div>
    // </div>
    <BlurFade inView className="bg-neutral-50 py-12 mb-12 lg:mt-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-gray-800 text-3xl md:text-4xl md:leading-tight font-bold">
            Servicio Integral de Instalación
          </h2>
          {/* <p className="text-body mt-4">Libero sapiente aliquam quibusdam aspernatur, praesentium iusto repellendus.</p> */}
        </div>
        <div className="mt-16 grid gap-6 *:text-center sm:grid-cols-2 lg:grid-cols-3">
          <div className="card variant-mixed group">
            <div className="relative mx-auto size-12 duration-300">
              <div className="bg-ui absolute inset-0 m-auto flex size-12 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-title mt-3 font-medium">Análisis</h3>
            <p className="mt-3 text-sm text-gray-600">
              {" "}
              Evaluamos tu fachada y necesidades para confirmar si nuestra
              solución es adecuada.
            </p>
          </div>
          <div className="card variant-mixed group">
            <div className="relative mx-auto size-12 duration-300">
              <div className="bg-ui absolute inset-0 m-auto flex size-12 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-title mt-3 font-medium">Instalación</h3>
            <p className="mt-3 text-sm text-gray-600">
              Nos encargamos de todo, asegurando un resultado funcional y
              estéticamente impecable.
            </p>
          </div>
          <div className="card variant-mixed group">
            <div className="relative mx-auto size-12 duration-300">
              <div className="bg-ui absolute inset-0 m-auto flex size-12 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-title mt-3 font-medium">Garantía</h3>
            <p className="mt-3 text-sm text-gray-600">
              Ofrecemos garantía en materiales e instalación, y estamos
              disponibles para cualquier duda o eventualidad.
            </p>
          </div>
        </div>
      </div>
    </BlurFade>
  );
}

export default index;
