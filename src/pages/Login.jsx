import React from "react";

const Login = () => {
  return (
    // <section className="text-gray-600 body-font relative">
    //   <div className="container px-5 py-24 mx-auto">
    //     <div className="lg:w-1/2 md:w-2/3 mx-auto">
    //       <div classNameName="">
    //         <h1 className="font-bold text-2xl text-center ">Login :</h1>
    //       </div>
    //       <div className="flex justify-center items-center flex-col -m-2">
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
    <section class="text-gray-600 body-font">
      <div class="container px-5 flex flex-row items-center ">
        <img src="/loginImage.png" />
        <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
            Login
          </h2>
          <div class="relative mb-4">
            <label for="full-name" class="leading-7 text-sm text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button class="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
            Login
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
