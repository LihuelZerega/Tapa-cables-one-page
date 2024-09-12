import React from "react";

function index() {
  return (
    <div className="mt-20 max-w-[85rem] px-3 lg:px-8 mx-auto">
      <section>
        <div className="text-center mb-12 max-w-5xl mx-auto px-3">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-800">
            <span className="text-blue-500">Comparativa</span> de Canaletas con <span className="text-blue-500">Apertura superior</span> 
          </h3>
          <p className="mt-2 text-base text-gray-600 max-w-4xl text-center mx-auto">
          La comparativa se ha realizado con otra marca que, al igual que nosotros, ofrece una canaleta con apertura superior. Todas las demás opciones se han descartado, ya que no cumplen con los requisitos necesarios para satisfacer las demandas del mercado.
          </p>
        </div>

        <div className="block">
          <table className="w-full px-2 lg:h-px max-w-[85rem] mx-auto">
            <caption className="sr-only">Comparacion de Productos</caption>
            <thead className="sticky top-0 inset-x-0 bg-white">
              <tr>
                <th
                  className="py-4 ps-3 pe-3 lg:ps-6 lg:pe-6 text-sm font-medium text-gray-800 text-start"
                  scope="col"
                >
                  <span className="sr-only">Feature by</span>
                  <span>Características a comparar</span>
                </th>

                <th
                  className="w-1/4 py-4 px-6 text-sm md:text-lg leading-6 font-medium text-gray-800 text-center"
                  scope="col"
                >
                  Tapacables
                </th>
                <th
                  className="w-1/4 py-4 px-6 text-sm md:text-lg leading-6 font-medium text-gray-800 text-center"
                  scope="col"
                >
                  Marca Similar
                </th>
              </tr>
            </thead>
            <tbody className="border-t border-gray-200 divide-y divide-gray-200">
              <tr className="bg-blue-50">
                <th
                  className="py-5 ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                  scope="row"
                >
                  Material <br className="block lg:hidden"/> canaleta
                </th>

                <td className="py-5 lg:px-6">
                  <p className="ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    Aluminio
                  </p>
                </td>

                <td className="py-5 lg:px-6">
                  <p className="ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    PVC
                  </p>
                </td>
              </tr>

              <tr>
                <th
                  className="py-5 ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                  scope="row"
                >
                  Material <br className="block lg:hidden"/> soportes
                </th>

                <td className="py-5 lg:px-6">
                  <p className="ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    Arcelor
                  </p>
                </td>

                <td className="py-5 lg:px-6">
                  <p className="ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    Sin <br className="block lg:hidden"/> información <br className="block lg:hidden"/> disponible
                  </p>
                </td>
              </tr>

              <tr className="bg-blue-50">
                <th
                  className="py-5 ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                  scope="row"
                >
                  Sistema <br className="block lg:hidden"/> de sujeción
                </th>

                <td className="py-5 lg:px-6">
                  <p className="ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    Por soportes <br className="block lg:hidden"/> cada 1 metro
                  </p>
                </td>

                <td className="py-5 lg:px-6">
                  <p className="ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    Por soportes <br className="block lg:hidden"/> cada 0,40 metro
                  </p>
                </td>
              </tr>

              <tr>
                <th
                  className="py-5 ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                  scope="row"
                >
                  Rigidez de la <br className="block lg:hidden"/> estructura
                </th>

                <td className="py-5 lg:px-6">
                  <p className="ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    Alta <br /> Canaletas Encajadas <br className="block lg:hidden"/> (Sistema patentado <br className="block lg:hidden"/> M Y H)
                  </p>
                </td>

                <td className="py-5 lg:px-6">
                  <p className="ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    Media <br /> Canaletas Solapadas
                  </p>
                </td>
              </tr>

              <tr className="bg-blue-50">
                <th
                  className="py-5 ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                  scope="row"
                >
                  Facilidad de <br className="block lg:hidden"/> instalación
                </th>

                <td className="py-5 lg:px-6">
                  <p className="ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    Alta <br /> (Sin necesidad de <br className="block lg:hidden"/> herramientas <br className="block lg:hidden"/> de corte)
                  </p>
                </td>

                <td className="py-5 lg:px-6">
                  <p className="ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    Media <br /> (Requiere <br className="block lg:hidden"/> herramientas <br className="block lg:hidden"/> de corte)
                  </p>
                </td>
              </tr>

              <tr>
                <th
                  className="py-5 ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                  scope="row"
                >
                  Durabilidad
                </th>

                <td className="py-5 lg:px-6">
                  <p className="ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    Muy alta
                  </p>
                </td>

                <td className="py-5 lg:px-6">
                  <p className="ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    Alta
                  </p>
                </td>
              </tr>

              <tr className="bg-blue-50">
                <th
                  className="py-5 ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                  scope="row"
                >
                  Salidas de agua <br className="block lg:hidden"/> para evitar <br className="block lg:hidden"/> acumulación
                </th>

                <td className="py-5 lg:px-6">
                  <p className="ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    Si
                  </p>
                </td>

                <td className="py-5 lg:px-6">
                  <p className="ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    No
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs font-medium text-center mt-6 text-gray-600">
          Los datos recogidos son puramente <br /> objetivos y recogidos de
          fuentes oficiales.
        </p>

        <hr className="my-12 max-w-xl mx-auto" />
      </section>

      <section>
      <div className="text-center mb-12 max-w-5xl mx-auto">
      <h3 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Ejemplo de <span className="text-blue-500">Costes en material</span> para una <span className="text-blue-500">Fachada de 10 Metros</span>
          </h3>
          <p className="mt-2 text-base text-gray-600 max-w-4xl text-center mx-auto">
            Maximiza tu inversión con materiales de alta calidad. Utilizar
            componentes superiores permite reducir la cantidad de soportes, lo
            que compensa el mayor costo unitario y optimiza el presupuesto
            total.
          </p>
        </div>

        <div className="block">
          <table className="w-full px-2 lg:h-px max-w-[85rem] mx-auto">
            <caption className="sr-only">Comparacion de Productos</caption>
            <thead className="sticky top-0 inset-x-0 bg-white">
              <tr>
                <th
                  className="py-4 ps-3 pe-3 lg:ps-6 lg:pe-6 text-sm font-medium text-gray-800 text-start"
                  scope="col"
                >
                  <span className="sr-only">Feature by</span>
                  <span> <span className="hidden lg:block">Costos para</span> Fachada <br className="block lg:hidden"/> de 10 Metros </span>
                </th>

                <th
                  className="w-1/4 py-4 px-6 text-sm md:text-lg leading-6 font-medium text-gray-800 text-center"
                  scope="col"
                >
                  Tapacables
                </th>
                <th
                  className="w-1/4 py-4 px-6 text-sm md:text-lg leading-6 font-medium text-gray-800 text-center"
                  scope="col"
                >
                  Marca Similar
                </th>
              </tr>
            </thead>
            <tbody className="border-t border-gray-200 divide-y divide-gray-200">
              <tr className="bg-blue-50">
                <th
                  className="py-5 ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                  scope="row"
                >
                  Precio unitario <br className="block lg:hidden"/> Canaleta
                </th>

                <td className="py-5 px-6">
                  <p className="ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    62€
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    60,11€
                  </p>
                </td>
              </tr>

              <tr>
                <th
                  className="py-5 ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                  scope="row"
                >
                  Precio unitario <br className="block lg:hidden"/> Soporte
                </th>

                <td className="py-5 px-6">
                  <p className="ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    12,50€
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    12,37
                  </p>
                </td>
              </tr>

              <tr className="bg-blue-50">
                <th
                  className="py-5 ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                  scope="row"
                >
                  Cantidad necesaria <br className="block lg:hidden"/> Soportes
                </th>

                <td className="py-5 px-6">
                  <p className="ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    11
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    26
                  </p>
                </td>
              </tr>

              <tr>
                <th
                  className="py-5 ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                  scope="row"
                >
                  Precio total <br className="block lg:hidden"/> Canaletas
                </th>

                <td className="py-5 px-6">
                  <p className="ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    620€
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    601,10€
                  </p>
                </td>
              </tr>

              <tr className="bg-blue-50">
                <th
                  className="py-5 ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                  scope="row"
                >
                  Precio total <br className="block lg:hidden"/> Soportes
                </th>

                <td className="py-5 px-6">
                  <p className="ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    137,50€
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    321,62€
                  </p>
                </td>
              </tr>

              <tr className="">
                <th
                  className="py-5 ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                  scope="row"
                >
                  Precio Total
                </th>

                <td className="py-5 px-6">
                  <p className="ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    757,50€
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    922,72€
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 items-start sm:items-center justify-center gap-y-6 sm:divide-x divide-gray-200 my-4 lg:my-6 lg:mb-12 text-center text-xs text-gray-600 max-w-4xl mx-auto">
          <p>
            Los datos recogidos son puramente <br /> objetivos y recogidos de
            fuentes oficiales.
          </p>
          <p>
            Esos precios son solo por la <br />
            Compra de material eInstalación propia.
          </p>
          <p>
            06/12/2024 <br /> Ultima actualizacion de precios
          </p>
        </div>

        <hr className="my-12 max-w-xl mx-auto" />

      </section>

      <section>
        <div className="text-center mb-12 max-w-5xl mx-auto">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-800">
         Ejemplo de <span className="text-blue-500">Servicio de instalación</span> para una <span className="text-blue-500">Fachada de 10 Metros</span>
          </h3>
          <p className="mt-2 text-base text-gray-600 max-w-4xl text-center mx-auto">
          Se aplica un <span className="underline decoration-2 decoration-solid decoration-blue-500">descuento del 20%</span> en material por contratar servicio de instalación.
          </p>
        </div>

        <div className="block">
          <table className="w-full px-2 lg:h-px max-w-[85rem] mx-auto">
            <caption className="sr-only">Comparacion de Productos</caption>
            <thead className="sticky top-0 inset-x-0 bg-white">
              <tr>
                <th
                  className="py-4 ps-3 pe-3 lg:ps-6 lg:pe-6 text-sm font-medium text-gray-800 text-start"
                  scope="col"
                >
                  <span className="sr-only">Feature by</span>
                  <span>Concepto</span>
                </th>

                <th
                  className="w-1/4 py-4 px-6 text-sm md:text-lg leading-6 font-medium text-gray-800 text-center"
                  scope="col"
                >
                  Tapacables
                </th>
                <th
                  className="w-1/4 py-4 px-6 text-sm md:text-lg leading-6 font-medium text-gray-800 text-center"
                  scope="col"
                >
                  Marca Similar
                </th>
              </tr>
            </thead>
            <tbody className="border-t border-gray-200 divide-y divide-gray-200">
              <tr className="bg-blue-50">
                <th
                  className="py-5 ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                  scope="row"
                >
                  Precio material <br className="block lg:hidden"/> 10 Metros
                </th>

                <td className="py-5 px-6">
                  <p className="ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    757,50€
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    922,72€
                  </p>
                </td>
              </tr>

              <tr>
                <th
                  className="py-5 ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                  scope="row"
                >
                  Descuento por <br className="block lg:hidden"/> instalación
                </th>

                <td className="py-5 px-6">
                  <p className="ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    606€
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    No aplica
                  </p>
                </td>
              </tr>

              <tr className="bg-blue-50">
                <th
                  className="py-5 ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                  scope="row"
                >
                  Costo <br className="block lg:hidden"/> Instalación
                </th>

                <td className="py-5 px-6">
                  <p className="ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    550€
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    Servicio <br className="block lg:hidden"/> no disponible
                  </p>
                </td>
              </tr>

              <tr>
                <th
                  className="py-5 ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                  scope="row"
                >
                  Coste Total
                </th>

                <td className="py-5 px-6">
                  <p className="ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    1.156€ <br /> (Material con <br className="block lg:hidden"/> Instalacion <br className="block lg:hidden"/> Incluida)
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-3 pe-3 lg:ps-6 lg:pe-6 text-xs lg:text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                     922,72€ <br /> (Solo material, <br className="block lg:hidden"/> sin instalación)
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 items-center justify-center my-4 lg:my-6 lg:mb-12 text-left text-sm text-gray-600 mx-auto">
          <p className="text-center max-w-4xl mx-auto">
          Los precios ofrecidos son de carácter orientativo y pueden variar, cada presupuesto se debe estudiar en función a las necesidades específicas de cada cliente.</p>
        </div>
      </section>
    </div>
  );
}

export default index;
