import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

//pages
import RecordList from "../components/recordList";
import Edit from "../components/edit";
import Create from "../components/create";
import Account from "../pages/Account";
import FreeComponent from "../pages/FreeComponent";
import AuthComponent from "../pages/AuthComponent";

import HomePage from "../pages/FreeComponent"
import Login from "../forms/Login"
import Register from "../forms/Login"

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
          <Route exact path="/" element={<RecordList />} />

          <Route path="/demo/free" element={<FreeComponent />} />          
          <Route path="/login" element={<Login />} />          
  
          <Route path='/' element={<PrivateRoute/>}>
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/account" element={<Account />} />
            <Route path="/create" element={<Create />} />
            <Route path='/demo/auth' element={<AuthComponent/>}/>
          </Route>

        </Routes>
      </div>
    );
}

export default Routers;
