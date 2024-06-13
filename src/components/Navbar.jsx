import React, { useState } from "react";
import { Link } from "react-router-dom";
import Signup from "../pages/Signup";
import AddTeacher from "../pages/AddTeacher";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            src="/logo.jpg"
            className="w-14 h-14 object-cover rounded-full"
          />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg" 
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg> */}
          <span class="ml-3 text-xl">TTMS</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" class="mr-5 hover:text-gray-900">
            <span
              onClick={() => setisOpen(false)}
              className="hover:bg-blue-500 hover:text-white p-4"
            >
              Home
            </span>
          </Link>
          <Link to="/createtable" class="mr-5 hover:text-gray-900">
            <div className="relative">
              <button onClick={() => setisOpen((prev) => !prev)}>
                <span className="hover:bg-blue-500 hover:text-white p-4">
                  Create Table ↓
                </span>
                <div className=" absolute bg-slate-100 w-60 ml-[-56px] mt-4">
                  {isOpen && (
                    <div className="">
                      <Link to={"addteacher"}>
                        <h1 className="hover:bg-blue-500 hover:text-white p-4 hover:text-xl">
                          Add Teacher
                        </h1>
                      </Link>
                      <h1 className="hover:bg-blue-500 hover:text-white p-4 hover:text-xl">
                        Add Class
                      </h1>
                      <h1 className="hover:bg-blue-500 hover:text-white p-4 hover:text-xl">
                        Add Subject
                      </h1>
                      <h1 className="hover:bg-blue-500 hover:text-white p-4 hover:text-xl">
                        Add Section
                      </h1>
                      <h1 className="hover:bg-blue-500 hover:text-white p-4 hover:text-xl">
                        Configure Teacher
                      </h1>
                      <h1 className="hover:bg-blue-500 hover:text-white p-4 hover:text-xl">
                        Configure Class
                      </h1>
                    </div>
                  )}
                </div>
              </button>
            </div>
          </Link>
          <Link to="#" class="mr-5 hover:text-gray-900">
            <span
              onClick={() => setisOpen(false)}
              className="hover:bg-blue-500 hover:text-white p-4"
            >
              View Table
            </span>
          </Link>
          {/* <a class="mr-5 hover:text-gray-900">Third Link</a>
          <a class="mr-5 hover:text-gray-900">Fourth Link</a> */}
          <div className="space-x-4">
            <Link to={"/login"}>
              <button
                onClick={() => setisOpen(false)}
                class="inline-flex items-center hover:text-white bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-base mt-4 md:mt-0"
              >
                Login
              </button>
            </Link>
            <Link to={"/signup"}>
              <button
                onClick={() => setisOpen(false)}
                class="inline-flex items-center hover:text-white bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-base mt-4 md:mt-0"
              >
                Signup
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
