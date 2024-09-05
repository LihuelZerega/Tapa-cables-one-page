import React from "react";
import Image from "next/image";
import OurProduct1 from "@/images/OurProduct1.png";
import OurProduct2 from "@/images/OurProduct2.png";
import OurProduct3 from "@/images/OurProduct3.png";
import OurProduct4 from "@/images/OurProduct4.png";

function index() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="flex flex-row items-center justify-between">
        <div className="lg:w-1/2">
          <div className="grid grid-cols grid-cols-12 gap-2 sm:gap-6 items-center">
            <div className="col-span-6">
              <Image
                className="rounded-xl"
                src={OurProduct1}
                alt="Features Image"
              />
            </div>

            <div className="col-span-6">
              <Image
                className="rounded-xl"
                src={OurProduct2}
                alt="Features Image"
              />
            </div>

            <div className="col-span-12">
              <Image
                className="rounded-xl"
                src={OurProduct3}
                alt="Features Image"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 sm:mt-10 lg:mt-0 lg:w-1/2">
          <div className="space-y-6 sm:space-y-8 pl-12">
            <div className="space-y-2 md:space-y-4">
              <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
                ¿Por qué Elegir Canaletas con Apertura Superior?
              </h2>
              <p className="text-gray-500">
                En Tapacables, ofrecemos canaletas diseñadas específicamente
                para ocultar cables en fachadas de manera eficiente y estética.
                Es fundamental optar por canaletas con apertura superior, ya que
                permiten un acceso más fácil durante la instalación y
                mantenimiento. Este diseño no solo facilita la colocación de
                cables, sino que también asegura una instalación más ordenada y
                profesional.
              </p>
              <p className="text-gray-500 mt-2">
                Cualquier otra opción de canaleta sin este tipo de apertura
                podría resultar en una instalación más compleja y poco práctica,
                lo que puede afectar tanto la durabilidad como la funcionalidad
                a largo plazo. Por ello, te recomendamos descartar el uso de
                canaletas cerradas o de menor calidad, y optar por nuestros
                productos que garantizan mejores resultados.
              </p>
            </div>

            <ul className="space-y-2 sm:space-y-4">
              <li className="flex gap-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    className="shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div className="grow">
                  <span className="text-sm sm:text-base text-gray-500">
                    Facilidad de Instalación y Mantenimiento
                  </span>
                </div>
              </li>

              <li className="flex gap-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    className="shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div className="grow">
                  <span className="text-sm sm:text-base text-gray-500">
                    Durabilidad y Calidad Superior
                  </span>
                </div>
              </li>

              <li className="flex gap-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    className="shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div className="grow">
                  <span className="text-sm sm:text-base text-gray-500">
                    Mejora Estética del Entorno
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
