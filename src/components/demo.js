import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import Cookies from "universal-cookie";

import Register from "../forms/Register";
import Login from "../forms/Login";

const cookies = new Cookies();
// logout
const logout = () => {
  // destroy the cookie
  cookies.remove("TOKEN", { path: "/" });
  // redirect user to the landing page
  window.location.href = "/";
};

// Here, we display our Header
export default function Demo() {
  return (
    <div>
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
}
