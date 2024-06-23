import React from "react";

const ShowTeacher = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Teacher
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
                  S.No
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Teacher Name
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Edit
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Delete
                </th>
                <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3">1</td>
                <td className="px-4 py-3">Numan</td>
                <td className="px-4 py-3">
                  <button className="bg-blue-500 text-white p-2 rounded">
                    Edit
                  </button>
                </td>
                <td className="px-4 py-3">
                  <button className="bg-red-500 text-white p-2 rounded">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">2</td>
                <td className="px-4 py-3">Sohaib</td>
                <td className="px-4 py-3">
                  <button className="bg-blue-500 text-white p-2 rounded">
                    Edit
                  </button>
                </td>
                <td className="px-4 py-3">
                  <button className="bg-red-500 text-white p-2 rounded">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">3</td>
                <td className="px-4 py-3">Ans Sattar</td>
                <td className="px-4 py-3">
                  <button className="bg-blue-500 text-white p-2 rounded">
                    Edit
                  </button>
                </td>
                <td className="px-4 py-3">
                  <button className="bg-red-500 text-white p-2 rounded">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">4</td>
                <td className="px-4 py-3">Furqan</td>
                <td className="px-4 py-3">
                  <button className="bg-blue-500 text-white p-2 rounded">
                    Edit
                  </button>
                </td>
                <td className="px-4 py-3">
                  <button className="bg-red-500 text-white p-2 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ShowTeacher;
