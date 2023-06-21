import React from "react";
import { Route, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function AuthComponent(props) {
  const token = cookies.get("TOKEN");
  const navigate = useNavigate();

  // returns route if there is a valid token set in the cookie
  if (token) {
    return (
      <div>
        <h1 className="text-center">Auth Component</h1>
      </div>
    );
  } else {
    //temporary
    window.location.href = "/";
    // returns the user to the landing page if there is no valid token set
    //return navigate("/", { state: { message: "No Access" } });
  }
}
