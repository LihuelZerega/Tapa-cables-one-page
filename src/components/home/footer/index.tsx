import React from "react";
import { FaInstagram, FaTiktok, FaFacebook, FaYoutube } from "react-icons/fa";
// import TapacablesLogo from "@/images/TapaCablesLogo.png";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/tapacables?igsh=MTJxODBxcTV3Njlhag%3D%3D&utm_source=qr",
    icon: FaInstagram,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@tapacables?_r=1&_t=ZG-98m2DROdRR2",
    icon: FaTiktok,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61589742650299",
    icon: FaFacebook,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@tapacables?si=KPD_f9rSvNy4uMAl",
    icon: FaYoutube,
  },
];

function index() {
  return (
    <div>
      <footer className="mt-auto w-full max-w-[85rem] py-6 px-4 sm:px-6 lg:px-8 mx-auto border-t">
        <div className="flex justify-center items-center gap-5">
          <div>
              <a href="/" className="flex flex-row items-center gap-2 -m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <h1 className="text-3xl font-rounded font-bold text-brand-primary">Tapacables</h1>
                {/* <img src={TapacablesLogo.src} alt="Tapacables Logo" className="w-10 h-10" /> */}
              </a>
          </div>

          {/* <ul className="text-center sm:text-right">
            <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
              <a
                className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                href="/"
              >
                Inicio
              </a>
            </li>
            <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
              <a
                className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                href="#producto"
              >
                Producto
              </a>
            </li>
            <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
              <a
                className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                href="#sobre-nosotros"
              >
                Sobre Nosotros
              </a>
            </li>
            <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
              <a
                className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                href="#trabajos"
              >
                Trabajos Realizados
              </a>
            </li>
          </ul> */}

          <div className="md:text-end">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} de Tapacables`}
                className="size-9 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:text-brand-primary hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none transition-colors"
              >
                <Icon className="shrink-0 size-5" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default index;
