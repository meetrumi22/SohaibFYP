import React from "react";
import { useState } from "react";
const Login = () => {
  const [name, setName] = useState("");

  const getCredentials = (e) => {
    setName(e.target.value);
    storeToLocalStorage();
  };

  const storeToLocalStorage = () => {
    localStorage.setItem("name", JSON.stringify(name));
  };

  return (
    <form className="text-gray-600 body-font">
      <div className="container px-5 flex flex-row items-center ">
        <img src="/loginImage.png" />
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Login
          </h2>
          <div className="relative mb-4">
            <label for="email" className="leading-7 text-sm text-gray-600">
              Category
            </label>
            <select className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              <option>Admin</option>
              <option>Class Cordinator</option>
              <option>Faculty Member</option>
              <option>Student</option>
            </select>
          </div>
          <div className="relative mb-4">
            <label for="full-name" className="leading-7 text-sm text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              onChange={getCredentials}
              value={name}
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label for="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label for="password" className="leading-7 text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="p-2 mb-3 text-center text-red-500 text-xl">
            <p>Forgot Password</p>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
          >
            Login
          </button>
          <div className="mt-4 flex space-x-4 items-center">
            <p className="underline">don't have account</p>
            <button className="bg-blue-500 p-2 text-white rounded">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
