import React from "react";

function index() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center max-w-[85rem] px-6 py-10 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-3xl text-center mb-10 lg:mb-14 mx-auto">
          <h2 className="text-gray-800 font-semibold text-3xl md:text-4xl md:leading-tight mb-6 md:mb-0">
            ¿Cómo vamos a{" "}
            <span className="underline decoration-solid decoration-blue-500">
              Trabajar juntos
            </span>
            ?
          </h2>
          <p className="mt-1 text-gray-600">
            Nos complace explicarte los pasos a seguir para que podamos trabajar
            juntos de manera eficiente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center justify-center max-w-5xl mx-auto">
          <div>
            <div className="mb-4">
              <h3 className="text-blue-500 text-xs font-medium uppercase">
                PASOS
              </h3>
            </div>

            <div className="flex gap-x-5 ms-1">
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-blue-500 font-semibold text-xs uppercase rounded-full">
                    1
                  </span>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <span className="text-gray-800 text-base font-medium">
                  Completar Formulario: {""}
                </span>
                <p className="text-sm text-gray-600">
                  El primer paso es completar el formulario que encontrarás al
                  final de nuestra página web. Esto nos permitirá crear tu ficha
                  de cliente y gestionar tu solicitud de forma más precisa.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5 ms-1">
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-blue-500 font-semibold text-xs uppercase rounded-full">
                    2
                  </span>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <span className="text-gray-800 text-base font-medium">
                  Contacto y Recolección de Información: {""}
                </span>
                <p className="text-sm text-gray-600">
                  Una vez recibido el formulario, nos pondremos en contacto
                  contigo a través del medio que hayas indicado. En esta fase,
                  te solicitaremos la información necesaria sobre la fachada en
                  la que se realizarán los trabajos. Es importante señalar que,
                  aunque tratamos de ayudar a todos nuestros clientes, no
                  siempre contamos con una solución universal para cada caso
                  específico.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5 ms-1">
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-blue-500 font-semibold text-xs uppercase rounded-full">
                    3
                  </span>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <span className="text-gray-800 font-medium">
                  Estudio Personalizado: {""}
                </span>
                <p className="text-sm text-gray-600">
                  Después de recibir la información requerida, realizaremos un
                  análisis personalizado para determinar si nuestra solución es
                  la adecuada para ti. Agendaremos una llamada para discutir los
                  resultados de este estudio contigo.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5 ms-1">
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-blue-500 font-semibold text-xs uppercase rounded-full">
                    4
                  </span>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <span className="text-gray-800 font-medium">
                  Propuesta y Seguimiento: {""}
                </span>
                <p className="text-sm text-gray-600">
                  Si el estudio resulta favorable, te enviaremos un presupuesto
                  detallado y te contactaremos en la fecha que hayas indicado
                  para explicarte los próximos pasos, siempre y cuando aceptes
                  la propuesta. Si el resultado del estudio no es positivo, te
                  orientaremos hacia otras alternativas para ofrecerte la mejor
                  solución posible
                </p>
              </div>
            </div>

            <a
              className="group inline-flex items-center gap-x-2 py-2 px-3 bg-blue-500 font-medium text-sm text-neutral-200 rounded-md focus:outline-none"
              href="#"
            >
              Contactanos!
            </a>
          </div>

          <div className="flex items-center justify-center w-[330px] h-[330px] md:w-[430px] md:h-[430px] xl:w-[500px] xl:h-[500px] bg-gray-100 rounded-md xl:ml-12 mx-auto">
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
    </div>
  );
}

export default index;
