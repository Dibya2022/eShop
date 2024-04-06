import React from "react";

const Hero = () => {
  return (
    <>
      <div>
        <img src="src/assets/Banner/banner.jpg" alt="banner" />

        <div className="absolute top-[30%] right-1/2 ">
          <span className="text-white text-4xl font-Poppins px-40  ">
            Summer Outfit
          </span>
          <h1 className="text-white text-6xl font-bold font-weight: 800 ">
            FLASH SALE 70% OFF
          </h1>

          <button class=" mt-3 ml-56 h-10 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-full focus:shadow-outline hover:bg-cyan-400 hover:text-indigo-100">
            Shop Now
          </button>
        </div>
      </div>

      <div>
        <section class="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
          <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-md text-center">
              <h2 class="font-serif text-2xl font-bold sm:text-3xl">
                NEW ARRIVALS
              </h2>
              <p class="mt-4 text-base text-gray-700">
                “This fashion product is made of this “special fabric” which
                will make you feel like you are not wearing anything on the hot
                summer days. – Benefit is that if the customer buys it, the
                fabric will help to relax and have a better life.
              </p>
            </div>

            <div class="mt-10 grid grid-cols-2 gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-4">
              <article class="relative">
                <div class="aspect-square overflow-hidden">
                  <img
                    class="group-hover:scale-125 h-full w-full object-cover transition-all duration-300"
                    src="src/assets/BannerShirt/shirt-1.jpg"
                    alt=""
                  />
                </div>
                <div class="absolute top-0 m-1 rounded-full bg-white">
                  <p class="text-[10px] rounded-full bg-teal-400 p-1 font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">
                    New Arrival
                  </p>
                </div>
                <div class="mt-4 flex items-start justify-between">
                  <div class="">
                    <h3 class="text-xs font-semibold sm:text-sm md:text-base">
                      <a href="#" title="" class="cursor-pointer">
                        Arabian Musk
                        <span class="absolute" aria-hidden="true"></span>
                      </a>
                    </h3>
                    <div class="mt-2 flex items-center">
                      <svg
                        class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          class=""
                        ></path>
                      </svg>
                      <svg
                        class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          class=""
                        ></path>
                      </svg>
                      <svg
                        class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          class=""
                        ></path>
                      </svg>
                      <svg
                        class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          class=""
                        ></path>
                      </svg>
                      <svg
                        class="block h-3 w-3 align-middle text-gray-400 sm:h-4 sm:w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          class=""
                        ></path>
                      </svg>
                    </div>
                  </div>

                  <div class="text-right">
                    <del class="mt-px text-xs font-semibold text-gray-600 sm:text-sm">
                      {" "}
                      $99.00{" "}
                    </del>
                    <p class="text-xs font-normal sm:text-sm md:text-base">
                      $79.00
                    </p>
                  </div>
                </div>
              </article>

              <article class="relative">
                <div class="aspect-square overflow-hidden">
                  <img
                    class="group-hover:scale-125 h-full w-full object-cover transition-all duration-300"
                    src="src/assets/BannerShirt/shirt-2.jpg"
                    alt=""
                  />
                </div>
                <div class="absolute top-0 m-1 rounded-full bg-white">
                  <p class="text-[10px] rounded-full bg-teal-400 p-1 font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">
                    New Arrival
                  </p>
                </div>
                <div class="mt-4 flex items-start justify-between">
                  <div class="">
                    <h3 class="text-xs font-semibold sm:text-sm md:text-base">
                      <a href="#" title="" class="cursor-pointer">
                        Albanian Essence
                        <span class="absolute" aria-hidden="true"></span>
                      </a>
                    </h3>
                    <div class="mt-2 flex items-center">
                      <svg
                        class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          class=""
                        ></path>
                      </svg>
                      <svg
                        class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          class=""
                        ></path>
                      </svg>
                      <svg
                        class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          class=""
                        ></path>
                      </svg>
                      <svg
                        class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          class=""
                        ></path>
                      </svg>
                      <svg
                        class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          class=""
                        ></path>
                      </svg>
                    </div>
                  </div>

                  <div class="text-right">
                    <p class="text-xs font-normal sm:text-sm md:text-base">
                      $299.00
                    </p>
                  </div>
                </div>
              </article>

              <article class="relative">
                <div class="aspect-square overflow-hidden">
                  <img
                    class="group-hover:scale-125 h-full w-full object-cover transition-all duration-300"
                    src="src/assets/BannerShirt/shirt-3.jpg"
                    alt=""
                  />
                </div>
                <div class="absolute top-0 m-1 rounded-full bg-white">
                  <p class="text-[10px] rounded-full bg-teal-400 p-1 font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">
                    New Arrival
                  </p>
                </div>
                <div class="mt-4 flex items-start justify-between">
                  <div class="">
                    <h3 class="text-xs font-semibold sm:text-sm md:text-base">
                      <a href="#" title="" class="cursor-pointer">
                        Siberian Perfum
                        <span class="absolute" aria-hidden="true"></span>
                      </a>
                    </h3>
                    <div class="mt-2 flex items-center">
                      <svg
                        class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          class=""
                        ></path>
                      </svg>
                      <svg
                        class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          class=""
                        ></path>
                      </svg>
                      <svg
                        class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          class=""
                        ></path>
                      </svg>
                      <svg
                        class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          class=""
                        ></path>
                      </svg>
                      <svg
                        class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          class=""
                        ></path>
                      </svg>
                    </div>
                  </div>

                  <div class="text-right">
                    <p class="text-xs font-normal sm:text-sm md:text-base">
                      $49.00
                    </p>
                  </div>
                </div>
              </article>

              <article class="relative">
                <div class="aspect-square overflow-hidden">
                  <img
                    class="group-hover:scale-125 h-full w-full object-cover transition-all duration-300"
                    src="src/assets/BannerShirt/shirt-4.jpg"
                    alt=""
                  />
                </div>
                <div class="absolute top-0 m-1 rounded-full bg-white">
                  <p class="text-[10px] rounded-full bg-teal-400 p-1 font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">
                    New Arrival
                  </p>
                </div>
                <div class="mt-4 flex items-start justify-between">
                  <div class="">
                    <h3 class="text-xs font-semibold sm:text-sm md:text-base">
                      <a href="#" title="" class="cursor-pointer">
                        Danish Levoune
                        <span class="absolute" aria-hidden="true"></span>
                      </a>
                    </h3>
                    <div class="mt-2 flex items-center">
                      <svg
                        class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          class=""
                        ></path>
                      </svg>
                      <svg
                        class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          class=""
                        ></path>
                      </svg>
                      <svg
                        class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          class=""
                        ></path>
                      </svg>

                      <svg
                        class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          class=""
                        ></path>
                      </svg>

                      <svg
                        class="block h-3 w-3 align-middle text-gray-400 sm:h-4 sm:w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          class=""
                        ></path>
                      </svg>
                    </div>
                  </div>

                  <div class="text-right">
                    <p class="text-xs font-normal sm:text-sm md:text-base">
                      $79.00
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
      {/* Gallery Section */}
      <section>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="flex w-full mb-20 flex-wrap">
              <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
                Product Gallery
              </h1>
              <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven't heard of them man bun deep jianbing selfies heirloom.
              </p>
            </div>
            <div class="flex flex-wrap md:-m-2 -m-1">
              <div class="flex flex-wrap w-1/2">
                <div class="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
                    src="src\assets\Gallery\img1.jpg"
                  />
                </div>
                <div class="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
                    src="src\assets\Gallery\img-2.jpg"
                  />
                </div>
                <div class="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    class="w-full h-full object-cover object-center block transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
                    src="src\assets\Gallery\img-3.jpg"
                  />
                </div>
              </div>
              <div class="flex flex-wrap w-1/2">
                <div class="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    class="w-full h-full object-cover object-center block transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
                    src="src\assets\Gallery\img-4.jpg"
                  />
                </div>
                <div class="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
                    src="src\assets\Gallery\img-5.jpg"
                  />
                </div>
                <div class="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
                    src="src\assets\Gallery\img-6.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* Contact Us  */}
    </>
  );
};

export default Hero;
