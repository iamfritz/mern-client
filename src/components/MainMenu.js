import React from "react";

import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import Cookies from "universal-cookie";

const cookies = new Cookies();

// logout
const logout = () => {
  // destroy the cookie
  cookies.remove("TOKEN", { path: "/" });
  // redirect user to the landing page
  window.location.href = "/";
};

export default function Menus() {
  const token = cookies.get("TOKEN");

  return (
    <div
      class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
      id="mobile-menu-2"
    >
      <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        <li>
          <NavLink
            className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            to="/posts"
          >
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink
            className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            to="/post"
          >
            Records
          </NavLink>
        </li>
        <li>
          <NavLink
            className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            to="/create"
          >
            Create Record
          </NavLink>
        </li>
        <li>
          <NavLink
            className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            to="/login"
          >
            Account
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
