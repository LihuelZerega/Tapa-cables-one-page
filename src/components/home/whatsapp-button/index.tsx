"use client";
import React, { useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";

const WhatsAppButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let message = `Hola, mi nombre es ${name} y mi código postal es ${postalCode}. Me gustaría `;
    if (selectedOption === "consulta") {
      message += "realizar una consulta.";
    } else if (selectedOption === "presupuesto") {
      message += "solicitar un presupuesto.";
    }
    const whatsappUrl = `https://wa.me/+34614774063?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
    closeModal();
  };

  return (
    <>
      <button
        onClick={openModal}
        style={{
          position: "fixed",
          bottom: "100px",
          right: "20px",
          borderRadius: "50%",
          padding: "6px",
          backgroundColor: "#25D366",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          zIndex: 1000,
        }}
      >
        <AiOutlineWhatsApp
          className="fab fa-whatsapp"
          style={{
            color: "white",
            fontSize: "42px",
          }}
        ></AiOutlineWhatsApp>
      </button>

      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1001,
            padding: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <div className="text-center mb-4">
              <h3
                id="hs-modal-signup-label"
                className="block text-3xl font-bold text-gray-800"
              >
                ¿Hablamos por Whatsapp?
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Contáctenos para realizar una consulta o solicitar presupuesto
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="text-sm">Nombre:</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm">Código postal:</label>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm">Seleccione una opción:</label>
                  <div className="flex flex-row gap-3 mt-2.5">
                    <button
                      type="button"
                      onClick={() => setSelectedOption("consulta")}
                      className={`flex flex-row space-x-2 items-center justify-center shadow-sm hover:shadow-md transition px-3.5 py-2 text-gray-900 w-full rounded-md text-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-brand-primary ${selectedOption === "consulta" ? "bg-brand-primary/10" : ""
                        }`}
                    >
                      <span>Realizar una consulta</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedOption("presupuesto")}
                      className={`flex flex-row space-x-2 items-center justify-center shadow-sm hover:shadow-md transition px-3.5 py-2 text-gray-900 w-full rounded-md text-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-brand-primary ${selectedOption === "presupuesto" ? "bg-brand-primary/10" : ""
                        }`}
                    >
                      <span>Solicitar un presupuesto</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 ">
                O
              </div>

              <div className="text-center text-sm">
                Si quieres contactarnos de otra manera, puedes enviarnos un{" "}
                <a href="mailto:tapacables@outlook.es" className="text-brand-primary underline underline-offset-2">Email</a> a{" "}
                <span className="text-brand-primary">
                  Infotapacables@gmail.com
                </span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-brand-primary py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                >
                  Enviar
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="block w-full rounded-md py-2 px-3 items-center gap-x-2 text-sm font-medium border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50"
                >
                  Cerrar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes blink {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;
