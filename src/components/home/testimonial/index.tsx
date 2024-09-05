import React from "react";

function index() {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
            ¿Que opinan <span className="text-blue-600">nuestros clientes</span> de nuestros <span className="text-blue-600">productos</span> y <span className="text-blue-600">servicios</span>?
          </h2>
        </div>

        <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
          <div className="overflow-hidden bg-white rounded-md shadow">
            <div className="px-8 py-12">
              <div className="relative w-24 h-24 mx-auto">
                <img
                  className="relative object-cover w-24 h-24 mx-auto rounded-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-1.jpg"
                  alt=""
                />
                <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                  <svg
                    className="w-4 h-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                  </svg>
                </div>
              </div>
              <blockquote className="mt-7">
                <p className="text-base text-gray-800">
                  “Las canaletas de Tapacables son mucho más fáciles de usar que otras marcas. La apertura superior ahorra tiempo. Una opción claramente mejor.”
                </p>
              </blockquote>
              <p className="text-base font-semibold tex-tblack mt-9">
              Carlos Martín López
              </p>
              <p className="mt-1 text-base text-gray-600">
              Calle Serrano, Madrid
              </p>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded-md shadow">
            <div className="px-8 py-12">
              <div className="relative w-24 h-24 mx-auto">
                <img
                  className="relative object-cover w-24 h-24 mx-auto rounded-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-2.jpg"
                  alt=""
                />
                <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                  <svg
                    className="w-4 h-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                  </svg>
                </div>
              </div>
              <blockquote className="mt-7">
                <p className="text-base text-gray-800">
                  “Estoy muy contenta con la calidad de las canaletas. Son resistentes y estéticamente perfectas para mi fachada. Sin duda, una gran compra.”
                </p>
              </blockquote>
              <p className="text-base font-semibold tex-tblack mt-9">
              Laura Sánchez Fernández
              </p>
              <p className="mt-1 text-base text-gray-600">
              Calle Larios, Málaga
              </p>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded-md shadow">
            <div className="px-8 py-12">
              <div className="relative w-24 h-24 mx-auto">
                <img
                  className="relative object-cover w-24 h-24 mx-auto rounded-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-3.jpg"
                  alt=""
                />
                <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                  <svg
                    className="w-4 h-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                  </svg>
                </div>
              </div>
              <blockquote className="mt-7">
                <p className="text-base text-gray-800">
                  “El servicio fue excelente. Me mostraron un render antes de empezar y la instalación fue rápida y limpia. Todo quedó perfecto.”
                </p>
              </blockquote>
              <p className="text-base font-semibold tex-tblack mt-9">
              Javier Gutiérrez Muñoz
              </p>
              <p className="mt-1 text-base text-gray-600">
              Calle Mayor, Valencia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
