"use client";
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
        <div className="bg-brand-primary text-white font-bold py-1 px-4 transform rounded-tr-md">
          OFERTA ESPECIAL
        </div>
      </div>

      <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-12 lg:my-24 border border-neutral-300 rounded-md px-6 lg:px-0 z-10">
        <div className="mx-auto max-w-7xl px-0 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-1">
            <div className="">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Formas parte de una comunidad de vecinos? <br />
                <span className="text-brand-primary">
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
                      className="size-6 text-brand-primary"
                    /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="text-brand-primary size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                      />
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
            <form
              onSubmit={handleEmailSubmit}
              className="mt-6 md:mt-3 flex flex-col md:flex-row max-w-md gap-4"
            >
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
                className="min-w-0 flex-auto border rounded-md bg-white/5 px-3.5 py-2 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-primary sm:text-sm/6"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-none rounded-md bg-brand-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
              >
                {isSubmitting ? "Enviando..." : "Solicitar evaluación"}
              </button>
            </form>
            {message && (
              <p className="mt-2 text-center text-sm text-gray-600">
                {message}
              </p>
            )}
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
            className="aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-brand-primary/50 to-brand-primary/50 opacity-30"
          />
        </div>
      </div>
    </div>
  );
}
