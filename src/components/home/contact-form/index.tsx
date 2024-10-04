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
    interests: "",
  });

  const [selectedInterests, setSelectedInterests] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("");
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", message: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedInterests) {
      setModalContent({
        title: "Error",
        message: "Por favor, seleccione un interés.",
      });
      setIsModalOpen(true);
      return;
    }

    if (!selectedMethod) {
      setModalContent({
        title: "Error",
        message: "Por favor, seleccione un método de contacto.",
      });
      setIsModalOpen(true);
      return;
    }

    const phoneRegex = /^\d{9}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      setModalContent({
        title: "Error",
        message: "Por favor, ingresa un número de teléfono válido de 9 dígitos.",
      });
      setIsModalOpen(true);
      return;
    }

    if (!isTermsChecked) {
      setModalContent({
        title: "Error",
        message: "Debes aceptar los términos y condiciones antes de continuar.",
      });
      setIsModalOpen(true);
      return;
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        contactMethod: selectedMethod,
        interests: selectedInterests,
      }),
    });

    if (res.ok) {
      setModalContent({
        title: "Mensaje enviado exitosamente",
        message:
          "El mensaje ha sido enviado exitosamente, pronto nos pondremos en contacto contigo. ¡Gracias por contactarnos!",
      });
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
        postalCode: "",
        contactMethod: "",
        interests: "",
      });
      setSelectedInterests("");
      setSelectedMethod("");
      setIsTermsChecked(false);
    } else {
      setModalContent({
        title: "Error",
        message: "Error al enviar el mensaje",
      });
    }
    setIsModalOpen(true);
  };

  const openTerms = () => {
    setIsTermsOpen(true);
  };

  const closeTerms = () => {
    setIsTermsOpen(false);
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
            <div className="sm:col-span-2">
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

            {/* <div className="sm:col-span-2">
              <label
                htmlFor="interests"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Estoy interesado en:
              </label>
              <div className="flex flex-row gap-3 mt-2.5">
                <button
                  type="button"
                  onClick={() => setSelectedInterests("Compra de material")}
                  className={`flex flex-row space-x-2 items-center justify-center shadow-sm hover:shadow-md transition px-3.5 py-2 text-gray-900 w-full rounded-md text-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 ${
                    selectedInterests === "Compra de material"
                      ? "bg-blue-100"
                      : ""
                  }`}
                >
                  Compra De Material
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setSelectedInterests("Servicio de instalacion")
                  }
                  className={`flex flex-row space-x-2 items-center justify-center shadow-sm hover:shadow-md transition px-3.5 py-2 text-gray-900 w-full rounded-md text-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 ${
                    selectedInterests === "Servicio de instalacion"
                      ? "bg-blue-100"
                      : ""
                  }`}
                >
                  Servicio De Instalación
                </button>
              </div>
            </div> */}
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

          <div className="flex items-center mt-3">
            <input
              id="terms-checkbox"
              name="terms-checkbox"
              type="checkbox"
              checked={isTermsChecked}
              onChange={(e) => setIsTermsChecked(e.target.checked)}
              className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="terms-checkbox" className="ml-3 text-base">
              Acepto los{" "}
              <button
                type="button"
                className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
                onClick={openTerms}
              >
                Términos y Condiciones
              </button>
            </label>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Enviar
            </button>
          </div>
        </form>
      </BlurFade>

      {isTermsOpen && (
        <div
          id="hs-modal-upgrade-to-pro"
          className="hs-overlay size-full fixed top-0 left-0 z-[80] overflow-x-hidden overflow-y-auto flex justify-center items-center inset-0 bg-black/30 bg-black bg-opacity-20"
          role="dialog"
          aria-labelledby="hs-modal-upgrade-to-pro-label"
        >
          <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-100 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm pointer-events-auto">
              <div className="p-4 sm:p-7">
                <div className="text-center">
                  <h3
                    id="hs-modal-upgrade-to-pro-label"
                    className="block text-3xl sm:text-4xl font-semibold text-gray-800"
                  >
                    Política de Privacidad
                  </h3>
                  <div className="max-w-lg mx-auto">
                    <p className="mt-2 text-sm text-gray-600">
                      Última actualización: 13 de Septiembre de 2024
                    </p>
                    <p className="mt-3 text-xs text-gray-600">
                      En Tapacables, respetamos su privacidad y estamos
                      comprometidos a proteger sus datos personales. Esta
                      política de privacidad describe cómo recopilamos,
                      utilizamos, y compartimos la información cuando usted
                      interactúa con nosotros a través de nuestro formulario de
                      contacto.
                    </p>
                  </div>

                  <div className="mt-5">
                    <hr />
                  </div>
                </div>

                <div className="py-4 sm:py-6 divide-y divide-gray-200 max-h-72 lg:max-h-32 xl:max-h-52 2xl:max-h-72 overflow-y-auto">
                  <div className="pb-4 sm:pb-6">
                    <h3 className="font-semibold text-xl md:text-2xl text-gray-800 mb-1">
                      1. Información que Recopilamos
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Cuando usted completa el formulario de contacto en nuestro
                      sitio web, podemos recopilar los siguientes datos
                      personales:
                    </p>
                    <ul className="mt-2 text-sm text-gray-600 space-y-1">
                      <li>- Nombre completo</li>
                      <li>- Dirección de correo electrónico</li>
                      <li>- Número de teléfono</li>
                      <li>- Código postal</li>
                      <li>- Mensaje o consulta</li>
                      <li>
                        - Método de contacto preferido (Correo electrónico o
                        WhatsApp)
                      </li>
                    </ul>
                  </div>

                  <div className="pb-4 sm:py-6">
                    <h3 className="font-semibold text-xl md:text-2xl text-gray-800 mb-1">
                      2. Cómo Utilizamos su Información
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">
                      La información que recopilamos se utiliza únicamente para
                      los siguientes propósitos:
                    </p>
                    <ul className="mt-2 text-sm text-gray-600 space-y-1">
                      <li>
                        <strong>Responder a sus consultas:</strong> Utilizaremos
                        su nombre, correo electrónico y número de teléfono para
                        ponernos en contacto con usted y responder a sus
                        preguntas.
                      </li>
                      <li>
                        <strong>Procesamiento de solicitudes:</strong>Para
                        coordinar el contacto según su método de preferencia.
                      </li>
                      <li>
                        <strong>Mejorar nuestros servicios:</strong>La
                        información nos ayuda a mejorar nuestras respuestas y la
                        experiencia de usuario en nuestro sitio web.
                      </li>
                    </ul>
                  </div>

                  <div className="pb-4 sm:py-6">
                    <h3 className="font-semibold text-xl md:text-2xl text-gray-800 mb-1">
                      3. Compartir su Información
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">
                      No compartimos, vendemos ni alquilamos sus datos
                      personales con terceros, excepto en las siguientes
                      circunstancias:
                    </p>
                    <ul className="mt-2 text-sm text-gray-600 space-y-1">
                      <li>
                        <strong>Proveedores de servicios:</strong> Podemos
                        compartir su información con proveedores de servicios
                        que nos ayudan a gestionar nuestro sitio web o
                        comunicarnos con usted (por ejemplo, servicios de correo
                        electrónico).
                      </li>
                      <li>
                        <strong>Cumplimiento legal:</strong> Podemos divulgar su
                        información si así lo requiere la ley o una autoridad
                        judicial.
                      </li>
                    </ul>
                  </div>

                  <div className="pb-4 sm:py-6">
                    <h3 className="font-semibold text-xl md:text-2xl text-gray-800 mb-1">
                      4. Seguridad de su Información
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Implementamos medidas de seguridad técnicas y
                      organizativas para proteger sus datos personales frente a
                      accesos no autorizados, pérdida, alteración o divulgación.
                      Sin embargo, no podemos garantizar la seguridad absoluta
                      de la información transmitida por internet.
                    </p>
                  </div>

                  <div className="pb-4 sm:py-6">
                    <h3 className="font-semibold text-xl md:text-2xl text-gray-800 mb-1">
                      5. Retención de sus Datos
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Mantendremos sus datos personales solo durante el tiempo
                      necesario para cumplir con los propósitos mencionados en
                      esta política de privacidad, o según lo exija la ley.
                    </p>
                  </div>

                  <div className="pb-4 sm:py-6">
                    <h3 className="font-semibold text-xl md:text-2xl text-gray-800 mb-1">
                      6. Derechos de los Usuarios
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Usted tiene los siguientes derechos con respecto a sus
                      datos personales:
                    </p>
                    <ul className="mt-2 text-sm text-gray-600 space-y-1">
                      <li>
                        <strong>Derecho de acceso:</strong> Puede solicitar una
                        copia de los datos que tenemos sobre usted.
                      </li>
                      <li>
                        <strong>Derecho de rectificación:</strong> Puede
                        solicitar la corrección de cualquier información
                        incorrecta o incompleta.
                      </li>
                      <li>
                        <strong>Derecho de supresión:</strong> Puede solicitar
                        que eliminemos sus datos personales cuando ya no sean
                        necesarios para los fines por los que fueron
                        recopilados.
                      </li>
                      <li>
                        <strong>
                          Derecho a la limitación del tratamiento:
                        </strong>{" "}
                        Puede solicitar que limitemos el tratamiento de sus
                        datos en determinadas circunstancias.
                      </li>
                      <li>
                        <strong>Derecho de oposición:</strong> Puede oponerse al
                        tratamiento de sus datos para ciertos fines.
                      </li>
                    </ul>
                    <p className="text-sm md:text-base text-gray-600 mt-2">
                      Para ejercer cualquiera de estos derechos, puede
                      contactarnos utilizando los metodos de contacto
                      proporcionados en nuestra web.
                    </p>
                  </div>

                  <div className="pb-4 sm:py-6">
                    <h3 className="font-semibold text-xl md:text-2xl text-gray-800 mb-1">
                      7. Cambios a esta Política de Privacidad
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Nos reservamos el derecho de actualizar esta política de
                      privacidad en cualquier momento. Cualquier cambio será
                      publicado en esta página con la fecha de actualización
                      correspondiente.
                    </p>
                  </div>

                  <div className="pb-4 sm:py-6">
                    <h3 className="font-semibold text-xl md:text-2xl text-gray-800 mb-1">
                      8. Contacto
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Si tiene alguna pregunta o desea ejercer sus derechos
                      relacionados con la privacidad de sus datos, puede
                      contactarnos utilizando los metodos de contacto
                      proporcionados en nuestra web.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end items-center gap-x-2 p-4 sm:px-7 border-t">
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50"
                  onClick={closeTerms}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  onClick={closeTerms}
                >
                  Aceptar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
