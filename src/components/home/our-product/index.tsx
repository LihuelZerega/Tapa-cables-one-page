import React from "react";
import Image from "next/image";
import OurProduct1 from "@/images/OurProduct1.png";
import OurProduct2 from "@/images/OurProduct2.png";
import OurProduct3 from "@/images/OurProduct3.png";
import OurProduct4 from "@/images/OurProduct4.png";
import OurProduct5 from "@/images/OurProduct5.png";

import BlurFade from "@/components/magicui/blur-fade";

function index() {
  return (
    <div className="max-w-[85rem] gap-12 px-6 lg:px-12 lg:py-16 mx-auto my-12">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 flex flex-col items-center justify-center my-12 lg:my-0">
          <div className="grid grid-cols grid-cols-12 gap-2 sm:gap-6 items-center">
            <div className="col-span-6 space-y-2 md:space-y-6">
              <BlurFade inView delay={0.2}>
                <Image
                  className="rounded-xl"
                  src={OurProduct4}
                  alt="Features Image"
                />
              </BlurFade>

              <BlurFade inView delay={0.2}>
                <Image
                  className="rounded-xl"
                  src={OurProduct5}
                  alt="Features Image"
                />
              </BlurFade>
            </div>

            <BlurFade inView delay={0.4} className="col-span-6">
              <Image
                className="rounded-xl"
                src={OurProduct2}
                alt="Features Image"
              />
            </BlurFade>

            <BlurFade inView delay={0.6} className="col-span-12">
              <Image
                className="rounded-xl"
                src={OurProduct3}
                alt="Features Image"
              />
            </BlurFade>
          </div>
        </div>

        <BlurFade
          inView
          delay={0.8}
          className="lg:w-1/2 flex flex-col items-center justify-center mt-5 sm:mt-10 lg:mt-0 "
        >
          <div className="space-y-6 sm:space-y-8 lg:pl-12">
            <div className="space-y-2 md:space-y-4">
              <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 mb-6">
                Diseño, Calidad y Funcionalidad en una misma Canaleta
              </h2>
              <p className="text-gray-500">
                En Tapacables, nuestras canaletas están diseñadas para ofrecer
                soluciones eficientes y de alta durabilidad en la ocultación de
                cableado en fachadas. Cada sistema se compone de dos elementos
                clave: la canaleta y su soporte. Juntos, garantizan una
                instalación robusta, adaptable y sencilla, cumpliendo con los
                más altos estándares de calidad.
              </p>
              <p className="text-gray-500 mt-2">
                La apertura superior facilita la puesta de cableado nuevo de
                manera mas eficiente sin tener que manipular la misma y así no
                ser dañada, a pie de calle no se aprecia que este abierta
                manteniendo perfectamente su estetica.
              </p>
            </div>
          </div>
        </BlurFade>
      </div>

      <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 md:gap-12">
            <BlurFade
              inView
              delay={0.2}
              className="flex items-start gap-x-5 lg:col-span-1"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  color="#3b82f6"
                  fill="none"
                >
                  <path
                    d="M4.5 10.2653V6H19.5V10.2653C19.5 13.4401 19.5 15.0275 18.5237 16.0137C17.5474 17 15.976 17 12.8333 17H11.1667C8.02397 17 6.45262 17 5.47631 16.0137C4.5 15.0275 4.5 13.4401 4.5 10.2653Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.5 6L5.22115 4.46154C5.78045 3.26838 6.06009 2.6718 6.62692 2.3359C7.19375 2 7.92084 2 9.375 2H14.625C16.0792 2 16.8062 2 17.3731 2.3359C17.9399 2.6718 18.2196 3.26838 18.7788 4.46154L19.5 6"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M10.5 9H13.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M12 19.5V22M12 19.5L7 19.5M12 19.5H17M7 19.5H4.5C3.11929 19.5 2 20.6193 2 22M7 19.5V22M17 19.5H19.5C20.8807 19.5 22 20.6193 22 22M17 19.5V22"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <div className="grow">
                <h3 className="text-lg font-semibold text-gray-800">
                  Fácil instalación y rigidez estructural sin herramientas
                  adicionales
                </h3>
                <p className="mt-1 text-gray-600">
                  Nuestro exclusivo sistema patentado de encaje entre dos
                  canaletas M y H permite una unión perfecta sin la necesidad de
                  utilizar herramientas de corte. Esto no solo simplifica la
                  instalación, sino que también asegura una rigidez estructural
                  superior, lo que garantiza que las canaletas se mantengan
                  firmemente unidas a lo largo del tiempo, reduciendo los
                  errores y tiempos de montaje.
                </p>
              </div>
            </BlurFade>

            <BlurFade
              inView
              delay={0.4}
              className="flex items-start gap-x-5 lg:col-span-1"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  color="#3b82f6"
                  fill="none"
                >
                  <path
                    d="M5.78223 4.18192C6.43007 3.68319 6.754 3.43383 7.12788 3.27323C7.29741 3.20041 7.47367 3.14158 7.65459 3.09741C8.0536 3 8.4767 3 9.32289 3H14.6771C15.5233 3 15.9464 3 16.3454 3.09741C16.5263 3.14158 16.7026 3.20041 16.8721 3.27323C17.246 3.43383 17.5699 3.68319 18.2178 4.18192C20.3644 5.83448 21.4378 6.66077 21.8057 7.73078C21.9694 8.20673 22.0305 8.70728 21.9858 9.20461C21.8852 10.3227 21.0379 11.346 19.3433 13.3925L15.3498 18.2153C13.8126 20.0718 13.044 21 12 21C10.956 21 10.1874 20.0718 8.65018 18.2153L4.65671 13.3925C2.96208 11.346 2.11476 10.3227 2.0142 9.20461C1.96947 8.70728 2.03064 8.20673 2.1943 7.73078C2.56224 6.66077 3.63557 5.83448 5.78223 4.18192Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                  <path
                    d="M10 8.5H14"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="grow">
                <h3 className="text-lg font-semibold text-gray-800">
                  Calidad superior con menor cantidad de soportes
                </h3>
                <p className="mt-1 text-gray-600">
                  Gracias a los materiales de alta calidad utilizados en
                  nuestras canaletas, se reduce considerablemente la cantidad de
                  soportes necesarios para su instalación. Mientras que otras
                  soluciones requieren soportes cada 40 cm, nuestro sistema solo
                  requiere uno por cada metro, manteniendo la misma robustez y
                  minimizando costes y tiempos de instalación.
                </p>
              </div>
            </BlurFade>

            <BlurFade
              inView
              delay={0.6}
              className="flex items-start gap-x-5 lg:col-span-1"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  color="#3b82f6"
                  fill="none"
                >
                  <path
                    d="M3.5 13.678C3.5 9.49387 7.08079 5.35907 9.59413 2.97222C10.9591 1.67593 13.0409 1.67593 14.4059 2.97222C16.9192 5.35907 20.5 9.49387 20.5 13.678C20.5 17.7804 17.2812 22 12 22C6.71878 22 3.5 17.7804 3.5 13.678Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                  <path
                    d="M16 14C16 16.2091 14.2091 18 12 18"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="grow">
                <h3 className="text-lg font-semibold text-gray-800">
                  Incorporación de salidas de agua
                </h3>
                <p className="mt-1 text-gray-600">
                  Nuestras canaletas son las únicas del mercado equipadas con
                  salidas de agua que previenen la acumulación de líquidos. Esta
                  funcionalidad exclusiva protege tanto las canaletas como el
                  cableado a lo largo del tiempo, garantizando mayor durabilidad
                  y funcionalidad.
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
