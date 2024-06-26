import React from "react";
import { Link } from "react-router-dom";

const ConfigClasses = () => {
  return (
    <form className="bg-slate-100 p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto my-8 space-y-4">
      <h1 className="text-4xl mb-10">
        Configure Class | New Entery |{" "}
        <Link className="text-xl bg-green-400 p-2 text-white rounded" to={"/"}>
          Home
        </Link>
      </h1>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* <img
            src="/dashboard/school.png"
            alt="School Icon"
            className="w-40 h-40 md:w-72 md:h-80"
          /> */}
          <div className="flex flex-col space-y-4 w-full">
            <div className="w-full">
              <label className="block text-gray-700">Class Name:</label>
              <input
                type="text"
                className="mt-1 p-4 block w-full rounded-md shadow-sm border-2 border-black"
                placeholder="5"
              />
            </div>
            <div className="w-full">
              <label className="block text-gray-700">Section Name:</label>
              <input
                type="text"
                className="mt-1 p-4 block w-full rounded-md shadow-sm border-2 border-black"
                placeholder="Section Name"
              />
            </div>
            <div className="w-full">
              <label className="block text-gray-700">Teacher:</label>
              <input
                type="text"
                className="mt-1 p-4 block w-full rounded-md shadow-sm border-2 border-black"
                placeholder="Teacher name"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* <img
            src="/dashboard/events(periods).png"
            alt="Periods Icon"
            className="w-40 h-40 md:w-72 md:h-80"
          /> */}
          <div className="flex flex-col space-y-4 w-full">
            <div className="w-full">
              <label className="block text-gray-700">Subject:</label>
              <select className="mt-1 block w-full p-4 border-2 border-black rounded-md shadow-sm">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            </div>

            <div className="w-full">
              <label className="block text-gray-700">Number of Periods:</label>
              <select className="mt-1 block w-full p-4 border-2 border-black rounded-md shadow-sm">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col md:flex-row justify-around space-y-4 md:space-y-0">
        <button className="bg-blue-500 text-white rounded-md py-2 px-4 w-full md:w-auto">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ConfigClasses;
