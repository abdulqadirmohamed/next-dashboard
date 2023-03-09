import React from "react";
import Head from "next/head";
import Header from "@/components/Header";

const newpost = () => {
  return (
    <>
      <Head>
        <title>New Post</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="w-[95%] mx-auto">
        <h1 className="text-xl font-bold text-gray-700 my-4">Add New Post</h1>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="md:col-span-3">
            <div className="my-2">
              <input
                type="text"
                className="w-full border-[1px] border-gray-400 rounded-sm py-2 px-4 outline-none "
                placeholder="Enter title here"
              />
            </div>
            <div className=" my-2">
              <textarea
                name=""
                id=""
                className="w-full border-[1px] border-gray-400 rounded-sm py-2 px-4 outline-none "
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>

          {/* side */}
          <div className="">
            <div className="relative border-[1px] h-36 border-gray-400 rounded-sm p-2">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an option
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option selected>Public</option>
                <option value="US">Draft</option>
              </select>

              <button className="absolute bottom-0 right-1 bg-indigo-700 text-white px-4 py-2 mt-8 mb-2 rounded hover:bg-indigo-800 transition-all duration-150 ease-linear">
                Publish
              </button>
            </div>
            <div className="my-4 border-[1px]  border-gray-400 rounded-sm p-2">
              <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                Category
              </h3>
              <ul className="w-48 text-sm font-medium py-4 text-gray-900    dark:text-white">
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="vue-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 "
                    />
                    <label
                      for="vue-checkbox"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Africa
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="react-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 outline-none rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                    />
                    <label
                      for="react-checkbox"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Technology
                    </label>
                  </div>
                </li>
              
            
              </ul>
            </div>

            <div>3</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default newpost;
