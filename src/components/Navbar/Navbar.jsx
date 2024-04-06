import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { auth } from "../../FirebaseAuth/FirebaseAuth";
import toast from "react-hot-toast";

const Navbar = ({ cart, userName }) => {
  //Logout Functionality
  const handelLogout = () => {
    auth
      .signOut(auth)
      .then(() => {
        toast.success("Sign-out successful.");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <div>
        <nav class="bg-white border-gray-200 border-b   w-full   ">
          <div class="max-w-screen-xl flex flex-wrap items-center  justify-between mx-auto p-4">
            <Link to="/">
              <a
                href=""
                class="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <img
                  src="src/assets/Logo/Logo.png"
                  class="h-8"
                  alt="Funky.com"
                />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  eShop
                  <span class="self-center text-2xl font-semibold whitespace-nowrap text-green-700">
                    .Com
                  </span>
                </span>
              </a>
            </Link>
            <div class="flex md:order-2 space-x-3 md:space-x-0 ">
              {userName ? (
                <Link to="/login">
                  <button
                    onClick={handelLogout}
                    type="button"
                    class="text-white bg-teal-400 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Logout
                  </button>
                  <span className="pl-4 cursor-pointer">{userName}</span>
                </Link>
              ) : (
                <Link to="/login">
                  <button
                    type="button"
                    class="text-white bg-teal-400 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Login
                  </button>
                </Link>
              )}

              {/* Cart Here */}

              <div className="px-6">
                <span class=" gap-4   px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  <span className="px-3  bg-red-400 rounded-full  items-center font-bold text-white ">
                    {cart.length}
                  </span>

                  <Link to="/cart">
                    <MdOutlineShoppingCart className=" inline-flex  w-9 h-9 " />
                  </Link>
                </span>

                <div></div>
              </div>
            </div>

            <div
              class="items-center justify-between  w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <Link to="/">
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-3 md:p-0 text-gray-900  rounded md:bg-transparent md:hover:text-blue-700  md:dark:text-blue-500"
                    >
                      Home
                    </a>
                  </li>
                </Link>

                <Link to="/allproducts">
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      All Products
                    </a>
                  </li>
                </Link>
                <Link to="/about">
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      About
                    </a>
                  </li>
                </Link>
                <Link to="/contact">
                  <li>
                    <a
                      href="#contact"
                      class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "
                    >
                      Contact
                    </a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
