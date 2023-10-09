import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

import MainMenu from "../components/MainMenu";
import UserMenu from "../components/UserMenu";

// Here, we display our Header
export default function Header() {
  return (
    <header className="mb-5">
      <nav class="bg-gray border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="./" class="flex items-center">
            <img
              src="https://hellofritz.com/img/default.png"
              class="mr-3 h-6 sm:h-9"
              alt="hellofritz Logo"
            />
          </a>

          <MainMenu />
          <UserMenu />
          
        </div>
      </nav>
    </header>
  );
}
                                                                                             