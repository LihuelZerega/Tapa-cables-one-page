"use client";
import React from "react";
import { useState } from "react";

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
      question: "¿Tapacables realiza todo tipo de trabajos?",
      answer:
        "No, no podemos ayudar a todos los posibles clientes con una solución universal. Antes de que realices tu pedido de canaletas o contrates nuestro servicio de instalación, nuestro equipo se pondrá en contacto contigo para evaluar si nuestro producto se ajusta a tus necesidades. Nuestro lema es: Ayudar a los clientes a quienes realmente podemos ayudar. Si nuestra solución no es adecuada para ti, intentaremos asesorarte de la mejor manera posible y ayudarte a resolver tu problema.",
    },
    {
      question: "¿Qué garantías me ofrece tapacables?",
      answer:
        "A nivel de instalación todos nuestros  trabajos pasan estándares de calidad muy exigentes una vez finaliza la instalación y donde el cliente certifica que el trabajo está perfectamente acabado. A nivel de producto todas nuestras canaletas cuentan con una garantía de 10 años, siempre que el daño no esté ocasionado por terceros.",
    },
    {
      question: "¿Puedo comprar solo el material e instalarlo yo mismo?",
      answer:
        "¡Por supuesto! Nuestras canaletas se han diseñado para que sean muy fáciles de instalar, van acompañadas de un manual de instrucciones y le ofreceremos un teléfono para que pueda llamar al servicio técnico si tiene alguna duda en el momento de la instalación.",
    },
    {
      question:
        "¿Qué ventajas me ofrece contratar el servicio de instalación en vez de  instalarlas yo mismo?",
      answer:
        "Ofrecemos un descuento del 20% del valor del material si contrata el servicio de instalación.",
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
      question:
        "¿Aparte de la venta de material y el servicio de instalación tenemos otros servicios?",
      answer:
        "Si, ofrecemos un estudio totalmente gratuito para ahorrar en tu factura de la luz o de internet, seguramente estas pagando mas de lo que deberías pagar y no lo sabes, pincha aquí para obtener más información: LINK WHATSAPP",
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
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-12 lg:py-14 mx-auto">
      <div className="grid md:grid-cols-6 gap-10">
        <div className="md:col-span-3">
          <div className="max-w-md">
            <h2 className="text-2xl font-semibold lg:text-3xl text-gray-800 md:leading-tight">
              Preguntas Frecuentes sobre Tapacables
            </h2>
            <p className="mt-3 hidden md:block text-gray-600 text-base">
              Sabemos que elegir el producto adecuado para tu fachada puede
              generar muchas preguntas...
            </p>
          </div>
        </div>

        <div className="md:col-span-3">
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
        </div>
      </div>
    </div>
  );
};

export default FAQ;
