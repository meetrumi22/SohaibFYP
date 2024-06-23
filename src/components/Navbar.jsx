import React, { useState } from "react";
import { Link } from "react-router-dom";
import Signup from "../pages/Signup";
import AddTeacher from "../pages/AddTeacher";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <header className="text-gray-600 body-font ">
      <div className=" bg-blue-500 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
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
            className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg> */}
          <span className="ml-3 text-white text-xl">TTMS</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link
            to="/"
            onClick={() => setisOpen(false)}
            className="mr-5 bg-blue-600 p-4 text-white hover:bg-white hover:text-blue-500"
          >
            <span className="">Home</span>
          </Link>
          <Link
            to="#"
            onClick={() => setisOpen((prev) => !prev)}
            className="mr-5 bg-blue-600 p-4 text-white hover:bg-white hover:text-blue-500"
          >
            <div className="relative">
              <button>
                <span className="">Create Table ↓</span>
                <div className=" absolute bg-blue-500 text-white w-60 ml-[-60px] mt-9">
                  {isOpen && (
                    <div className="">
                      <Link to={"/addteacher"} className="">
                        <h1 className="hover:bg-white hover:text-blue-500  p-4">
                          Add Teacher
                        </h1>
                      </Link>
                      <Link to={"/addclass"} className="">
                        <h1 className="hover:bg-white hover:text-blue-500  p-4">
                          Add Class
                        </h1>
                      </Link>
                      <Link to={"/addsubject"} className="">
                        <h1 className="hover:bg-white hover:text-blue-500  p-4">
                          Add Subject
                        </h1>
                      </Link>
                      <Link to={"/addsection"} className="">
                        <h1 className="hover:bg-white hover:text-blue-500  p-4">
                          Add Section
                        </h1>
                      </Link>
                      <Link to={"/configclass"} className="">
                        <h1 className="hover:bg-white hover:text-blue-500  p-4">
                          Configure Class
                        </h1>
                      </Link>

                      <Link to={"/configteacher"} className="">
                        <h1 className="hover:bg-white hover:text-blue-500  p-4">
                          Configure Teacher
                        </h1>
                      </Link>
                    </div>
                  )}
                </div>
              </button>
            </div>
          </Link>
          <Link
            onClick={() => setisOpen(false)}
            to="/createtable"
            className="mr-5 bg-blue-600 p-4 text-white hover:bg-white hover:text-blue-500"
          >
            <span className="">View Table</span>
          </Link>
          {/* <a className="mr-5 hover:text-gray-900">Third Link</a>
          <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
          <div className="space-x-4">
            <Link to={"/login"}>
              <button
                onClick={() => setisOpen(false)}
                className="inline-flex items-center hover:text-white bg-gray-100 border-0 p-4 focus:outline-none hover:bg-blue-600 rounded text-base mt-4 md:mt-0"
              >
                Login
              </button>
            </Link>
            <Link to={"/signup"}>
              <button
                onClick={() => setisOpen(false)}
                className="inline-flex items-center hover:text-white bg-gray-100 border-0 p-4 focus:outline-none hover:bg-blue-600 rounded text-base mt-4 md:mt-0"
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
