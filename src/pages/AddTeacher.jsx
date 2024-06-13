import React from "react";

const AddTeacher = () => {
  return (
    <div className="bg-slate-200">
      <div className="bg-green-400 rounded-md">
        <button className=" text-white">New Entry</button>
      </div>
      <div>
        <input
          className="p-4 text-xl text-black"
          placeholder="Enter Teacher Names"
        />
      </div>
    </div>
  );
};

export default AddTeacher;
