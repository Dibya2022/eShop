import React from "react";

const About = () => {
  return (
    <body class="font-inter">
      <section class="py-14 lg:py-24 relative z-0 bg-gray-50">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 class="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl  text-gray-900 mb-5 md:text-5xl md:leading-normal">
            Makes you feel like shopping.{" "}
            <span class="text-black-600">eShop</span>
            <span className="text-green-600">.Com</span>
          </h1>
          <p class="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
            We Make Shopping Easy – So You Can Shop More.Shop With
            Confidence—Our Returns Policy Is Second To None!
          </p>
        </div>
      </section>

      <section class="py-14 lg:py-24 relative">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div class="img-box">
              <img
                src="https://pagedone.io/asset/uploads/1702034769.png"
                alt="About Us tailwind page"
                class="max-lg:mx-auto"
              />
            </div>
            <div class="lg:pl-[100px] flex items-center">
              <div class="data w-full">
                <h2 class="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                  About Us{" "}
                </h2>
                <p class="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  The future of e-commerce is sustainable, equitable and
                  inclusive. As we continue to drive changes across key areas of
                  our operations, our commitment is embedded in our vision to
                  create a positive impact, for the planet and communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-14 lg:py-24 relative">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
            <div class="lg:pr-24 flex items-center">
              <div class="data w-full">
                <img
                  src="https://pagedone.io/asset/uploads/1702034785.png"
                  alt="About Us tailwind page"
                  class="block lg:hidden mb-9 mx-auto"
                />
                <h2 class="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">
                  We are Creative Since 2005
                </h2>
                <p class="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Pagedone isn’t just a collection of components and guidelines;
                  it's a philosophy. We go beyond aesthetics, prioritizing
                  accessibility, scalability, and usability. Every element, from
                  the tiniest detail to the grandest layout, is meticulously
                  crafted to enhance functionality and elevate user
                  satisfaction.
                </p>
              </div>
            </div>
            <div class="img-box ">
              <img
                src="https://pagedone.io/asset/uploads/1702034785.png"
                alt="About Us tailwind page"
                class="hidden lg:block "
              />
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 bg-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 class="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">
            Our results in numbers
          </h2>
          <div class="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
            <div class="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div class="flex gap-5">
                <div class="font-manrope text-2xl font-bold text-green-600">
                  240%
                </div>
                <div class="flex-1">
                  <h4 class="text-xl text-gray-900 font-semibold mb-2">
                    Company growth
                  </h4>
                  <p class="text-xs text-gray-500 leading-5">
                    Company's remarkable growth journey as we continually
                    innovate and drive towards new heights of success.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div class="flex gap-5">
                <div class="font-manrope text-2xl font-bold text-green-600">
                  175+
                </div>
                <div class="flex-1">
                  <h4 class="text-xl text-gray-900 font-semibold mb-2">
                    Store Opens
                  </h4>
                  <p class="text-xs text-gray-500 leading-5">
                    Our very talented team members are the powerhouse of
                    pagedone and pillars of our success.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div class="flex gap-5">
                <div class="font-manrope text-2xl font-bold text-green-600">
                  625M+
                </div>
                <div class="flex-1">
                  <h4 class="text-xl text-gray-900 font-semibold mb-2">
                    Happy Costumers
                  </h4>
                  <p class="text-xs text-gray-500 leading-5">
                    We have accomplished more than 625M+ happy costumers
                    worldwide and we are still counting many more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
};

export default About;
