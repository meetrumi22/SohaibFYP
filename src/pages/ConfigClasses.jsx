import React from "react";

const ConfigClasses = () => {
  return (
    <form className="bg-slate-100 p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto my-8 space-y-4">
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <img
            src="/dashboard/school.png"
            alt="School Icon"
            className="w-40 h-40 md:w-72 md:h-80"
          />
          <div className="flex flex-col space-y-4 w-full">
            <div className="w-full">
              <label className="block text-gray-700">Name of the school:</label>
              <input
                type="text"
                className="mt-1 p-4 block w-full rounded-md shadow-sm border-2 border-black"
                placeholder="Sunlight School"
              />
            </div>
            <div className="w-full">
              <label className="block text-gray-700">Academic year:</label>
              <input
                type="date"
                className="mt-1 p-4 block w-full rounded-md shadow-sm border-2 border-black"
                defaultValue="2024-2025"
              />
            </div>
            <div className="w-full">
              <label className="block text-gray-700">Registration name:</label>
              <input
                type="text"
                className="mt-1 p-4 block w-full rounded-md shadow-sm border-2 border-black"
                placeholder="SP21-BCS-009"
              />
            </div>
            <button className="mt-6 bg-blue-500 text-white rounded-md p-4 w-full md:w-auto">
              Change
            </button>
          </div>
        </div>

        <hr className="bg-black h-0.5" />

        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <img
            src="/dashboard/events(periods).png"
            alt="Periods Icon"
            className="w-40 h-40 md:w-72 md:h-80"
          />
          <div className="flex flex-col space-y-4 w-full">
            <div className="w-full">
              <label className="block text-gray-700">Periods per day:</label>
              <select className="mt-1 block w-full p-4 border-2 border-black rounded-md shadow-sm">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            </div>
            <button className="mt-6 bg-blue-500 text-white rounded-md p-4 w-full md:w-auto">
              Bell times / Rename periods
            </button>
            <div className="w-full">
              <label className="block text-gray-700">Number of days:</label>
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
            <button className="mt-6 bg-blue-500 text-white rounded-md p-4 w-full md:w-auto">
              Rename days
            </button>
            <div className="w-full">
              <label className="block text-gray-700">Weekend:</label>
              <select className="mt-1 block w-full p-4 border-2 border-black rounded-md shadow-sm">
                <option>Monday - Saturday</option>
                <option>Tuesday - Saturday</option>
                <option>Friday - Monday</option>
                <option>Saturday - Sunday</option>
                <option>Saturday - Sunday</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <hr className="h-0.5 bg-black" />
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
        <img
          src="/dashboard/calender.png"
          alt="Multi Term Icon"
          className="w-40 h-40 md:w-72 md:h-80"
        />
        <div className="flex-1">
          <label className="block text-gray-700">
            <input type="checkbox" className="mr-2" /> I want to create a
            multi-term or multi-week timetable that will be different in each
            week or term
          </label>
        </div>
      </div>

      <div className="mt-6 flex flex-col md:flex-row justify-around space-y-4 md:space-y-0">
        <button className="bg-gray-300 text-gray-700 rounded-md py-2 px-4 w-full md:w-auto">
          Previous
        </button>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2 w-full md:w-auto">
          <button className="bg-blue-500 text-white rounded-md py-2 px-4 w-full md:w-auto">
            Next
          </button>
          <button className="bg-gray-300 text-gray-700 rounded-md py-2 px-4 w-full md:w-auto">
            Close
          </button>
        </div>
      </div>
    </form>
  );
};

export default ConfigClasses;
