// utils/API.js

import axios from "axios";
// import Cookies from "universal-cookie";
// const cookies = new Cookies();
// const token = cookies.get("TOKEN");

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  responseType: "json",
});

// api.interceptors.request.use(
//   (config) => {
//     console.log(config);
//     console.log(token);
//     console.log(config.method);
//     // Modify the request config before sending it
//     if (config.method === "delete") {
//       //config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     // Handle request error
//     return Promise.reject(error);
//   }
// );

export default api;

/* export default axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  responseType: "json",
});*/