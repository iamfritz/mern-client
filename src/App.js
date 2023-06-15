import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

import { Container, Col, Row } from "react-bootstrap";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";

import Register from "./components/Register";
import Login from "./components/Login";

const App = () => {
  return (
    <div>
      <Navbar />
      <Container>
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
      </Routes>
    </div>
  );
};

export default App;
