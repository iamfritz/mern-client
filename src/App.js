import React from "react";

// We use Route in order to define the different routes of our application
import Cookies from "universal-cookie";

// We import all the components we need in our app
import Routers from "./routes/Routers";
import Header from "./components/header";
import Footer from "./components/footer";

import Demo from "./components/demo";

const cookies = new Cookies();

const App = () => {
  
  console.log("TOKEN: " + cookies.get("TOKEN"));

  return (
    <div>
      <Header />
      <Routers />
      <Demo />
      <Footer />
    </div>
  );
};

export default App;
