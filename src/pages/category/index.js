import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import categoryService from "../../services/CategoryService";
//import PageLoader from "../../components/PageLoader";
import AlertMessage from "../../components/Alert";

import PageLoading from "../../components/Loading";
import { useLoading } from "../../components/LoadingContext";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  const [message, setMessage] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const { isLoading, setIsLoading, startLoading, stopLoading } = useLoading();
  
  
  const fetchCategories = () => {
    startLoading();
    // Fetch all posts when the component mounts
    categoryService
      .getAll()
      .then((res) => {
        let response = res.data;
        let catItem = response.data;
        setCategories(catItem);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);

        setMessageError(true);
        setMessage("Error fetching categories.");
      })
      .finally(() => {
        stopLoading();
      });
  };

  const handleDelete = (catId) => {
    
    const confirmDelete = window.confirm('Are you sure you want to delete this item?');
    if (confirmDelete) {      
      startLoading();
      // Call the deletePost function from the post service
      categoryService
        .deleteItem(catId)
        .then(() => {
          // Remove the deleted post from the state
          setCategories(categories.filter((category) => category._id !== catId));

          setMessageError(false);
          setMessage("Item is successfully deleted.");
        })
        .catch((error) => {
          console.error("Error deleting category:");
          console.log(error);
  
          setMessageError(true);
          setMessage(error.response.data.message);
        })
        .finally(() => {
          stopLoading();
        });   
       
    }
  };

  useEffect(() => {
    // Fetch posts when the component mounts
    fetchCategories();
  }, []);

  return (
    <div class="container mx-auto">
      {isLoading && <PageLoading />}
      {message && <AlertMessage status={messageError} text={message} />}

      <h1>Categories</h1>
      <table class="min-w-full text-left text-sm font-light">
        <thead class="border-b font-medium dark:border-neutral-500">
          <tr>
            <th scope="col" className="px-6 py-4">
              Title
            </th>
            <th scope="col" className="px-6 py-4">
              Created
            </th>
            <th scope="col" className="px-6 py-4" width="120">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr>
              <td>{category.name}</td>
              <td>{category.createdAt}</td>
              <td>
                <Link
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-small rounded-lg text-sm px-2 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  to={`/categories/edit/${category._id}`}
                >
                  Edit
                </Link>{" "}
                <button
                  type="button"
                  class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-small rounded-lg text-sm px-2 py-1 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  onClick={() => handleDelete(category._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryList;