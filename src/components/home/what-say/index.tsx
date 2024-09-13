import React from "react";
import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";
import RadioYaLogo from "@/images/RadioYaLogo.png";
import OkDiarioLogo from "@/images/OkDiarioLogo.png";
import ElMundioFinancieroLogo from "@/images/ElMundoFinancieroLogo.png";
import LaSextaLogo from "@/images/LaSextaLogo.png";

function index() {
  return (
    <div className="max-w-[85rem] py-10 px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="pb-10 text-center mx-auto">
        <BlurFade inView className="text-3xl font-bold md:text-4xl md:leading-tight text-gray-800">
          ¿Que dicen de nosotros?
        </BlurFade>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl mt-8 mx-auto select-none">
          <BlurFade inView className="flex items-center justify-center mx-auto">
            <Image
              src={RadioYaLogo}
              alt="RadioYaLogo"
              width={120}
              height={120}
            />
          </BlurFade>

          <BlurFade inView className="flex items-center justify-center mx-auto">
            <Image
              src={OkDiarioLogo}
              alt="RadioYaLogo"
              width={110}
              height={110}
            />
          </BlurFade>

          <BlurFade inView className="flex items-center justify-center mx-auto">
            <Image
              src={ElMundioFinancieroLogo}
              alt="RadioYaLogo"
              width={130}
              height={130}
            />
          </BlurFade>

          <BlurFade inView className="flex items-center justify-center mx-auto">
            <Image src={LaSextaLogo} alt="RadioYaLogo" width={30} height={30} />
          </BlurFade>
        </div>
      </div>
      {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <a
          className="group flex flex-col h-full border border-gray-200 hover:shadow-lg  transition duration-300 rounded-md p-5"
          href="#"
        >
          <div className="aspect-w-16 aspect-h-11">
            <img
              className="w-full object-cover rounded-lg"
              src="https://res.cloudinary.com/dbhxvj3w7/image/upload/v1725974648/Blog1_b13vvq.png"
              alt="Blog Image"
            />
          </div>
          <div className="my-6">
            <h3 className="text-lg font-medium text-gray-800">
              Organiza tus Espacios con el Innovador Tapacables
            </h3>
            <p className="mt-5 text-gray-600 text-sm">
              El desorden de cables es un problema común en oficinas y hogares.
              El Tapacables es la solución perfecta para mantener tus cables
              organizados y fuera de la vista...
            </p>
          </div>
        </a>

        <a
          className="bg-white group flex flex-col h-full border border-gray-200 hover:shadow-lg  transition duration-300 rounded-md p-5"
          href="#"
        >
          <div className="aspect-w-16 aspect-h-11">
            <img
              className="w-full object-cover rounded-lg"
              src="https://res.cloudinary.com/dbhxvj3w7/image/upload/v1725974646/Blog2_bic2ng.png"
              alt="Blog Image"
            />
          </div>
          <div className="my-6">
            <h3 className="text-lg font-medium text-gray-800">
              Seguridad y Estilo: Descubre Cómo el Tapacables Protege Tu Hogar
            </h3>
            <p className="mt-5 text-gray-600 text-sm">
              Los cables sueltos no solo crean un ambiente desordenado, sino que
              también pueden ser peligrosos, especialmente para los niños y las
              mascotas...
            </p>
          </div>
        </a>

        <a
          className="bg-white group flex flex-col h-full border border-gray-200 hover:shadow-lg  transition duration-300 rounded-md p-5"
          href="#"
        >
          <div className="aspect-w-16 aspect-h-11">
            <img
              className="w-full object-cover rounded-lg"
              src="https://res.cloudinary.com/dbhxvj3w7/image/upload/v1725974646/Blog3_mfmoq4.png"
              alt="Blog Image"
            />
          </div>
          <div className="my-6">
            <h3 className="text-lg font-medium text-gray-800">
              Transforma tus Espacios con Tapacables: La Solución Ideal para
              Cables Invisibles
            </h3>
            <p className="mt-5 text-gray-600 text-sm">
              El Tapacables no solo es una herramienta funcional, sino también
              un accesorio de diseño. Este innovador producto te permite
              mantener tus cables ocultos...
            </p>
          </div>
        </a>
      </div> */}
    </div>
  );
}

export default index;
