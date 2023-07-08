import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

import { useState } from "react";
import { Form, Button, Container, Card, Col, Row, Alert } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
let api_url = process.env.REACT_APP_API_URL;
let api_key = process.env.REACT_APP_API_KEY;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, setLogin] = useState(false);
  
  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    let data = JSON.stringify({
      email: email,
      password: password
    }); 

    // set configurations
    const configuration = {
      method: "post",
      url: api_url + "user/login",
      headers: {
        "Content-Type": "application/json",
        "api-key": api_key,
      },
      data: {
        email,
        password,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        let data = result.data;
        console.log(data);
        if(data.status === "success") {
          setLogin(true);
          resetForm();
          // set the cookie
          cookies.set("TOKEN", data.data.token, {
            path: "/",
          });
          // redirect user to the auth page
          window.location.href = "/demo/auth";
        } else {
          alert(result.message);
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data.message);
      });
  };  

  return (
    <div>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
              <div className="border border-3 border-primary"></div>
              <Card className="shadow">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-uppercase ">Login</h2>
                    <p className=" mb-5">
                      Please enter your login and password!
                    </p>
                    <div className="mb-3">
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            Email address
                          </Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email Address"
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <p className="small">
                            <a className="text-primary" href="#!">
                              Forgot password?
                            </a>
                          </p>
                        </Form.Group>
                        <div className="d-grid">
                          <Button variant="primary" type="submit">
                            Login
                          </Button>
                        </div>
                      </Form>
                      <div className="mt-3">
                        <p className="mb-0  text-center">
                          Don't have an account? <a href="/register" className="text-primary fw-bold">Sign Up</a>
                        </p>
                      </div>
                      {/* display success message */}
                      {login ? (
                        <Alert variant="success" className="mt-3">
                          <p className="mb-0">You Are Logged in Successfully</p>
                        </Alert>
                      ) : (
                        <Alert variant="warning" className="mt-3">
                          <p className="mb-0">You Are Not Logged in</p>
                        </Alert>
                      )}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
}
