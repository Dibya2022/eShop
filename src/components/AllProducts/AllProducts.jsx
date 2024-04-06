import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

const AllProducts = ({ AddtoCart }) => {
  const [allProducts, setallProducts] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [selectProducts, setselectProducts] = useState("");
  const [originalProducts, setoriginalProducts] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  //All Products
  useEffect(() => {
    const allProducts = async () => {
      const res = await axios("https://dummyjson.com/products");
      setallProducts(res.data.products);
      setoriginalProducts(res.data.products);
    };
    allProducts();
  }, []);

  //Product Category
  useEffect(() => {
    const getAllProductsCategory = async () => {
      try {
        const res = await axios("https://dummyjson.com/products/categories");
        setAllCategory(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProductsCategory();
  }, []);

  const filterProducts = (selectcategory) => {
    setselectProducts(selectcategory);

    const data = selectcategory
      ? originalProducts.filter(
          (filterItem) => filterItem.category === selectcategory
        )
      : originalProducts;
    setallProducts(data);
  };

  //Search Product on click
  const clickOnSearch = () => {
    const searchProduct = originalProducts.filter((searchFilterItem) =>
      searchFilterItem.title.toLowerCase().includes(searchItem.toLowerCase())
    );
    setallProducts(searchProduct);
  };

  return (
    <>
      {/* Products category section */}

      <div className="flex gap-3 justify-center pt-4 ">
        <select
          className="rounded-lg "
          onChange={(e) => filterProducts(e.target.value)}
        >
          <option>Filter by Category </option>
          {allCategory.slice(0, 6).map((item, index) => (
            <option value={item}>{item}</option>
          ))}
        </select>
        <div class="relative  w-1/2 ">
          <input
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            type="search"
            id="search-dropdown"
            class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos, Design Templates..."
            required
          />
          <button
            onClick={clickOnSearch}
            type="submit"
            class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span class="sr-only">Search</span>
          </button>
        </div>
      </div>

      {/* All Products */}
      <section class="text-gray-600 body-font  ">
        <div class="container px-5 py-24 mx-auto">
          <div class=" flex flex-wrap justify-center gap-4">
            {allProducts.map((AllItems) => (
              <div
                key={AllItems.id}
                class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <Link to={`/singleproduct/${AllItems.id}`}>
                  <img
                    class="p-8 rounded-t-lg"
                    src={AllItems.thumbnail}
                    alt="product image"
                  />
                </Link>

                <div class="px-5 pb-5">
                  <a href="#">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {AllItems.title}
                    </h5>
                  </a>
                  <div class="flex items-center mt-2.5 mb-5">
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                      {AllItems.rating}
                    </span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">
                      ${AllItems.price}
                    </span>
                    <button
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={() => AddtoCart(AllItems)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProducts;
