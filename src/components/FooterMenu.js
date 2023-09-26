import React from "react";

import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function FooterMenu() {
  return (
    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
      <li>
        <a href="#" class="mr-4 hover:underline md:mr-6 ">
          About
        </a>
      </li>
      <li>
        <a href="#" class="mr-4 hover:underline md:mr-6">
          Privacy Policy
        </a>
      </li>
      <li>
        <a href="#" class="mr-4 hover:underline md:mr-6 ">
          Licensing
        </a>
      </li>
      <li>
        <a href="#" class="hover:underline">
          Contact
        </a>
      </li>
    </ul>
  );
}
