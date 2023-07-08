import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

let api_url = process.env.REACT_APP_API_URL;
let api_key = process.env.REACT_APP_API_KEY;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState("");
  const [level, setLevel] = useState("");

  const [register, setRegister] = useState(false);

  const resetForm = () => {
        setEmail("");
        setPassword("");
        setName("");
        setAge("");
        setPosition("");
        setLevel("");    
  };

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    let data = JSON.stringify({
      email: email,
      password: password,
      name: name,
      age: age,
      position: position,
      level: level,
    });

    // set configurations
    const configuration = {
      method: "post",
      url: api_url + "user/register",
      headers: {
        'Content-Type': 'application/json', 
        'api-key': api_key,
      },
      data: data,
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        let data = result.data;
        console.log(data);
        if (data.status === 'success') {
          setRegister(true);
          resetForm();
          alert("Successfully Registered");
        } else {
          alert("result.message");
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data.message);
      });
  };  

  return (
    <div>
      <h2>Registration</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </Form.Group>

        <Form.Group controlId="formBasicAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="numer"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPosition">
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            name="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder="Position"
          />
        </Form.Group>

        <Form.Group controlId="formBasicLevel">
          <Form.Label>Level</Form.Label>
          <Form.Control
            type="text"
            name="Level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            placeholder="Level"
          />
        </Form.Group>

        {/* submit button */}
        <Button variant="primary" className="mt-5" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}
