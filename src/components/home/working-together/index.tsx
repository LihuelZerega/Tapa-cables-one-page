import React from "react";
import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";
import EstrechamientoDeManos from "@/images/EstrechamientoDeManos.png";

function index() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center max-w-[85rem] px-6 py-10 lg:px-8 lg:py-14 mx-auto">
        <BlurFade
          inView
          className="max-w-3xl text-center mb-10 lg:mb-14 mx-auto"
        >
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
        </BlurFade>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center justify-center max-w-5xl mx-auto">
          <BlurFade inView>
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
                  Estudio de Presupuesto Gratuito: {""}
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
              className="group inline-flex items-center gap-x-2 py-2 px-3 bg-blue-500 hover:bg-blue-600 font-medium text-sm text-neutral-200 rounded-md focus:outline-none"
              href="#contacto"
            >
              Contactanos!
            </a>
          </BlurFade>

          <BlurFade
            inView
            className="flex items-center justify-center w-[330px] h-[330px] md:w-[430px] md:h-[430px] xl:w-[500px] xl:h-[500px] bg-gray-100 rounded-md xl:ml-12 mx-auto"
          >
            <Image
              src={EstrechamientoDeManos}
              width={500}
              height={500}
              alt="image"
              className="rounded-md"
            />
          </BlurFade>
        </div>
      </div>
    </div>
  );
}

export default index;
