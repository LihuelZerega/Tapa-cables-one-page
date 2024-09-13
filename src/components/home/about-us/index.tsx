"use client";
import React, { useState } from "react";
import Image from "next/image";
import AboutUs1 from "@/images/AboutUs1.png";
import Adria from "@/images/Adria.png";

import TheSecretImage1 from "@/images/TheSecret1.png";
import TheSecretImage2 from "@/images/TheSecret2.png";
import TheSecretImage3 from "@/images/TheSecret3.png";
import TheSecretImage4 from "@/images/TheSecret4.png";
import TheSecretImage5 from "@/images/TheSecret5.png";
import TheSecretImage6 from "@/images/TheSecret6.png";

import BlurFade from "@/components/magicui/blur-fade";
import PulsatingButton from "@/components/magicui/pulsating-button";

function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openTerms = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="mx-auto mt-32">
      <section>
        <div className="max-w-[85rem] gap-12 mx-auto flex md:hidden flex-col-reverse lg:flex-row md:items-center md:gap-12 xl:gap-32 px-6 my-10">
          <BlurFade
            inView
            className="lg:w-1/2 flex flex-col items-center justify-center mt-5 sm:mt-10 lg:mt-0"
          >
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <h3 className="text-center sm:text-left font-bold text-3xl lg:text-4xl text-gray-800 mb-6">
                  ¿Que es Tapacables?
                </h3>
                <p className="text-gray-500">
                  Tapacables surge con el objetivo de ofrecer soluciones
                  eficientes a un mercado con escasas alternativas para la
                  ocultación de cableado en fachadas. Impulsados por nuestra
                  ambición de brindar la mejor solución posible, hemos diseñado,
                  creado y patentado nuestras propias canaletas.
                </p>

                <div className="flex items-center justify-center w-[330px] h-[330px] sm:w-[500px] sm:h-[500px] bg-gray-100 rounded-md">
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

                <p className="text-gray-500 mt-3">
                  Nuestro enfoque se centra en dos objetivos fundamentales:
                  ofrecer un servicio de instalación integral que nadie más está
                  proporcionando y desarrollar el mejor producto disponible en
                  el mercado. Estamos convencidos de que hemos alcanzado ambos.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>

        <div className="max-w-[85rem] gap-12 mx-auto hidden md:flex flex-col-reverse lg:flex-row md:items-center md:gap-12 xl:gap-32 px-6 my-10">
          <BlurFade
            inView
            className="lg:w-1/2 flex flex-col items-center justify-center"
          >
            <div className="flex items-center justify-center w-[330px] h-[330px] sm:w-[500px] sm:h-[500px] bg-gray-100 rounded-md">
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
          </BlurFade>

          <BlurFade
            inView
            className="lg:w-1/2 flex flex-col items-center justify-center mt-5 sm:mt-10 lg:mt-0"
          >
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h3 className="text-center sm:text-left font-bold text-3xl lg:text-4xl text-gray-800 mb-6">
                  ¿Que es Tapacables?
                </h3>
                <p className="text-gray-500">
                  Tapacables surge con el objetivo de ofrecer soluciones
                  eficientes a un mercado con escasas alternativas para la
                  ocultación de cableado en fachadas. Impulsados por nuestra
                  ambición de brindar la mejor solución posible, hemos diseñado,
                  creado y patentado nuestras propias canaletas.
                </p>
                <p className="text-gray-500 mt-3">
                  Nuestro enfoque se centra en dos objetivos fundamentales:
                  ofrecer un servicio de instalación integral que nadie más está
                  proporcionando y desarrollar el mejor producto disponible en
                  el mercado. Estamos convencidos de que hemos alcanzado ambos.
                </p>
                {/* <p className="text-gray-500 mt-3">
                  <strong>Nuestros productos</strong> se componen de perfiles de
                  aluminio y soportes de hierro con un acabado en zinc,
                  garantizando durabilidad y resistencia a las inclemencias del
                  tiempo. Comenzamos nuestras operaciones en Valencia, donde ya
                  hemos realizado pruebas piloto con éxito, y planeamos
                  expandirnos a otros mercados nacionales, apoyados en alianzas
                  estratégicas con profesionales locales.
                </p> */}
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <div className="grid gap-12 w-full bg-neutral-50 my-24 px-6">
        <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-12 mx-auto">
          <BlurFade
            inView
            className="text-2xl font-semibold text-gray-800 text-center mb-12"
          >
            Nuestro compromiso es un reflejo de nuestros valores.
          </BlurFade>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-12 gap-x-32">
            <BlurFade inView className="text-center">
              <div className="flex justify-center items-center size-12 bg-gray-50 border border-gray-200 rounded-full mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  color="#3b82f6"
                  fill="none"
                >
                  <path
                    d="M9 13C9 13 10 13 11 15C11 15 14.1765 10 17 9"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21 11.1833V8.28029C21 6.64029 21 5.82028 20.5959 5.28529C20.1918 4.75029 19.2781 4.49056 17.4507 3.9711C16.2022 3.6162 15.1016 3.18863 14.2223 2.79829C13.0234 2.2661 12.424 2 12 2C11.576 2 10.9766 2.2661 9.77771 2.79829C8.89839 3.18863 7.79784 3.61619 6.54933 3.9711C4.72193 4.49056 3.80822 4.75029 3.40411 5.28529C3 5.82028 3 6.64029 3 8.28029V11.1833C3 16.8085 8.06277 20.1835 10.594 21.5194C11.2011 21.8398 11.5046 22 12 22C12.4954 22 12.7989 21.8398 13.406 21.5194C15.9372 20.1835 21 16.8085 21 11.1833Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div className="mt-3">
                <h3 className="text-md font-semibold text-gray-700">Calidad</h3>
                <p className="text-sm mt-1 text-gray-600">
                  Productos y servicios <br /> que superan las expectativas.
                </p>
              </div>
            </BlurFade>

            <BlurFade inView className="text-center">
              <div className="flex justify-center items-center size-12 bg-gray-50 border border-gray-200 rounded-full mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  color="#3b82f6"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.00897 9L8 9M16 9L15.991 9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="mt-3">
                <h3 className="text-md font-semibold text-gray-700">
                  Confianza
                </h3>
                <p className="text-sm mt-1 text-gray-600">
                  Garantizamos <br /> una experiencia sobresaliente.
                </p>
              </div>
            </BlurFade>

            <BlurFade inView className="text-center">
              <div className="flex justify-center items-center size-12 bg-gray-50 border border-gray-200 rounded-full mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  color="#3b82f6"
                  fill="none"
                >
                  <path
                    d="M16.3083 4.38394C15.7173 4.38394 15.4217 4.38394 15.1525 4.28405C15.1151 4.27017 15.0783 4.25491 15.042 4.23828C14.781 4.11855 14.5721 3.90959 14.1541 3.49167C13.1922 2.52977 12.7113 2.04882 12.1195 2.00447C12.04 1.99851 11.96 1.99851 11.8805 2.00447C11.2887 2.04882 10.8077 2.52977 9.84585 3.49166C9.42793 3.90959 9.21897 4.11855 8.95797 4.23828C8.92172 4.25491 8.88486 4.27017 8.84747 4.28405C8.57825 4.38394 8.28273 4.38394 7.69171 4.38394H7.58269C6.07478 4.38394 5.32083 4.38394 4.85239 4.85239C4.38394 5.32083 4.38394 6.07478 4.38394 7.58269V7.69171C4.38394 8.28273 4.38394 8.57825 4.28405 8.84747C4.27017 8.88486 4.25491 8.92172 4.23828 8.95797C4.11855 9.21897 3.90959 9.42793 3.49166 9.84585C2.52977 10.8077 2.04882 11.2887 2.00447 11.8805C1.99851 11.96 1.99851 12.04 2.00447 12.1195C2.04882 12.7113 2.52977 13.1922 3.49166 14.1541C3.90959 14.5721 4.11855 14.781 4.23828 15.042C4.25491 15.0783 4.27017 15.1151 4.28405 15.1525C4.38394 15.4217 4.38394 15.7173 4.38394 16.3083V16.4173C4.38394 17.9252 4.38394 18.6792 4.85239 19.1476C5.32083 19.6161 6.07478 19.6161 7.58269 19.6161H7.69171C8.28273 19.6161 8.57825 19.6161 8.84747 19.7159C8.88486 19.7298 8.92172 19.7451 8.95797 19.7617C9.21897 19.8815 9.42793 20.0904 9.84585 20.5083C10.8077 21.4702 11.2887 21.9512 11.8805 21.9955C11.96 22.0015 12.04 22.0015 12.1195 21.9955C12.7113 21.9512 13.1922 21.4702 14.1541 20.5083C14.5721 20.0904 14.781 19.8815 15.042 19.7617C15.0783 19.7451 15.1151 19.7298 15.1525 19.7159C15.4217 19.6161 15.7173 19.6161 16.3083 19.6161H16.4173C17.9252 19.6161 18.6792 19.6161 19.1476 19.1476C19.6161 18.6792 19.6161 17.9252 19.6161 16.4173V16.3083C19.6161 15.7173 19.6161 15.4217 19.7159 15.1525C19.7298 15.1151 19.7451 15.0783 19.7617 15.042C19.8815 14.781 20.0904 14.5721 20.5083 14.1541C21.4702 13.1922 21.9512 12.7113 21.9955 12.1195C22.0015 12.04 22.0015 11.96 21.9955 11.8805C21.9512 11.2887 21.4702 10.8077 20.5083 9.84585C20.0904 9.42793 19.8815 9.21897 19.7617 8.95797C19.7451 8.92172 19.7298 8.88486 19.7159 8.84747C19.6161 8.57825 19.6161 8.28273 19.6161 7.69171V7.58269C19.6161 6.07478 19.6161 5.32083 19.1476 4.85239C18.6792 4.38394 17.9252 4.38394 16.4173 4.38394H16.3083Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                  <path
                    d="M8.5 16.5C9.19863 15.2923 10.5044 14.4797 12 14.4797C13.4956 14.4797 14.8014 15.2923 15.5 16.5M14 10C14 11.1046 13.1046 12 12 12C10.8955 12 10 11.1046 10 10C10 8.89544 10.8955 8.00001 12 8.00001C13.1046 8.00001 14 8.89544 14 10Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div className="mt-3">
                <h3 className="text-md font-semibold text-gray-700">
                  Profesionalidad
                </h3>
                <p className="text-sm mt-1 text-gray-600">
                  Compromiso con <br /> la excelencia y responsabilidad.
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>

      <section id="sobre-nosotros">
        <div className="max-w-[85rem] gap-12 mx-auto flex md:hidden flex-col-reverse lg:flex-row-reverse md:items-center md:gap-12 xl:gap-32 px-6 my-12">
          <BlurFade inView className="mt-5 sm:mt-10 lg:mt-0 md:pl-12">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <h2 className="text-center sm:text-left font-bold text-3xl lg:text-4xl text-gray-800 mb-6">
                  Tapacables y su nacimiento
                </h2>
                <p className="text-gray-500">
                  Adrià Salamanca Barberà, fundador de Tapacables, con una
                  sólida experiencia en el sector de telecomunicaciones, detectó
                  la falta de soluciones eficientes para la ocultación de cables
                  en fachadas. Este proyecto empresarial busca cubrir esta
                  necesidad, ofreciendo productos y servicios de alta calidad
                  que faciliten el ordenamiento de infraestructuras exteriores.
                </p>
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center w-[330px] h-[330px] sm:w-[500px] sm:h-[500px] bg-gray-100 rounded-md">
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
                  <p
                    id="the-secret"
                    className="text-gray-500 text-sm mt-3 text-center"
                  >
                    Adrià Salamanca Barberà, Fundador de Tapacables
                  </p>
                </div>
                <p className="text-center text-gray-500 mt-3">
                  Durante su trayectoria como técnico de telecomunicaciones
                  descubrió un problema que nadie estaba viendo, al que llamo{" "}
                  <strong>
                    {"“"}El secreto{"”"}
                  </strong>
                </p>

                <div className="flex items-center justify-center mx-auto pt-4" onClick={openTerms}>
                  <PulsatingButton>
                    ¿Quieres conocer el secreto?
                  </PulsatingButton>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>

        <div className="max-w-[85rem] gap-12 mx-auto hidden md:flex flex-col-reverse lg:flex-row-reverse md:items-center md:gap-12 xl:gap-32 px-6 my-12">
          <BlurFade
            inView
            className="lg:w-1/2 flex flex-col items-center justify-center"
          >
            <div className="flex items-center justify-center w-[330px] h-[330px] sm:w-[500px] sm:h-[500px] bg-gray-100 rounded-md">
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
            <p className="text-gray-500 text-sm mt-3 text-center">
              Adrià Salamanca Barberà, Fundador de Tapacables
            </p>
          </BlurFade>

          <BlurFade inView className="lg:w-1/2 mt-5 sm:mt-10 lg:mt-0 md:pl-12">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="text-center sm:text-left font-bold text-3xl lg:text-4xl text-gray-800 mb-6">
                  Tapacables y su nacimiento
                </h2>
                <p className="text-gray-500">
                  Adrià Salamanca Barberà, fundador de Tapacables, con una
                  sólida experiencia en el sector de telecomunicaciones, detectó
                  la falta de soluciones eficientes para la ocultación de cables
                  en fachadas. Este proyecto empresarial busca cubrir esta
                  necesidad, ofreciendo productos y servicios de alta calidad
                  que faciliten el ordenamiento de infraestructuras exteriores.
                </p>
                <p id="el-secreto" className="text-gray-500 mt-3">
                  Durante su trayectoria como técnico de telecomunicaciones
                  descubrió un problema que nadie estaba viendo, al que llamo{" "}
                  <br />
                  <strong>
                    {"“"}El secreto{"”"}
                  </strong>
                </p>

                <div onClick={openTerms}>
                  <PulsatingButton>
                    ¿Quieres conocer el secreto?
                  </PulsatingButton>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {isModalOpen && (
        <div
          id="hs-task-created-alert"
          className="fixed inset-0 z-[80] flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black/30 px-4"
          role="dialog"
          aria-labelledby="hs-task-created-alert-label"
        >
          <div className="relative flex flex-col bg-white shadow-lg rounded-xl w-full max-w-6xl px-4 md:px-0">
            <div className="absolute top-2 end-2">
              <button
                type="button"
                className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                aria-label="Close"
                onClick={() => setIsModalOpen(false)}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <div className="px-3 py-6 sm:p-10 max-h-[600px] sm:max-h-[550px] 2xl:max-h-[700px] overflow-y-auto scroll-mx-1.5">
              <div className="gap-6 mx-auto flex flex-col md:items-center mb-10">
                <div className="flex flex-col mx-auto">
                  <h2 className="text-left font-bold text-2xl lg:text-3xl text-gray-800 mb-3">
                    El Secreto
                  </h2>
                  <p className="text-gray-600 text-left mb-4">
                    La realidad es que entre el 90-95% de las canaletas
                    instaladas no cumplen con las necesidades reales, y de este
                    porcentaje, más del 80% se deterioran con el tiempo. Estos
                    son datos basados en mi experiencia, y los números no
                    mienten.
                  </p>
                  <p className="text-gray-600 text-left">
                    Como fundador de Tapacables, mi trayectoria como instalador
                    de telecomunicaciones me ha permitido observar este problema
                    de cerca. Durante años, instalé miles de metros de cableado
                    en diversas fachadas y me di cuenta de un hecho importante
                    al que llame {"“"}El secreto{"”"}:
                  </p>
                </div>
                <div className="bg-gray-100 p-6 sm:py-12 w-full text-center rounded-md text-blue-600 my-5">
                  <strong className="italic text-lg">
                    {"“"}La mayoría de las personas no son conscientes de la
                    cantidad de técnicos que manipulan sus fachadas a diario.
                    {"”"}
                  </strong>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center justify-center mx-auto gap-x-12 my-10">
                <div className="lg:w-1/2 flex flex-col items-center justify-center space-y-4 text-gray-600">
                  <p>
                    Cada año, muchos cambiamos de proveedor de internet, y no
                    todos los cables son compatibles con todas las compañías.
                    Aunque no siempre es tu caso, ocurre con frecuencia en la
                    mayoría de los hogares. Este cambio continuo de cableado es
                    parte del problema.
                  </p>
                  <p>
                    Ahora, volvamos a las canaletas que mencioné. Estas están
                    hechas de PVC, en piezas de aproximadamente 2 metros de
                    largo, compuestas por una base y una tapa. Su precio puede
                    parecer atractivo, entre 10 y 20 € el metro, pero su
                    instalación y durabilidad dejan mucho que desear y se puede
                    convertir muy fácilmente en una de sus peores inversiones.
                  </p>
                  <p>
                    Ponte en mi lugar: eres un técnico a tres metros de altura
                    subido a una escalera, intentando abrir y cerrar estas tapas
                    con las manos sucias de la grasa acumulada en las fachadas.
                    Se hace muy difícil conseguir que las tapas cierren
                    correctamente, y una vez expuestas al sol, se deforman,
                    quedando imposibles de cerrar de nuevo. Algunas tapas se
                    caen y otras se pierden. Si el propietario las detecta a
                    tiempo , puede intentar remacharlas, pero el daño ya está
                    hecho, esto provoca la puesta efectiva de nuevo cableado.
                    Además, la manipulación inevitablemente mancha las
                    canaletas.
                  </p>
                  <p>
                    Por esta razón decidí crear Tapacables, un sistema diseñado
                    para ser más práctico, con una abertura superior que permite
                    incorporar nuevos cables de manera rápida, sencilla y
                    efectiva, sin las dificultades que presentan las soluciones
                    tradicionales.
                  </p>
                </div>
                <div className="lg:w-1/2 flex items-center justify-center">
                  <div className="flex items-center justify-center w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-gray-100 rounded-md mt-6 md:mt-0">
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
                  contactarnos y comprobar por ti mismo lo que describo. Te
                  adjunto unas fotos para que veas lo que enfrentamos día a día.
                </p>
              </div>
{/* 
              // <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-center mx-auto gap-x-12 py-6 w-full">
              //   <div className="h-[450px] select-none">
              //     <Image
              //       src={TheSecretImage1}
              //       width={450}
              //       height={600}
              //       alt=""
              //       className="h-[450px] rounded-md "
              //     />
              //   </div>

              //   <div className="h-[450px] select-none">
              //     <Image
              //       src={TheSecretImage2}
              //       width={450}
              //       height={600}
              //       alt=""
              //       className="h-[450px] rounded-md "
              //     />
              //   </div>

              //   <div className="h-[450px] select-none">
              //     <Image
              //       src={TheSecretImage3}
              //       width={450}
              //       height={600}
              //       alt=""
              //       className="h-[450px] rounded-md "
              //     />
              //   </div>

              //   <div className="h-[450px] select-none">
              //     <Image
              //       src={TheSecretImage4}
              //       width={450}
              //       height={600}
              //       alt=""
              //       className="h-[450px] rounded-md "
              //     />
              //   </div>

              //   <div className="h-[450px] select-none">
              //     <Image
              //       src={TheSecretImage5}
              //       width={450}
              //       height={600}
              //       alt=""
              //       className="h-[450px] rounded-md "
              //     />
              //   </div>

              //   <div className="h-[450px] select-none">
              //     <Image
              //       src={TheSecretImage6}
              //       width={450}
              //       height={600}
              //       alt=""
              //       className="h-[450px] rounded-md "
              //     />
              //   </div>
              // </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Index;
