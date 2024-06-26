import React from "react";

const Signup = () => {
  return (
    // <section className="text-gray-600 body-font relative">
    //   <div className="container px-5 py-24 mx-auto">
    //     <div className="lg:w-1/2 md:w-2/3 mx-auto">
    //       <div classNameName="">
    //         <h1 className="font-bold text-2xl text-center ">Signup :</h1>
    //       </div>
    //       <div className="flex justify-center items-center flex-col -m-2">
    //         <div className="p-2 w-1/2">
    //           <div className="relative">
    //             <label for="name" className="leading-7 text-sm text-gray-600">
    //               Name
    //             </label>
    //             <input
    //               type="text"
    //               id="name"
    //               name="name"
    //               className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //             />
    //           </div>
    //         </div>
    //         <div className="p-2 w-1/2 ">
    //           <div className="relative">
    //             <label for="email" className="leading-7 text-sm text-gray-600">
    //               Email
    //             </label>
    //             <input
    //               type="email"
    //               id="email"
    //               name="email"
    //               className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //             />
    //           </div>
    //         </div>

    //         <div className="p-2 w-1/2">
    //           <div className="relative">
    //             <label
    //               for="password"
    //               className="leading-7 text-sm text-gray-600"
    //             >
    //               Password
    //             </label>
    //             <input
    //               type="password"
    //               id="password"
    //               name="password"
    //               className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //             />
    //           </div>
    //         </div>

    //         <div className="p-2 w-full">
    //           <button className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
    //             Button
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="text-gray-600 body-font">
      <div className="container px-5 flex flex-row items-center ">
        <img src="/signupImage.png" />
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Sign Up
          </h2>
          <div className="relative mb-4">
            <label for="full-name" className="leading-7 text-sm text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
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
          <button className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
            Sign Up
          </button>
          <div className="mt-4 flex space-x-4 items-center">
            <p className="underline">already have an account?</p>
            <button className="bg-blue-500 p-2 text-white rounded">
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
