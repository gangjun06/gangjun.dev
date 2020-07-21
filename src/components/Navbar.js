import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";

export default () => {
  let [isOpen, setIsOpen] = useState(false);
  const navMenu = [
    { name: "About Me", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Etc", link: "#etc" },
  ];

  const BuildMenu = () => {
    const menuList = navMenu.map((item, index) => (
      <Link
        key={index}
        to={item.link}
        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
      >
        {item.name}
      </Link>
    ));
    if (isMobile) {
      return isOpen ? (
        <div className="text-md lg:flex-grow">{menuList}</div>
      ) : (
        <></>
      );
    }
    return <div className="text-md lg:flex-grow">{menuList}</div>;
  };

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6 xl:px-64 z-50 fixed w-full">
        <div className="flex items-center text-white mr-6">
          <Link to="/" className="font-semibold text-xl tracking-wide">
            GangjunDev
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <BuildMenu />
          {/* <div>
            <Link
              to="/account"
              className="inline-block text-md px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-white mt-4 lg:mt-0"
            >
              account
            </Link>
          </div> */}
        </div>
      </nav>
    </div>
  );
};
