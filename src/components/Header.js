import React, { useState } from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-[#eee] text-gray-700 dark:bg-gray-800 dark:text-gray-100">
      <div className="flex justify-between items-center px-4 py-2 sm:px-6 sm:py-3">
        <div className=" flex justify-between items-center">
          <img src={Logo} alt="Logo" className="w-24" />
          <h1 className=" ml-3 text-3xl font-bold ">TRS-AI</h1>
        </div>

        <nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          <ul
            className={`md:flex md:space-x-8 ${menuOpen ? "block" : "hidden"} md:block`}
          >
            <li>
              <Link
                to="/"
                className="block py-2 px-4 bg-gray-600 text-white hover:bg-gray-700 hover:scale-105 rounded-md dark:text-gray-200 dark:hover:bg-gray-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/members"
                className="block py-2 px-4 bg-gray-600 text-white hover:bg-gray-700 hover:scale-105 rounded-md dark:text-gray-200 dark:hover:bg-gray-500"
              >
                Members
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block py-2 px-4 bg-gray-600 text-white hover:bg-gray-700 hover:scale-105 rounded-md dark:text-gray-200 dark:hover:bg-gray-500"
              >
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
