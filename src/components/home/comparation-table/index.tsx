import React from "react";

function index() {
  return (
    <div className="mt-20 lg:mt-32 max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
      <section>
        <div className="lg:text-center mb-10 lg:mb-20">
          <h3 className="text-3xl font-bold text-gray-800">
            Comparativa de Canaletas Tapa Cables
          </h3>
          <p className="mt-2 text-base text-gray-600 max-w-2xl text-center mx-auto">
            Nuestra canaleta es la única con apertura superior, un detalle que
            la distingue dentro del mercado y que optimiza su funcionalidad,
            facilitando su instalación y uso en fachadas.
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
                  <span>Comparativa</span>
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
              <tr>
                <th
                  className="py-3 ps-6 bg-gray-50 font-bold text-gray-800 text-start dark:bg-neutral-800"
                  colSpan={5}
                  scope="colgroup"
                >
                  Características del Material
                </th>
              </tr>

              <tr>
                <th
                  className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                  scope="row"
                >
                  Material
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
                  Sostenibilidad
                </th>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    100% Reciclable
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    Media
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
                    +10 Años
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    5 Años
                  </p>
                </td>
              </tr>

              <tr>
                <th
                  className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                  scope="row"
                >
                  Resistencia al Clima
                </th>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    Muy Alta
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    Media
                  </p>
                </td>
              </tr>

              <tr>
                <th
                  className="py-3 ps-6 bg-gray-50 font-bold text-gray-800 text-start dark:bg-neutral-800"
                  colSpan={5}
                  scope="colgroup"
                >
                  Precio
                </th>
              </tr>

              <tr>
                <th
                  className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                  scope="row"
                >
                  Precio de Canaleta
                </th>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    62€/metro
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    60,11€/metro
                  </p>
                </td>
              </tr>

              <tr>
                <th
                  className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                  scope="row"
                >
                  Precio de los Soportes
                </th>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    12,50€/metro
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    12,37€/metro
                  </p>
                </td>
              </tr>

              <tr>
                <th
                  className="py-3 ps-6 bg-gray-50 font-bold text-gray-800 text-start dark:bg-neutral-800"
                  colSpan={5}
                  scope="colgroup"
                >
                  Instalación
                </th>
              </tr>

              <tr>
                <th
                  className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                  scope="row"
                >
                  Recomendación de instalación
                </th>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    1 soporte por metro
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    1 soporte cada 0,40 metros
                  </p>
                </td>
              </tr>

              <tr>
                <th
                  className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                  scope="row"
                >
                  Facilidad de Instalación
                </th>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    Alta <br />{" "}
                    <span className="text-xs">(Sin herramientas de corte)</span>
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    Media <br />{" "}
                    <span className="text-xs">(Con herramientas de corte)</span>
                  </p>
                </td>
              </tr>

              <tr>
                <th
                  className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                  scope="row"
                >
                  Rigidez de la estructura (M y H encajados)
                </th>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    Alta <br />{" "}
                    <span className="text-xs">
                      (Con perfiles Macho y Hembra que se encajan)
                    </span>
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    Media <br />{" "}
                    <span className="text-xs">(Sin encaje entre piezas)</span>
                  </p>
                </td>
              </tr>

              <tr>
                <th
                  className="py-3 ps-6 bg-gray-50 font-bold text-gray-800 text-start dark:bg-neutral-800"
                  colSpan={5}
                  scope="colgroup"
                >
                  Diseño y Funcionalidad
                </th>
              </tr>

              <tr>
                <th
                  className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
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

              <tr>
                <th
                  className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                  scope="row"
                >
                  Resistencia y durabilidad de los soportes
                </th>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    Alta
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    Media
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />
      </section>

      <section>
        <div className="lg:text-center mb-10 lg:mb-10 lg:mt-32">
          <h3 className="text-3xl font-bold text-gray-800">
            Comparativa de Costos para Fachada de 10 Metros
          </h3>
          <p className="mt-2 text-base text-gray-600 max-w-3xl text-center mx-auto">
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
              <tr>
                <th
                  className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                  scope="row"
                >
                  Canaleta (10 metros)
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

              <tr>
                <th
                  className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                  scope="row"
                >
                  Soportes requeridos
                </th>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    10
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    25
                  </p>
                </td>
              </tr>

              <tr>
                <th
                  className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                  scope="row"
                >
                  Costo total de Soportes
                </th>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    125€
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    309,25€
                  </p>
                </td>
              </tr>

              <tr className="bg-gray-50">
                <th
                  className="py-5 ps-6 pe-6 text-base font-medium text-gray-600 text-start whitespace-nowrap"
                  scope="row"
                >
                  Costo total (Canaleta + Soportes)
                </th>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-base font-medium text-gray-600 text-center whitespace-nowrap">
                    745€
                  </p>
                </td>

                <td className="py-5 px-6">
                  <p className="ps-6 pe-6 text-base font-normal text-gray-600 text-center whitespace-nowrap">
                    910,35€
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-600 text-center my-4 lg:my-6">
          Esos precios son solo por la <br />{" "}
          <strong>Compra de material</strong> e{" "}
          <strong>Instalación propia</strong>.
        </p>
      </section>
    </div>
  );
}

export default index;
