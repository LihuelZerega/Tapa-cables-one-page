"use client";
import React from "react";
import { useState } from "react";

import BlurFade from "@/components/magicui/blur-fade";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "¿Qué ventajas me aporta instalar una canaleta en mi fachada?",
      answer:
        "La ventaja principal  es el impacto visual, estéticamente hablando, su fachada cambiará por completo, otras ventajas que nos hacen ganar dinero o ahorrarlo,  sería la revalorización de su propiedad y  evitar asumir responsabilidad civil en caso de que alguien sufra algún daño debido a un cable colgante.",
    },
    {
      question: "¿La solución de Tapacables es universal para todas las fachadas?",
      answer:
        "No, nuestro producto y servicio no son una solución universal. Dependemos del tipo de fachada en la que se vaya a trabajar. Nos enfocamos en proyectos donde sabemos que podemos aportar verdadero valor. Si el trabajo no es adecuado para nuestro producto, te lo diremos con total transparencia.",
    },
    {
      question: "¿Qué garantías me ofrece tapacables?",
      answer:
        "En cuanto a la instalación, todos nuestros trabajos cumplen con los más altos estándares de calidad, verificándose minuciosamente al finalizar, con la aprobación del cliente, quien confirma que el trabajo ha sido concluido a la perfección. En lo que respecta a nuestros productos, todas las canaletas cuentan con una garantía de 10 años, siempre que los daños no sean causados por factores externos o terceros.",
    },
    {
      question: "¿Puedo comprar solo el material e instalarlo yo mismo?",
      answer:
        "No, no vendemos el material por separado. Ofrecemos un servicio completo que incluye tanto el material como la instalación profesional para garantizar siempre el  mejor resultado.",
    },
    {
      question: "¿Qué gastos se incluyen en el servicio de instalación?",
      answer:
        "La mano de obra, recursos técnicos, plus de peligrosidad por trabajos en altura, seguro de responsabilidad civil, y los costos de desplazamiento.",
    },
    {
      question: "¿De qué material están hechas las canaletas y los soportes?",
      answer:
        "Las tapas o canaletas están fabricadas en Aluminio de 1,20 mm de espesor y los soportes en Acerlor de 3mm, la decisión primordial era escoger  materiales de durabilidad alta y con gran resistencia a la corrosión, Los resultados en las pruebas de resistencia mecánica fueron más que excelentes, soportando en casi 10 veces más al peso estimado medio.",
    },
    {
      question: "¿De qué color son las canaletas?",
      answer:
        "Blanco es el color básico que ofrecemos sin coste adicional. Sin embargo, si el cliente necesita un color específico, podemos ajustarnos a sus necesidades, aunque esto podría implicar un costo adicional.",
    },
    {
      question: "¿Cómo puedo ampliar la información de esta página web?",
      answer:
        "Lo que nosotros te recomendamos es que rellenes el formulario y nos pondremos en contacto contigo, Además ponemos a tu disposición tapacables.es, donde tienes información más extensa de nuestra empresa y de lo que ofrecemos.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[85rem] py-10 px-6 lg:px-12 lg:py-14 mx-auto">
      <div className="grid md:grid-cols-6 gap-10">
        <BlurFade inView className="md:col-span-3">
          <div className="max-w-md">
            <h2 className="text-center sm:text-left text-3xl font-semibold lg:text-4xl text-gray-800 md:leading-tight">
              Preguntas Frecuentes sobre Tapacables
            </h2>
            <p className="text-center sm:text-left mt-3 text-gray-600 text-base">
              Sabemos que elegir el producto adecuado para tu fachada puede
              generar muchas preguntas...
            </p>
          </div>
        </BlurFade>

        <BlurFade inView className="md:col-span-3">
          <div className="divide-y divide-gray-200">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`pt-6 pb-3 ${
                  index % 2 === 0 ? "bg-blue-50" : "bg-white"
                }`}
              >
                <button
                  className="group pb-3 px-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-600 focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openIndex === index}
                >
                  {faq.question}
                  <svg
                    className={`${
                      openIndex === index ? "hidden" : "block"
                    } shrink-0 size-5 text-gray-600 group-hover:text-gray-500`}
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
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className={`${
                      openIndex === index ? "block" : "hidden"
                    } shrink-0 size-5 text-gray-600 group-hover:text-gray-500`}
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
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
                <div
                  className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
                    openIndex === index ? "block" : "hidden"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </div>
  );
};

export default FAQ;
