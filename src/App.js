import React, { useEffect, useState } from "react";

// We use Route in order to define the different routes of our application
import Cookies from "universal-cookie";

// We import all the components we need in our app
import Routers from "./routes/Routers";
import Header from "./layout/header";
import Footer from "./layout/footer";
//import Loading from "./components/PageLoader";
import { LoadingProvider } from "./components/LoadingContext";


const cookies = new Cookies();

const App = () => {
  /* const [isLoading, setIsLoading] = useState(true);

  const startLoading = () => {
    setIsLoading(true);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };  

  useEffect(() => {
    // Simulate data loading (e.g., fetching data from an API)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []); */

  console.log("TOKEN: " + cookies.get("TOKEN"));

  return (
    <LoadingProvider>
      <div className="app">
        <Header />
        <Routers />
        <Footer />
      </div>
    </LoadingProvider>
  );
};

export default App;
