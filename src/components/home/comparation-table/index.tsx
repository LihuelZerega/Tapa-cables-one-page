import React from "react";

function index() {
  return (
    <div className="mt-20 lg:mt-12 max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
      <section>
        <div className="lg:text-center mb-10 lg:mb-20">
          <h3 className="text-3xl font-bold text-gray-800">
            <span className="text-blue-500">Comparativa</span> de Canaletas con <span className="text-blue-500">Apertura superior</span> 
          </h3>
          <p className="mt-2 text-base text-gray-600 max-w-4xl text-center mx-auto">
            La comparativa se realiza junto a Legrand dado que es la única
            canaleta junto a nosotros con apertura superior, todas las demás se
            descartan porque no cumplen con los requisitos para satisfacer las
            necesidades del mercado.
          </p>
        </div>

        <div className="space-y-24 lg:hidden">
          <section>
            <div className="px-4 mb-4">
              <h2 className="text-lg leading-6 font-medium text-gray-800">
                Free
              </h2>
            </div>
            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                Financial data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Open/High/Low/Close
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Price-volume difference indicator
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                On-chain data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Network growth
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Average token age consumed
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Exchange flow
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total ERC20 exchange funds flow
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Transaction volume
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total circulation (beta)
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Velocity of tokens (beta)
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    ETH gas used
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                Social data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Dev activity
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Topic search
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Relative social dominance
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total social volume
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <div className="px-4 mb-4">
              <h2 className="text-lg leading-6 font-medium text-gray-800">
                Startup
              </h2>
            </div>
            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                Financial data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Open/High/Low/Close
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Price-volume difference indicator
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                On-chain data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Network growth
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Average token age consumed
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Exchange flow
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total ERC20 exchange funds flow
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Transaction volume
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total circulation (beta)
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Velocity of tokens (beta)
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    ETH gas used
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                Social data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Dev activity
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Topic search
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Relative social dominance
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total social volume
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <div className="px-4 mb-4">
              <h2 className="text-lg leading-6 font-medium text-gray-800">
                Team
              </h2>
            </div>
            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                Financial data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Open/High/Low/Close
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Price-volume difference indicator
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                On-chain data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Network growth
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Average token age consumed
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Exchange flow
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total ERC20 exchange funds flow
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Transaction volume
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total circulation (beta)
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Velocity of tokens (beta)
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    ETH gas used
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                Social data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Dev activity
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Topic search
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Relative social dominance
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total social volume
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <div className="px-4 mb-4">
              <h2 className="text-lg leading-6 font-medium text-gray-800">
                Enterprise
              </h2>
            </div>
            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                Financial data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Open/High/Low/Close
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Price-volume difference indicator
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                On-chain data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Network growth
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Average token age consumed
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Exchange flow
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total ERC20 exchange funds flow
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Transaction volume
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total circulation (beta)
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Velocity of tokens (beta)
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    ETH gas used
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                Social data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Dev activity
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Topic search
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Relative social dominance
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total social volume
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>

        <div className="hidden lg:block">
          <table className="w-full h-px">
            <caption className="sr-only">Comparacion de Productos</caption>
            <thead className="sticky top-0 inset-x-0 bg-white">
              <tr>
                <th
                  className="py-4 ps-6 pe-6 text-sm font-medium text-gray-800 text-start"
                  scope="col"
                >
                  <span className="sr-only">Feature by</span>
                  <span>Características a comparar</span>
                </th>

                <th
                  className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center"
                  scope="col"
                >
                  Tapacables
                </th>
                <th
                  className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center"
                  scope="col"
                >
                  Legrand (PVC)
                </th>
              </tr>
            </thead>
            <tbody className="border-t border-gray-200 divide-y divide-gray-200">
              <tr className="bg-blue-50">
                <th
                  className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                  scope="row"
                >
                  Material canaleta
                </th>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    Aluminio Lacado
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    PVC
                  </p>
                </td>
              </tr>

              <tr>
                <th
                  className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                  scope="row"
                >
                  Material soportes
                </th>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    Arcelar
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    Sin información disponible
                  </p>
                </td>
              </tr>

              <tr className="bg-blue-50">
                <th
                  className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                  scope="row"
                >
                  Sistema de sujeción
                </th>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    Por soportes cada 1 metro
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    Por soportes cada 0,40 metro
                  </p>
                </td>
              </tr>

              <tr>
                <th
                  className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                  scope="row"
                >
                  Rigidez de la estructura
                </th>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    Alta <br /> Canaletas Encajadas (Sistema patentado M Y H)
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    Media <br /> Canaletas Solapadas
                  </p>
                </td>
              </tr>

              <tr className="bg-blue-50">
                <th
                  className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                  scope="row"
                >
                  Facilidad de instalación
                </th>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    Alta <br /> (Sin necesidad de herramientas de corte)
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    Media <br /> (Requiere herramientas de corte)
                  </p>
                </td>
              </tr>

              <tr>
                <th
                  className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                  scope="row"
                >
                  Durabilidad
                </th>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    Muy alta
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    Media
                  </p>
                </td>
              </tr>

              <tr className="bg-blue-50">
                <th
                  className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                  scope="row"
                >
                  Salidas de agua para evitar acumulación
                </th>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    Si
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
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
        <div className="lg:text-center mb-10 lg:mb-10 lg:mt-12">
          <h3 className="text-3xl font-bold text-gray-800">
            Ejemplo de <span className="text-blue-500">Costes en material</span> para una <span className="text-blue-500">Fachada de 10 Metros</span>
          </h3>
          <p className="mt-2 text-base text-gray-600 max-w-4xl text-center mx-auto">
            Maximiza tu inversión con materiales de alta calidad. Utilizar
            componentes superiores permite reducir la cantidad de soportes, lo
            que compensa el mayor costo unitario y optimiza el presupuesto
            total.
          </p>
        </div>

        <div className="space-y-24 lg:hidden">
          <section>
            <div className="px-4 mb-4">
              <h2 className="text-lg leading-6 font-medium text-gray-800">
                Free
              </h2>
            </div>
            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                Financial data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Open/High/Low/Close
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Price-volume difference indicator
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                On-chain data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Network growth
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Average token age consumed
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Exchange flow
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total ERC20 exchange funds flow
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Transaction volume
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total circulation (beta)
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Velocity of tokens (beta)
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    ETH gas used
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                Social data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Dev activity
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Topic search
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Relative social dominance
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total social volume
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <div className="px-4 mb-4">
              <h2 className="text-lg leading-6 font-medium text-gray-800">
                Startup
              </h2>
            </div>
            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                Financial data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Open/High/Low/Close
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Price-volume difference indicator
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                On-chain data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Network growth
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Average token age consumed
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Exchange flow
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total ERC20 exchange funds flow
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Transaction volume
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total circulation (beta)
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Velocity of tokens (beta)
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    ETH gas used
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                Social data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Dev activity
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Topic search
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Relative social dominance
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total social volume
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <div className="px-4 mb-4">
              <h2 className="text-lg leading-6 font-medium text-gray-800">
                Team
              </h2>
            </div>
            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                Financial data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Open/High/Low/Close
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Price-volume difference indicator
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                On-chain data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Network growth
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Average token age consumed
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Exchange flow
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total ERC20 exchange funds flow
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Transaction volume
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total circulation (beta)
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Velocity of tokens (beta)
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    ETH gas used
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                Social data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Dev activity
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Topic search
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Relative social dominance
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total social volume
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <div className="px-4 mb-4">
              <h2 className="text-lg leading-6 font-medium text-gray-800">
                Enterprise
              </h2>
            </div>
            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                Financial data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Open/High/Low/Close
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Price-volume difference indicator
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                On-chain data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Network growth
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Average token age consumed
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Exchange flow
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total ERC20 exchange funds flow
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Transaction volume
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total circulation (beta)
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Velocity of tokens (beta)
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    ETH gas used
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                Social data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Dev activity
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Topic search
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Relative social dominance
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total social volume
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>

        <div className="hidden lg:block">
          <table className="w-full h-px">
            <caption className="sr-only">Comparacion de Productos</caption>
            <thead className="sticky top-0 inset-x-0 bg-white">
              <tr>
                <th
                  className="py-4 ps-6 pe-6 text-sm font-medium text-gray-800 text-start"
                  scope="col"
                >
                  <span className="sr-only">Feature by</span>
                  <span>Costos para Fachada de 10 Metros </span>
                </th>

                <th
                  className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center"
                  scope="col"
                >
                  Tapacables
                </th>
                <th
                  className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center"
                  scope="col"
                >
                  Legrand (PVC)
                </th>
              </tr>
            </thead>
            <tbody className="border-t border-gray-200 divide-y divide-gray-200">
              <tr className="bg-blue-50">
                <th
                  className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                  scope="row"
                >
                  Precio unitario Canaleta
                </th>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    62€
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    60,11€
                  </p>
                </td>
              </tr>

              <tr>
                <th
                  className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                  scope="row"
                >
                  Precio unitario Soporte
                </th>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    12,50€
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    12,37
                  </p>
                </td>
              </tr>

              <tr className="bg-blue-50">
                <th
                  className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                  scope="row"
                >
                  Cantidad necesaria Soportes
                </th>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    11
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    26
                  </p>
                </td>
              </tr>

              <tr>
                <th
                  className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                  scope="row"
                >
                  Precio total Canaletas
                </th>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    620€
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    601,10€
                  </p>
                </td>
              </tr>

              <tr className="bg-blue-50">
                <th
                  className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                  scope="row"
                >
                  Precio total Soportes
                </th>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    137,50€
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    321,62€
                  </p>
                </td>
              </tr>

              <tr className="">
                <th
                  className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                  scope="row"
                >
                  Precio Total
                </th>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    757,50€
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    922,72€
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-3 items-center justify-center divide-x divide-gray-200 my-4 lg:my-6 lg:mb-12 text-center text-xs text-gray-600 max-w-4xl mx-auto">
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
        <div className="lg:text-center mb-10 lg:mb-10 lg:mt-12">
          <h3 className="text-3xl font-bold text-gray-800">
         Ejemplo de <span className="text-blue-500">Servicio de instalación</span> para una <span className="text-blue-500">Fachada de 10 Metros</span>
          </h3>
          <p className="mt-2 text-base text-gray-600 max-w-4xl text-center mx-auto">
          Se aplica un <span className="underline decoration-2 decoration-solid decoration-blue-500">descuento del 20%</span> en material por contratar servicio de instalación.
          </p>
        </div>

        <div className="space-y-24 lg:hidden">
          <section>
            <div className="px-4 mb-4">
              <h2 className="text-lg leading-6 font-medium text-gray-800">
                Free
              </h2>
            </div>
            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                Financial data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Open/High/Low/Close
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Price-volume difference indicator
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                On-chain data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Network growth
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Average token age consumed
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Exchange flow
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total ERC20 exchange funds flow
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Transaction volume
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total circulation (beta)
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Velocity of tokens (beta)
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    ETH gas used
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                Social data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Dev activity
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Topic search
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Relative social dominance
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total social volume
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <div className="px-4 mb-4">
              <h2 className="text-lg leading-6 font-medium text-gray-800">
                Startup
              </h2>
            </div>
            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                Financial data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Open/High/Low/Close
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Price-volume difference indicator
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                On-chain data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Network growth
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Average token age consumed
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Exchange flow
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total ERC20 exchange funds flow
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Transaction volume
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total circulation (beta)
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Velocity of tokens (beta)
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    ETH gas used
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                Social data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Dev activity
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Topic search
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Relative social dominance
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total social volume
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <div className="px-4 mb-4">
              <h2 className="text-lg leading-6 font-medium text-gray-800">
                Team
              </h2>
            </div>
            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                Financial data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Open/High/Low/Close
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Price-volume difference indicator
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                On-chain data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Network growth
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Average token age consumed
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Exchange flow
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total ERC20 exchange funds flow
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Transaction volume
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total circulation (beta)
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Velocity of tokens (beta)
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    ETH gas used
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                Social data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Dev activity
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Topic search
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Relative social dominance
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total social volume
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">No</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <div className="px-4 mb-4">
              <h2 className="text-lg leading-6 font-medium text-gray-800">
                Enterprise
              </h2>
            </div>
            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                Financial data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Open/High/Low/Close
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Price-volume difference indicator
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                On-chain data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Network growth
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Average token age consumed
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Exchange flow
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total ERC20 exchange funds flow
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Transaction volume
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total circulation (beta)
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Velocity of tokens (beta)
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    ETH gas used
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full">
              <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700">
                Social data
              </caption>
              <thead>
                <tr>
                  <th className="sr-only" scope="col">
                    Feature
                  </th>
                  <th className="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Dev activity
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Topic search
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Relative social dominance
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>

                <tr className="border-t border-gray-200 dark:border-neutral-700">
                  <th
                    className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                    scope="row"
                  >
                    Total social volume
                  </th>
                  <td className="py-5 pe-4">
                    <svg
                      className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>

        <div className="hidden lg:block">
          <table className="w-full h-px">
            <caption className="sr-only">Comparacion de Productos</caption>
            <thead className="sticky top-0 inset-x-0 bg-white">
              <tr>
                <th
                  className="py-4 ps-6 pe-6 text-sm font-medium text-gray-800 text-start"
                  scope="col"
                >
                  <span className="sr-only">Feature by</span>
                  <span>Concepto</span>
                </th>

                <th
                  className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center"
                  scope="col"
                >
                  Tapacables
                </th>
                <th
                  className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center"
                  scope="col"
                >
                  Legrand (PVC)
                </th>
              </tr>
            </thead>
            <tbody className="border-t border-gray-200 divide-y divide-gray-200">
              <tr className="bg-blue-50">
                <th
                  className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                  scope="row"
                >
                  Precio material 10 Metros
                </th>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    757,50€
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    922,72€
                  </p>
                </td>
              </tr>

              <tr>
                <th
                  className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                  scope="row"
                >
                  Descuento por instalación
                </th>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    606€
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    No aplica
                  </p>
                </td>
              </tr>

              <tr className="bg-blue-50">
                <th
                  className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                  scope="row"
                >
                  Caosto Instalación
                </th>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    550€
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    Servicio no disponible
                  </p>
                </td>
              </tr>

              <tr>
                <th
                  className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                  scope="row"
                >
                  Coste Total
                </th>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    1.156€ <br /> (Material con Instalacion Incluida)
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                     922,72€ <br /> (Solo material, sin instalación)
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-2 items-start justify-center my-4 lg:my-6 lg:mb-12 text-left text-sm text-gray-600  mx-auto">
          <p>
          Para entender en su totalidad lo que incluye el  “servicio de instalación” hay que entender  que intervienen varios factores clave, tales como la mano de obra, recursos técnicos, plus de peligrosidad por trabajos en altura, seguro de responsabilidad civil, y los costos de desplazamiento.
          </p>
          <p>
          Los precios ofrecidos son orientativos y no deben considerarse fijos, ya que cada proyecto requiere un presupuesto personalizado según las necesidades específicas de cada cliente, por poner un  ejemplo practico si hablamos de una fachada de 20m el precio no sería el doble del ejemplo anterior, se vería algo reducido.
          </p>
        </div>
      </section>
    </div>
  );
}

export default index;
