"use client";

import React, { useState } from "react";
import { Compare } from "@/components/ui/compare";
import { motion } from "framer-motion";
import Image from "next/image";

import BlurFade from "@/components/magicui/blur-fade";

import Esquinero1 from "@/images/testimonials/Esquinero1.png";
import Esquinero2 from "@/images/testimonials/Esquinero2.png";
import TheLearningBusSin from "@/images/testimonials/TheLearningBusSin.png";
import TheLearningBusCon from "@/images/testimonials/TheLearningBusCon.png";
import VeintinueveSin from "@/images/testimonials/29Sin.png";
import VeintinueveCon from "@/images/testimonials/29Con.png";
import TreintaSin from "@/images/testimonials/30Sin.png";
import TreintaCon from "@/images/testimonials/30Con.png";

const testimonials = [

  {
    id: 1,
    firstImage: TreintaSin,
    secondImage: TreintaCon,
    quote:
      "Hicieron justo lo que necesitábamos. Ahora da gusto ver nuestra casa desde fuera. Todo fue muy fácil con ellos",
    location: "Barcelona",
    author: "Santiago Ruiz Pérez",
    date: "Junio 2023",
  },
  {
    id: 2,
    firstImage: TheLearningBusSin,
    secondImage: TheLearningBusCon,
    quote:
      "Profesionales, rápidos y el resultado se nota desde el primer vistazo. Nos sorprendió lo mucho que cambió la fachada de la academia con algo tan sencillo. Ahora da una imagen mucho más cuidada y profesional. Se agradece cuando un trabajo se hace bien y sin complicaciones.",
    location: "Madrid",
    author: "Jordi Ruiz, Director de la academia.",
    date: "Febrero 2024",
  },
  {
    id: 3,
    firstImage: VeintinueveSin,
    secondImage: VeintinueveCon,
    quote:
      "Mis vecinos no han parado de preguntar qué habíamos hecho en la fachada porque el cambio es brutal. Fue una de las mejores decisiones que tomamos para nuestra comunidad. Ahora el edificio se ve mucho más elegante.",
    location: "Málaga",
    author: "Maria Dolores, Presidenta de la comunidad.",
    date: "Septiembre 2024",
  },
  {
    id: 4,
    firstImage: Esquinero1,
    secondImage: Esquinero2,
    quote:
      "Estamos muy contentos con el cambio. La fachada se ve mucho más limpia y superaron con creces nuestras expectativas, Hicieron un trabajo de diez, gracias a todo el equipo.",
    location: "Málaga",
    author: "Mario Fernández",
    date: "Septiembre 2024",
  },
  {
    id: 4,
    firstImage: Esquinero1,
    secondImage: Esquinero2,
    quote:
      "Estamos muy contentos con el cambio. La fachada se ve mucho más limpia y superaron con creces nuestras expectativas, Hicieron un trabajo de diez, gracias a todo el equipo.",
    location: "Málaga",
    author: "Mario Fernández",
    date: "Septiembre 2024",
  },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 2 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 2 : prevIndex - 1
    );
  };

  const currentTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + 1
  );

  return (
    <BlurFade
      inView
      className="max-w-[85rem] px-6 py-24 lg:px-8 lg:py-14 mx-auto"
    >
      {currentTestimonials.map((testimonial) => (
        <motion.div
          key={testimonial.id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col-reverse lg:flex lg:flex-row gap-10 xl:gap-16 md:items-center">
            <div className="md:mb-0 sm:px-6">
              <Compare
                firstImage={testimonial.firstImage.src}
                secondImage={testimonial.secondImage.src}
                firstImageClassName="object-cover object-left-top"
                secondImageClassname="object-cover object-left-top"
                className="w-full h-[350px] lg:w-[500px] lg:h-[550px]"
                slideMode="hover"
              />

              <div className="absolute bottom-0 start-0 -z-[1] translate-y-10 -translate-x-14"></div>
            </div>

            <div>
              <blockquote className="relative">
                <svg
                  className="absolute top-0 start-0 transform -translate-x-8 -translate-y-4 size-24 text-gray-200"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                    fill="currentColor"
                  />
                </svg>

                <div className="relative z-10">
                  <p className="text-xs font-semibold text-blue-500 tracking-wide uppercase mb-3">
                    Trabajos Realizados
                  </p>

                  <p className="text-xl font-medium italic text-gray-800 md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal">
                    {"“"}
                    {testimonial.quote}
                    {"”"}
                  </p>
                </div>

                <footer className="mt-6">
                  <div className="flex items-center">
                    <div className="">
                      <div className="text-base font-semibold text-gray-800">
                        {testimonial.author}
                      </div>
                      <div className="text-xs text-gray-500">
                        {testimonial.location} - {testimonial.date}
                      </div>
                    </div>
                  </div>
                </footer>

                <div className="space-x-4 mt-8 lg:mt-14">
                  <button
                    onClick={handlePrev}
                    className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 text-white transition"
                  >
                    Anterior
                  </button>
                  <button
                    onClick={handleNext}
                    className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 text-white transition"
                  >
                    Siguiente
                  </button>
                </div>
              </blockquote>
            </div>
          </div>
        </motion.div>
      ))}
    </BlurFade>
  );
}

export default Carousel;
