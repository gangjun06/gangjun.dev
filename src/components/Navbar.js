import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { Link as ReactScrollLink, animateScroll as scroll } from "react-scroll";

export default () => {
  let [isOpen, setIsOpen] = useState(false);
  let [isTop, setIsTop] = useState(true);

  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset < 0) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };
  }, []);

  const navMenu = [
    { name: "About Me", link: "About" },
    { name: "Projects", link: "Projects" },
    { name: "Contact", link: "Contact" },
  ];

  const BuildMenu = () => {
    const menuList = navMenu.map((item, index) => (
      <ReactScrollLink
        key={index}
        activeClass="active"
        to={item.link}
        spy={true}
        smooth={true}
        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4 cursor-pointer"
      >
        {item.name}
      </ReactScrollLink>
    ));
    if (isMobile) {
      return <></>;
    }
    return <div className="text-md lg:flex-grow">{menuList}</div>;
  };

  return (
    <div>
      <nav
        className="flex items-center justify-between flex-wrap bg-gray-900 p-6 xl:px-64 z-50 fixed w-full opacityAnimation"
        style={{
          "--bg-opacity": isTop ? "0" : "0.75",
        }}
      >
        <div className="flex items-center text-white mr-6">
          <Link
            to="/"
            className="font-semibold text-xl tracking-wide"
            onClick={scroll.scrollToTop}
          >
            GangjunDev
          </Link>
        </div>
        <div className="block"></div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <BuildMenu />
        </div>
      </nav>
    </div>
  );
};
