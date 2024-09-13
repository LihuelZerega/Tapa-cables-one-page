"use client";
import React, { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
    postalCode: "",
    contactMethod: "",
  });

  const [selectedMethod, setSelectedMethod] = useState("");
  const [modalContent, setModalContent] = useState({ title: "", message: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedMethod) {
      setModalContent({
        title: "Error",
        message: "Por favor, seleccione un método de contacto.",
      });
      setIsModalOpen(true);
      return;
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, contactMethod: selectedMethod }),
    });

    if (res.ok) {
      setModalContent({
        title: "Mensaje enviado exitosamente",
        message: "El mensaje ha sido enviado exitosamente, pronto nos pondremos en contacto contigo. Gracias por contactarnos!",
      });
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
        postalCode: "",
        contactMethod: "",
      });
      setSelectedMethod("");
    } else {
      setModalContent({
        title: "Error",
        message: "Error al enviar el mensaje",
      });
    }
    setIsModalOpen(true);
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <BlurFade inView className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-blue-500 sm:text-4xl">
          Creemos que te podemos ayudar
        </h2>
        <p className="mt-2 text-base leading-8 text-gray-600">
          Si tienes alguna duda, necesitas información adicional o solicitar
          presupuesto déjanos tus datos y nos pondremos en contacto en la máxima
          brevedad posible.
        </p>
      </BlurFade>

      <BlurFade inView>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-16 max-w-5xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Nombre
              </label>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Número de teléfono
              </label>
              <div className="relative mt-2.5">
                <input
                  id="phone-number"
                  name="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                  required
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="postal-code"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Código Postal
              </label>
              <div className="mt-2.5">
                <input
                  id="postal-code"
                  name="postalCode"
                  type="text"
                  value={formData.postalCode}
                  onChange={(e) =>
                    setFormData({ ...formData, postalCode: e.target.value })
                  }
                  required
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="contact-method"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Forma de contacto
              </label>
              <div className="flex flex-row gap-3 mt-2.5">
                <button
                  type="button"
                  onClick={() => setSelectedMethod("email")}
                  className={`flex flex-row space-x-2 items-center justify-center shadow-sm hover:shadow-md transition px-3.5 py-2 text-gray-900 w-full rounded-md text-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 ${
                    selectedMethod === "email" ? "bg-blue-100" : ""
                  }`}
                >
                  <span>Email</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedMethod("whatsapp")}
                  className={`flex flex-row space-x-2 items-center justify-center shadow-sm hover:shadow-md transition px-3.5 py-2 text-gray-900 w-full rounded-md text-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 ${
                    selectedMethod === "whatsapp" ? "bg-blue-100" : ""
                  }`}
                >
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Mensaje
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Enviar
            </button>
          </div>
        </form>
      </BlurFade>

      {isModalOpen && (
        <div
          id="hs-task-created-alert"
          className="fixed inset-0 z-[80] flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black/30 px-12 "
          role="dialog"
          aria-labelledby="hs-task-created-alert-label"
        >
          <div className="relative flex flex-col bg-white shadow-lg rounded-xl w-full max-w-lg">
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

            <div className="p-4 sm:p-10 text-center overflow-y-auto">
              {/* Icon */}
              <span className="mb-4 inline-flex justify-center items-center size-[46px] rounded-full border-4 border-green-50 bg-green-100 text-green-500">
                <svg
                  className="shrink-0 size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                </svg>
              </span>
              {/* End Icon */}

              <h3
                id="hs-task-created-alert-label"
                className="mb-2 text-xl font-bold text-gray-800"
              >
                {modalContent.title}
              </h3>
              <p className="text-gray-500">{modalContent.message}</p>

              <div className="mt-6 flex justify-center gap-x-4">
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
