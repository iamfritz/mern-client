import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

//pages
import PostList from "../components/recordList";
import Edit from "../components/edit";
import Create from "../components/create";
import Home from "../pages/HomePage";

import Account from "../pages/Account";
import Login from "../forms/Login"
import Register from "../forms/Register";

function PrivateRouter({ path, children, redirectTo }) {
  let isAuthenticated = false;
  return (
    <Route
      path={path}
      render={() => (isAuthenticated ? children : <Navigate to={redirectTo} />)}
    />
  );
}

function Routers() {
    
    return (
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

            <Route exact path="/post" element={<PostList />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/create" element={<Create />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/account" element={<Account />} />
          </Route>
        </Routes>
      </div>
    );
}

export default Routers;
