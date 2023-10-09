// EditPost.js
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import postService from "../../services/PostService";
import Loading from "../../components/PageLoader";
import AlertMessage from "../../components/Alert";

function EditPost() {
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState(false);
  const [messageError, setMessageError] = useState(false);
 
  const { id } = useParams(); // Get the post ID from the URL
  
  const [postId, setPostId] = useState(id); // Store the post ID
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    setIsLoading(true);
    // Fetch all posts when the component mounts
    postService
      .getPostById(postId)
      .then((response) => {
        //console.log(response.data);
        setPost(response.data);
        setFormData(response.data);
        setIsLoading(false);        
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setIsLoading(false);
      });
  }, [postId]);

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
    postService
      .updatePost(postId, formData)
      .then((response) => {
        console.log(response.data);
        setIsLoading(false);
        setMessageError(false);
        setMessage("Post is successfully updated.");
      })
      .catch((error) => {
        console.error("Error updating posts:", error);
        setMessage("Error in updating post.");
        setMessageError(true);
        setIsLoading(false);
      });
  };

  return (
    <div class="container mx-auto">
      {isLoading && <Loading />}
      {message && <AlertMessage status={messageError} text={message} />}
      <h1>Posts</h1>
      <form onSubmit={handleSubmit}>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="title"
            id="title"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={formData.title}
            onChange={handleInputChange}
            required
          />
          <label
            for="title"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Title
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <textarea
            id="description"
            name="description"
            rows="4"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            value={formData.description}
            onChange={handleInputChange}
            required
          />

          <label
            for="description"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Description
          </label>
        </div>
        {/* <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="category"
              id="category"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={formData.category}
              onChange={handleInputChange}
              required
            />
            <label
              for="category"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Category
            </label>
          </div>
        </div> */}
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

export default EditPost;