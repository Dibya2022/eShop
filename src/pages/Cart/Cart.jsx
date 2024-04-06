import React from "react";
import { useRef } from "react";

import { CiCircleRemove } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ModalSection from "../../components/ModalSection/ModalSection";
import CartEmpty from "../../components/CartEmpty/CartEmpty";

const Cart = ({
  cart,
  handleInc,
  handleDec,
  handleRemove,
  getTotalPrice,
  applyPromoCode,
  promocode,
  setPromocode,
  invalid,
}) => {
  const navigate = useNavigate();

  return (
    <>
      {!cart.length ? (
        <CartEmpty />
      ) : (
        <section class=" relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
          <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
            <div class="grid grid-cols-12">
              <div class="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
                <div class="flex items-center justify-between pb-8 border-b border-gray-300">
                  <h2 class="font-manrope font-bold text-3xl leading-10 text-black">
                    Shopping Cart
                  </h2>
                  <h2 class="font-manrope font-bold text-3xl leading-10 text-black">
                    {cart.length} Items
                  </h2>
                </div>
                <div class="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
                  <div class="col-span-12 md:col-span-7">
                    <p class="font-normal text-lg leading-8 text-gray-400">
                      Product Details
                    </p>
                  </div>
                  <div class="col-span-12 md:col-span-5">
                    <div class="grid grid-cols-5">
                      <div class="col-span-3">
                        <p class="font-normal text-lg leading-8 text-gray-400 text-center">
                          Quantity
                        </p>
                      </div>
                      <div class="col-span-2">
                        <p class="font-normal text-lg leading-8 text-gray-400 text-center">
                          Total
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* cart section start */}

                {cart.map((cartItem, index) => (
                  <div
                    key={cartItem.id}
                    class="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200"
                  >
                    <div class="w-full md:max-w-[126px]">
                      <img
                        src={cartItem.thumbnail}
                        alt="perfume bottle image"
                        class="mx-auto"
                      />
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-4 w-full">
                      <div class="md:col-span-2">
                        <div class="flex flex-col max-[500px]:items-center gap-3">
                          <h6 class="font-semibold text-base leading-7 text-black">
                            {cartItem.title}
                          </h6>
                          <h6 class="font-normal text-base leading-7 text-gray-500">
                            {cartItem.category}
                          </h6>
                          <h6 class="font-semibold text-base leading-7 text-indigo-600">
                            ${cartItem.price}
                          </h6>
                          <CiCircleRemove
                            className="cursor-pointer"
                            onClick={() => handleRemove(cartItem.id)}
                          />
                        </div>
                      </div>
                      <div class="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                        <div class="flex items-center h-full">
                          <button class="group rounded-l-full px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                            <svg
                              onClick={() => handleDec(cartItem.id)}
                              class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                            >
                              <path
                                d="M16.5 11H5.5"
                                stroke=""
                                stroke-width="1.6"
                                stroke-linecap="round"
                              />
                              <path
                                d="M16.5 11H5.5"
                                stroke=""
                                stroke-opacity="0.2"
                                stroke-width="1.6"
                                stroke-linecap="round"
                              />
                              <path
                                d="M16.5 11H5.5"
                                stroke=""
                                stroke-opacity="0.2"
                                stroke-width="1.6"
                                stroke-linecap="round"
                              />
                            </svg>
                          </button>
                          <input
                            type="text"
                            class="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent"
                            placeholder={cartItem.quantity}
                          />
                          <button
                            class="group rounded-r-full px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                            onClick={() => handleInc(cartItem.id)}
                          >
                            <svg
                              class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                            >
                              <path
                                d="M11 5.5V16.5M16.5 11H5.5"
                                stroke=""
                                stroke-width="1.6"
                                stroke-linecap="round"
                              />
                              <path
                                d="M11 5.5V16.5M16.5 11H5.5"
                                stroke=""
                                stroke-opacity="0.2"
                                stroke-width="1.6"
                                stroke-linecap="round"
                              />
                              <path
                                d="M11 5.5V16.5M16.5 11H5.5"
                                stroke=""
                                stroke-opacity="0.2"
                                stroke-width="1.6"
                                stroke-linecap="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div class="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                        <p class="font-bold text-lg leading-8 text-indigo-600 text-center">
                          ${cartItem.price * cartItem.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* cart section end */}
                <div class="flex items-center justify-start mt-8">
                  <button
                    onClick={() => navigate("/allproducts")}
                    class="flex items-center px-5 py-3 rounded-full gap-2 border-none outline-0 font-semibold text-lg leading-8 text-indigo-600 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-indigo-300 hover:bg-indigo-50"
                  >
                    <FaArrowLeft />
                    Continue Shoping
                  </button>
                </div>
              </div>
              <div class=" col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
                <h2 class="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
                  Order Summary
                </h2>
                <div class="mt-8">
                  <div class="flex items-center justify-between pb-6">
                    <p class="font-normal text-lg leading-8 text-black">
                      {cart.length} Items
                    </p>
                    <p class="font-medium text-lg leading-8 text-black">
                      ${getTotalPrice()}
                    </p>
                  </div>
                  <section>
                    <label class="flex  items-center mb-1.5 text-gray-600 text-sm font-medium">
                      Shipping
                    </label>
                    <div class="flex pb-6">
                      <div class="relative w-full">
                        <div class=" absolute left-0 top-0 py-3 px-4">
                          <span class="font-normal text-base text-gray-300">
                            Standard Delivery
                          </span>
                        </div>
                        <input
                          type="text"
                          class="block w-full h-11 pr-10 pl-36 min-[500px]:pl-52 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-gray-400"
                          placeholder="$10.00"
                        />
                      </div>
                    </div>
                    <label class="flex items-center mb-1.5 text-gray-400 text-sm font-medium">
                      Promo Code
                    </label>
                    <div class="flex pb-4 w-full">
                      <div class="relative w-full ">
                        <div class=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
                        <input
                          value={promocode}
                          onChange={(e) => setPromocode(e.target.value)}
                          type="text"
                          class="block w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                          placeholder="xxxx xxxx xxxx"
                        />
                        {promocode && promocode !== "DIBYA10" ? (
                          <span class=" px-2 mt-4 text-red-500">{invalid}</span>
                        ) : (
                          <span className="px-2 mt-4">use DIBYA10</span>
                        )}
                        <hr />
                        {promocode === "DIBYA10" && (
                          <span class=" px-2 mt-4 text-green-500">
                            Promo code applied successfully! You saved $10.
                          </span>
                        )}
                      </div>
                    </div>
                    <div class="flex items-center border-b border-gray-200">
                      <button
                        class="rounded-full w-full bg-black py-3 px-4 text-white text-sm font-semibold text-center mb-8 transition-all duration-500 hover:bg-black/80"
                        onClick={applyPromoCode}
                      >
                        Apply
                      </button>
                    </div>
                    <div class="flex items-center justify-between py-8">
                      <p class="font-medium text-xl leading-8 text-black">
                        Total Cost
                      </p>
                      <p class="font-semibold text-xl leading-8 text-indigo-600">
                        ${getTotalPrice() + 10}
                      </p>
                    </div>

                    <ModalSection />
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Cart;
