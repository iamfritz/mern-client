import React from "react";
import { useState } from "react";
import { Form, Button, Container, Card, Col, Row, Alert } from "react-bootstrap";
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
  const [error, setError] = useState(false);

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
      <section class="h-screen">
        <div class="container h-full px-6 py-24">
          <div class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            {/* <!-- Left column container with background--> */}
            <div class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="w-full"
                alt="Phone image"
              />
            </div>

            {/* <!-- Right column container with form --> */}
            <div class="md:w-8/12 lg:ml-6 lg:w-5/12">
              <Form onSubmit={(e) => handleSubmit(e)}>
                {/* <!-- Email input --> */}
                <div class="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="email"
                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="inputEmail"
                    placeholder="Email address"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label
                    for="inputEmail"
                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Email address
                  </label>
                </div>

                {/* <!-- Password input --> */}
                <div class="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="password"
                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="inputPassword"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                  <label
                    for="inputPassword"
                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Password
                  </label>
                </div>

                <div class="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="inputName"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                  <label
                    for="inputName"
                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Name
                  </label>
                </div>

                <div class="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="Position"
                    placeholder="Position"
                    name="position"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    placeholder="Position"
                  />
                  <label
                    for="Position"
                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Position
                  </label>
                </div>

                <div class="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="Level"
                    placeholder="Level"
                    name="level"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    placeholder="Level"
                  />
                  <label
                    for="Level"
                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Level
                  </label>
                </div>

                {/* <!-- Submit button --> */}
                <button
                  type="submit"
                  class="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Login
                </button>
                {/* <!-- Register link --> */}
                <p class="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Have already an account?{" "}
                  <a
                    href="/login"
                    class="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                  >
                    Login
                  </a>
                </p>
                {/* display success message */}
                {register ? (
                  <Alert variant="success" className="mt-3">
                    <p className="mb-0">You Are Logged in Successfully</p>
                  </Alert>
                ) : (
                  ""
                )}

                {error ? (
                  <Alert variant="warning" className="mt-3">
                    <p className="mb-0">{error}</p>
                  </Alert>
                ) : (
                  ""
                )}
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );  
}
