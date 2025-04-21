"use client"
import React, { useState } from "react";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

export default function PromoteSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setMessage("¡Solicitud enviada con éxito!");
        setEmail("");
      } else {
        setMessage("Error al enviar la solicitud.");
      }
    } catch (error) {
      setMessage("Error de red. Por favor, inténtalo de nuevo.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="relative max-w-6xl mx-6 md:mx-auto">
      <div className="absolute top-0 right-0 transform z-20">
        <div className="bg-blue-500 text-white font-bold py-1 px-4 transform rounded-tr-md">
          OFERTA ESPECIAL
        </div>
      </div>

      <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-12 lg:my-24 border border-neutral-300 rounded-md px-6 lg:px-0 z-10">
        <div className="mx-auto max-w-7xl px-0 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-1">
            <div className="">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Formas parte de una comunidad de vecinos? <br />
                <span className="text-blue-500">
                  Tapacables ofrece una alternativa 100% Gratuita
                </span>
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Transformamos fachadas sin que vuestra comunidad tenga que
                asumir ningún coste, siempre que cumpla con los requisitos.
              </p>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <dt className="flex flex-row items-center space-x-2 text-base font-semibold text-gray-800">
                  <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    {/* <CalendarDaysIcon
                      aria-hidden="true"
                      className="size-6 text-blue-500"
                    /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-blue-500 size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>

                  </div>{" "}
                  Evaluación previa sin compromiso
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  ¿Quieres saber si puedes beneficiarte de la oferta? Déjanos tu
                  email y te lo confirmamos.
                </dd>
              </div>
            </dl>
            <hr className="hidden md:block"/>
            <form onSubmit={handleEmailSubmit} className="mt-6 md:mt-3 flex flex-col md:flex-row max-w-md gap-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Introduce tu correo electrónico"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-w-0 flex-auto border rounded-md bg-white/5 px-3.5 py-2 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-none rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                {isSubmitting ? "Enviando..." : "Solicitar evaluación"}
              </button>
            </form>
            {message && <p className="mt-2 text-center text-sm text-gray-600">{message}</p>}
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-blue-500 to-blue-500 opacity-30"
          />
        </div>
      </div>
    </div>
  );
}
