// AddPost.js
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import CategoryService from "../../services/CategoryService";
import PageLoader from "../../components/PageLoader";
import AlertError from "../../components/AlertError";
import AlertSuccess from "../../components/AlertSuccess";

function AddCategory() {
  const [isLoading, setIsLoading] = useState(true);
  const [messageSuccess, setMessageSuccess] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const { id } = useParams(); // Get the post ID from the URL
  
  const [postId, setPostId] = useState(id); // Store the post ID
  const formDefault = {
            name: ""
          };
  const [formData, setFormData] = useState(formDefault);

  useEffect(() => {
    setIsLoading(false);
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    CategoryService.create(formData)
      .then((response) => {
        console.log(response.data);
        setIsLoading(false);
        setFormData(formDefault);
        setMessageSuccess("Successfully added new Record");
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error fetching posts:");
        console.log(error.response.data);
        setMessageError(error.response.data.message);
      });
  };

  return (
    <div class="container mx-auto">
      {isLoading ? <PageLoader /> : ""}
      {messageSuccess ? <AlertSuccess text={messageSuccess} /> : ""}
      {messageError ? <AlertError text={messageError} /> : ""}

      <h1>Category</h1>
      <form onSubmit={handleSubmit}>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="name"
            id="name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <label
            for="name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddCategory;