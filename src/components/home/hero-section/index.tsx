"use client";
import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import HeroBanner3 from "@/images/HeroBanner3.png";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Producto", href: "#producto" },
  { name: "Instalación", href: "#instalacion" },
  { name: "Sobre Nosotros", href: "#sobre-nosotros" },
];

function index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="inset-x-0 top-0 z-50 fixed">
        <div className="fixed w-full">
          <nav
            aria-label="Global"
            className="flex items-center justify-between py-6 px-6 lg:px-8 bg-white w-full z-50 shadow-sm"
          >
            <div className="flex lg:flex-1">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                {/* <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
                className="h-8 w-auto"
              /> */}
                <h1 className="text-2xl font-bold text-blue-600">TAPACABLES</h1>
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
                className="w-fit rounded-sm bg-blue-600 px-3 py-3 text-base text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                Solicitar información <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>

          {/* <div className="relative h-8 p-1 bg-neutral-50 fixed shadow-md">
            <div className="flex flex-row justify-between px-6">
              <div className="flex flex-row items-center space-x-6">
                <a
                  href=""
                  className="flex flex-row items-center space-x-3 text-sm"
                >
                  <Call02Icon />

                  <p>+34 640 12 34 56</p>
                </a>
                <a
                  href=""
                  className="flex flex-row items-center space-x-3 text-sm"
                >
                  <Mail01Icon />

                  <p>info@tapa-cables.com</p>
                </a>
              </div>
              <div className="flex flex-row items-center space-x-6">
                <a href="" className="">
                  <Facebook02Icon />
                </a>
                <a href="" className="">
                  <InstagramIcon />
                </a>
                <a href="" className="">
                  <NewTwitterIcon />
                </a>
              </div>
            </div>
          </div> */}
        </div>

        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
                  className="h-8 w-auto"
                />
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
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto  py-32 sm:py-48 lg:py-44 2xl:py-48">
          <div className="text-left relative z-10 ">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              ¿Cables en tu fachada?
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-200 max-w-xl">
            Alegre su mirada sin cables por su fachada
            </p>
            <div className="mt-10 flex items-start justify-start gap-x-6">
              <a
                href="#"
                className="rounded-sm bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition"
              >
                ¿Te ayudamos?
              </a>
            </div>
          </div>
          <div className="absolute inset-0 bg-white z-0">
            <Image
              className="absolute inset-0 w-full h-[40rem] object-cover object-top select-none"
              src={HeroBanner3}
              width={1920}
              height={700}
              alt="hero background image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
