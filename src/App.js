import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes, Switch } from "react-router-dom";

import { Container, Col, Row } from "react-bootstrap";

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

const App = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          <Col className="text-center">
            <h1>React Authentication Tutorial</h1>

            <section id="navigation">
              <a href="/">Home</a>
              <a href="/free">Free Component</a>
              <a href="/auth">Auth Component</a>
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
      <Routes>
        <Route exact path="/" element={<RecordList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />

        <Route exact path="/" component={Account} />
        <Route exact path="/free" component={FreeComponent} />
        <Route exact path="/auth" component={AuthComponent} />
      </Routes>
    </div>
  );
};

export default App;
