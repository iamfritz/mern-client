import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

import Navbar from "./navbar";
import Hero from "./hero";

// Here, we display our Header
export default function Header() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}
                                                                                             