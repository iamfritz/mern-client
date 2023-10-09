import React from "react";

import FooterMenu from "../components/FooterMenu";

// Here, we display our Header
export default function Footer() {
  return (
    <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4 mt-5 mb-2">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://hellofritz.com/"
            class="flex items-center mb-4 sm:mb-0"
          >
            <img
              src="https://hellofritz.com/img/default.png"
              class="h-8 mr-3"
              alt="Flowbite Logo"
            />
          </a>
          <FooterMenu />
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://hellofritz.com/" class="hover:underline">
            hellofritz
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
                                                                                             