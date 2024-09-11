import React from "react";
import Image from "next/image";
import AboutUs1 from "@/images/AboutUs1.png";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import TheSecretImage1 from "@/images/TheSecret1.png";
import TheSecretImage2 from "@/images/TheSecret2.png";
import TheSecretImage3 from "@/images/TheSecret3.png";
import TheSecretImage4 from "@/images/TheSecret4.png";
import TheSecretImage5 from "@/images/TheSecret5.png";
import TheSecretImage6 from "@/images/TheSecret6.png";


function index() {
  return (
    <div>
      <div className="flex flex-row items-center justify-center space-x-2 py-6">
        <span>
          <IoIosArrowDown className="text-lg text-blue-600" />
        </span>
        <h2 className="font-semibold text-lg text-center text-blue-600">
          ¿Quieres conocer el secreto?{" "}
        </h2>
        <span>
          <IoIosArrowDown className="text-lg text-blue-600" />
        </span>
      </div>

      <hr />

      <div className="bg-gray-50 shadow-sm shadow-gray-200 pb-6">
        <div className="max-w-[85rem] mx-auto flex flex-col px-24 py-10">
          <div className="gap-12 mx-auto flex flex-col md:items-center my-10">
            <div className="flex flex-col mx-auto">
              <h2 className="font-bold text-2xl lg:text-3xl text-gray-800 mb-3">
                El Secreto
              </h2>
              <p className="text-gray-600 text-left mb-4">
                La realidad es que entre el 90-95% de las canaletas instaladas
                no cumplen con las necesidades reales, y de este porcentaje, más
                del 80% se deterioran con el tiempo. Estos son datos basados en
                mi experiencia, y los números no mienten.
              </p>
              <p className="text-gray-600 text-left">
                Como fundador de Tapacables, mi trayectoria como instalador de
                telecomunicaciones me ha permitido observar este problema de
                cerca. Durante años, instalé miles de metros de cableado en
                diversas fachadas y me di cuenta de un hecho importante al que
                llame “El secreto”:
              </p>
            </div>
            <div className="bg-gray-100 py-12 w-full text-center rounded-md text-blue-600 my-10">
              <p className="italic text-lg">
                "La mayoría de las personas no son conscientes de la cantidad de
                técnicos que manipulan sus fachadas a diario."
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center mx-auto gap-x-12 my-10">
            <div className="lg:w-1/2 flex flex-col items-center justify-center space-y-4 text-gray-600">
              <p>
                Cada año, muchos cambiamos de proveedor de internet, y no todos
                los cables son compatibles con todas las compañías. Aunque no
                siempre es tu caso, ocurre con frecuencia en la mayoría de los
                hogares. Este cambio continuo de cableado es parte del problema.
              </p>
              <p>
                Ahora, volvamos a las canaletas que mencioné. Estas están hechas
                de PVC, en piezas de aproximadamente 2 metros de largo,
                compuestas por una base y una tapa. Su precio puede parecer
                atractivo, entre 10 y 20 € el metro, pero su instalación y
                durabilidad dejan mucho que desear y se puede convertir muy
                fácilmente en una de sus peores inversiones.
              </p>
              <p>
                Ponte en mi lugar: eres un técnico a tres metros de altura
                subido a una escalera, intentando abrir y cerrar estas tapas con
                las manos sucias de la grasa acumulada en las fachadas. Se hace
                muy difícil conseguir que las tapas cierren correctamente, y una
                vez expuestas al sol, se deforman, quedando imposibles de cerrar
                de nuevo. Algunas tapas se caen y otras se pierden. Si el
                propietario las detecta a tiempo , puede intentar remacharlas,
                pero el daño ya está hecho, esto provoca la puesta efectiva de
                nuevo cableado. Además, la manipulación inevitablemente mancha
                las canaletas.
              </p>
              <p>
                Por esta razón decidí crear Tapacables, un sistema diseñado para
                ser más práctico, con una abertura superior que permite
                incorporar nuevos cables de manera rápida, sencilla y efectiva,
                sin las dificultades que presentan las soluciones tradicionales.
              </p>
            </div>
            <div className="lg:w-1/2 flex items-center justify-center">
              <div className="flex items-center justify-center w-[500px] h-[500px] bg-gray-100 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                  color="#9b9b9b"
                  fill="none"
                >
                  <path
                    d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r="1.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                  <path
                    d="M16 22C15.3805 19.7749 13.9345 17.7821 11.8765 16.3342C9.65761 14.7729 6.87163 13.9466 4.01569 14.0027C3.67658 14.0019 3.33776 14.0127 3 14.0351"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13 18C14.7015 16.6733 16.5345 15.9928 18.3862 16.0001C19.4362 15.999 20.4812 16.2216 21.5 16.6617"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center mx-auto gap-x-12 ">
            <p className="text-gray-600">
              Te invito a observar las canaletas de tu zona antes de
              contactarnos y comprobar por ti mismo lo que describo. Te adjunto
              unas fotos para que veas lo que enfrentamos día a día.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-center mx-auto gap-x-12 py-6 w-full">
            <div className="h-[450px] select-none">
              <Image
                src={TheSecretImage1}
                width={450}
                height={600}
                alt=""
                className="h-[450px] rounded-md "
              />
            </div>

            <div className="h-[450px] select-none">
              <Image
                src={TheSecretImage2}
                width={450}
                height={600}
                alt=""
                className="h-[450px] rounded-md "
              />
            </div>

            <div className="h-[450px] select-none">
              <Image
                src={TheSecretImage3}
                width={450}
                height={600}
                alt=""
                className="h-[450px] rounded-md "
              />
            </div>

            <div className="h-[450px] select-none">
              <Image
                src={TheSecretImage4}
                width={450}
                height={600}
                alt=""
                className="h-[450px] rounded-md "
              />
            </div>

            <div className="h-[450px] select-none">
              <Image
                src={TheSecretImage5}
                width={450}
                height={600}
                alt=""
                className="h-[450px] rounded-md "
              />
            </div>

            <div className="h-[450px] select-none">
              <Image
                src={TheSecretImage6}
                width={450}
                height={600}
                alt=""
                className="h-[450px] rounded-md "
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center space-x-2 font-semibold text-blue-600">
          <p>Ocultar el secreto</p>{" "}
          <span>
            <IoIosArrowUp className="text-lg" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default index;
