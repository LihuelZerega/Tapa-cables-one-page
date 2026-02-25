"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import TapacablesLogo from "@/images/TapaCablesLogo.png";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Servicio de Instalación", href: "#producto" },
  { name: "Sobre Nosotros", href: "#sobre-nosotros" },
  { name: "Trabajos Realizados", href: "#trabajos" },
];

const navigationMobile = [
  { name: "Inicio", href: "/" },
  { name: "Servicio de Instalación", href: "#Producto" },
  { name: "Sobre Nosotros", href: "#Sobre-nosotros" },
  { name: "Trabajos Realizados", href: "#Trabajos" },
];

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowHeader(true);
      } else if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="bg-white">
      <header
        className={`inset-x-0 top-0 z-50 fixed transition-transform duration-300 ${showHeader ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="w-full">
          <nav
            aria-label="Global"
            className="flex items-center justify-between py-6 px-6 lg:px-8 bg-white w-full z-50 shadow-sm"
          >
            <div className="flex lg:flex-1">
              <a href="/" className="flex flex-row items-center gap-2 -m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <h1 className="text-4xl font-rounded font-bold text-brand-primary">Tapacables</h1>
                {/* <img src={TapacablesLogo.src} alt="Tapacables Logo" className="w-10 h-10" /> */}
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="hidden lg:flex items-center space-x-6 lg:justify-end">
              <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium leading-6 text-gray-900 hover:text-gray-500 transition"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <a
                href="#contacto"
                className="w-fit rounded-sm bg-brand-primary px-3 py-3 text-base text-white shadow-sm hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary transition-colors"
              >
                Solicitar Presupuesto <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
        </div>

        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="flex flex-row items-center gap-2 -m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <h1 className="text-3xl font-rounded font-bold text-brand-primary">Tapacables</h1>
                {/* <img src={TapacablesLogo.src} alt="Tapacables Logo" className="w-10 h-10" /> */}
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigationMobile.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#contacto"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-fit rounded-sm bg-brand-primary px-3 py-3 text-base text-white shadow-sm hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary transition-colors"
                  >
                    Solicitar Presupuesto <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto  py-32 sm:py-48 lg:py-44 2xl:py-48">
          <div className="relative z-10 ">
            <h1 className="text-center lg:text-left font-bold tracking-tight text-white text-5xl sm:text-6xl lg:text-7xl">
              ¿Cables en tu fachada?
            </h1>
            <p className="text-center lg:text-left mt-1.5 sm:mt-6 text-xl lg:text:2xl leading-8 text-neutral-200 max-w-xl">
            Transformamos fachadas, tapando cables
            </p>
            <div className="mt-10 flex items-center lg:items-start justify-center lg:justify-start gap-x-6">
              <a
                href="#Producto"
                className="block lg:hidden rounded-sm bg-[#3847a9] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3847a9] transition"
              >
                Descubre cómo
              </a>
              <a
                href="#producto"
                className="hidden lg:block rounded-sm bg-[#3847a9] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3847a9] transition"
              >
                Descubre cómo
              </a>
            </div>
          </div>
        </div>
      </div> */}

      <section className="overflow-hidden bg-neutral-50 pt-16 lg:pt-32">
        <div className="relative mx-auto max-w-5xl px-6 py-24">
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h1 className="font-bold tracking-tight text-[33px] leading-tight md:text-5xl lg:text-6xl text-gray-800">
              <span className="text-[33px] md:text-5xl lg:text-6xl">Transformamos</span> fachadas,{" "}
              <br className="block lg:hidden" />
              <span className="text-brand-primary">Tapa</span>ndo{" "}
              <span className="text-brand-primary">cables</span>.
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-xl text-gray-600">
              Empresa especializada en la ocultación de cableado en fachadas. <br />
              <p className="text-gray-800 italic text-base mt-10">Descubre, gracias a “El Secreto”, cómo lo hacemos.</p>
            </p>
            <div className="mt-2 flex items-center lg:items-center justify-center lg:justify-center gap-x-6">
              <a
                href="#Sobre-nosotros"
                className="block lg:hidden rounded-sm bg-brand-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary transition"
              >
                El Secreto
              </a>
              <a
                href="#sobre-nosotros"
                className="hidden lg:block rounded-sm bg-brand-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary transition"
              >
                El Secreto
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;
