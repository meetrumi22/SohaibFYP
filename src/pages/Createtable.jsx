import React from "react";
import { Link } from "react-router-dom";

const Createtable = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
            Create Your TimeTable
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/2 cursor-pointer hover:bg-blue-500 hover:text-white">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="/dashboard/teacher.png"
              />
              <Link to={"showteacher"}>
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg hover:text-white">
                    Teacher
                  </h2>
                  <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="p-4 lg:w-1/2 cursor-pointer hover:bg-blue-500 hover:text-white">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="/dashboard/class.png"
              />
              <Link to={"showclass"}>
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg hover:text-white">
                    Classes
                  </h2>
                  <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="p-4 lg:w-1/2 cursor-pointer hover:bg-blue-500 hover:text-white">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="/dashboard/book.png"
              />
              <Link to={"showsubject"}>
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg hover:text-white">
                    Subject
                  </h2>
                  <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="p-4 lg:w-1/2 cursor-pointer hover:bg-blue-500 hover:text-white ">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="/dashboard/section.png"
              />
              <Link to={"showsection"}>
                <div className="flex-grow sm:pl-8 ">
                  <h2 className="title-font font-medium text-lg hover:text-white ">
                    Section
                  </h2>
                  <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Createtable;
