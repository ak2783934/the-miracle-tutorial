import React, { useState } from "react";

const Navbar = () => {
  const myClass = [
    "hidden w-full md:flex md:items-center md:w-auto ",
    "block w-full md:flex md:items-center md:w-auto ",
  ];
  const [cnt, setCnt] = useState(0);

  return (
    <header>
      <nav className="flex flex-wrap items-center justify-between w-full px-5 py-1 text-lg text-gray-700 bg-white">
        <div>
          <a href="/" className="flex flex-row items-center">
            <img
              src="/tmt.png"
              className="h-8 w-14 sm:h-10 sm:w-20"
              alt="tmt"
            />
            <div className="hidden pl-3 font-bold md:block">
              THE MIRACLE TUTORIAL
            </div>
          </a>
        </div>

        <div className="font-bold md:hidden">THE MIRACLE TUTORIAL</div>
        <div
          onClick={() => {
            setCnt(cnt ? 0 : 1);
          }}
        >
          <svg
            xmlns="<http://www.w3.org/2000/svg>"
            id="menu-button"
            className="block w-6 h-6 cursor-pointer md:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className={myClass[cnt]} id="menu">
          <ul className="pt-4 text-base font-bold text-gray-700 md:flex md:justify-between md:pt-0">
            <li>
              <a
                className="block py-2 md:p-4 hover:text-hoverColor hover:underline"
                href="/#"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                className="block py-2 md:p-4 hover:text-hoverColor hover:underline"
                href="/#boards"
              >
                COURSES
              </a>
            </li>
            <li>
              <a
                className="block py-2 md:p-4 hover:text-hoverColor hover:underline"
                href="/admission"
              >
                ADMISSION
              </a>
            </li>
            <li>
              <a
                className="block py-2 md:p-4 hover:text-hoverColor hover:underline"
                href="/gallery"
              >
                GALLERY
              </a>
            </li>
            <li>
              <a
                className="block py-2 md:p-4 hover:text-hoverColor hover:underline"
                href="/#aboutus"
              >
                ABOUT US
              </a>
            </li>
            <li>
              <a
                className="block py-2 md:p-4 hover:text-hoverColor hover:underline"
                href="/#contactus"
              >
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
