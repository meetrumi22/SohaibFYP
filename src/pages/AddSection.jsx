import React from "react";

const AddSection = () => {
  return (
    <div className="bg-slate-200">
      <div className="bg-green-400 rounded-md">
        <button className=" text-white">New Entry</button>
      </div>
      <div>
        <input
          className="p-4 text-xl text-black"
          placeholder="Enter Section Name"
        />
      </div>
    </div>
  );
};

export default AddSection;
