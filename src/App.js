import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes, Switch } from "react-router-dom";

import { Container, Col, Row, Button } from "react-bootstrap";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import Register from "./components/Register";
import Login from "./components/Login";
import Account from "./pages/Account";
import FreeComponent from "./pages/FreeComponent";
import AuthComponent from "./pages/AuthComponent";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import Cookies from "universal-cookie";
const cookies = new Cookies();

// logout
const logout = () => {
  // destroy the cookie
  cookies.remove("TOKEN", { path: "/" });
  // redirect user to the landing page
  window.location.href = "/";
};

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<RecordList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />

        <Route path="/account" element={<Account />} />
        <Route path="/demo/free" element={<FreeComponent />} />
        <Route path="/demo/auth" element={<AuthComponent />} />
      </Routes>

      <Container>
        <Row>
          <Col className="text-center">
            <h1>React Authentication Tutorial</h1>

            <section id="navigation">
              <a href="/account">Account</a>
              <a href="/demo/free">Free Component</a>
              <a href="/demo/auth">Auth Component</a>
              <Button type="submit" variant="danger" onClick={() => logout()}>
                Logout
              </Button>
            </section>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Register />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Login />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
