import React from "react";

const TimeTable = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Pricing
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Banh mi cornhole echo park skateboard authentic crucifix neutra
            tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon
            twee
          </p>
        </div>
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Day/Periods
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Speed
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Storage
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Price
                </th>
                <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3">Monday</td>
                <td className="px-4 py-3">5 Mb/s</td>
                <td className="px-4 py-3">15 GB</td>
                <td className="px-4 py-3 text-lg text-gray-900">Free</td>
              </tr>
              <tr>
                <td className="border-t-2 border-gray-200 px-4 py-3">
                  Tuesday
                </td>
                <td className="border-t-2 border-gray-200 px-4 py-3">
                  25 Mb/s
                </td>
                <td className="border-t-2 border-gray-200 px-4 py-3">25 GB</td>
                <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                  $24
                </td>
              </tr>
              <tr>
                <td className="border-t-2 border-gray-200 px-4 py-3">
                  Business
                </td>
                <td className="border-t-2 border-gray-200 px-4 py-3">
                  36 Mb/s
                </td>
                <td className="border-t-2 border-gray-200 px-4 py-3">40 GB</td>
                <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                  $50
                </td>
              </tr>
              <tr>
                <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                  Exclusive
                </td>
                <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                  48 Mb/s
                </td>
                <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                  120 GB
                </td>
                <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                  $72
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            Button
          </button>
        </div>
      </div>
    </section>
  );
};

export default TimeTable;
