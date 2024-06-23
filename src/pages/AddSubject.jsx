import React from "react";

const AddSubject = () => {
  return (
    <div className="bg-white p-4 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-6">Add Subject</h1>
      <div className="bg-blue-200 flex flex-col items-center py-10 md:py-20 container mx-auto px-4">
        <div className="w-full max-w-md">
          <input
            className="w-full p-4 text-xl text-black border border-black rounded-md outline-none focus:ring-2 focus:ring-bluee-500 focus:border-transparent"
            placeholder="Enter Class Name"
          />
        </div>
        <div className="bg-blue-400 rounded-md p-4 mt-4 w-full max-w-md">
          <button className="text-white w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-md">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSubject;
