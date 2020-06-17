import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap bg-gray-900 p-6 xl:px-64">
        <div class="flex items-center text-white mr-6">
          <Link to="/" class="font-semibold text-xl tracking-wide">
            GangjunDev
          </Link>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-md lg:flex-grow">
            <Link
              to="/"
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
            >
              AboutMe
            </Link>
            <Link
              to="/"
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
            >
              Services
            </Link>
            <Link
              to="/"
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
            >
              Contact
            </Link>
          </div>

          <div>
            <Link
              to="/signup"
              class="inline-block text-md px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-white mt-4 lg:mt-0"
            >
              account
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
