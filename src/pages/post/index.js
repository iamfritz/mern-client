import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import postService from "../../services/PostService";
//import PageLoader from "../../components/PageLoader";
import AlertMessage from "../../components/Alert";

import PageLoading from "../../components/Loading";
import { useLoading } from "../../components/LoadingContext";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const [message, setMessage] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const { isLoading, setIsLoading, startLoading, stopLoading } = useLoading();
  
  /* useEffect(() => {
    startLoading();
    setTimeout(() => {
      stopLoading();
      //setIsLoading(false);
    }, 2000);
  }, [setIsLoading]); */

  useEffect(() => {
    startLoading();
    // Fetch all posts when the component mounts
    postService
      .getAll()
      .then((res) => {
        let response = res.data;
        let postItem = response.data;
        setPosts(postItem);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);

        setMessageError(true);
        setMessage("Error fetching posts.");        
      })
      .finally(() => {
        stopLoading();
      });
  }, posts);

  const handleDelete = (postId) => {
    
    const confirmDelete = window.confirm('Are you sure you want to delete this item?');
    if (confirmDelete) {
      startLoading();
      // Call the deletePost function from the post service
      postService
        .deleteItem(postId)
        .then(() => {
          // Remove the deleted post from the state
          setPosts((prevPosts) =>
            prevPosts.filter((post) => post._id !== postId)
          );
          
          setMessageError(false);
          setMessage("Post is successfully deleted.");
        })
        .catch((error) => {
          console.error("Error deleting post:");
          console.log(error);
  
          setMessageError(true);
          setMessage(error.response.data.message);
        })
        .finally(() => {
          stopLoading();
        });    
    }
  };

  return (
    <div class="container mx-auto">
      {isLoading && <PageLoading />}
      {message && <AlertMessage status={messageError} text={message} />}

      <h1>Posts</h1>
      <table class="min-w-full text-left text-sm font-light">
        <thead class="border-b font-medium dark:border-neutral-500">
          <tr>
            <th scope="col" className="px-6 py-4">
              Title
            </th>
            <th scope="col" className="px-6 py-4">
              Image
            </th>
            <th scope="col" className="px-6 py-4">
              Category
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
          {posts.map((post) => (
            <tr>
              <td>{post.title}</td>
              <td>
                {post.image && (
                  <img src={post.image} title={post.title} width="80" />
                )}
              </td>
              <td>
                {post.category.map((category) => (
                  <span class="bg-gray-100 text-gray-800 text-xs font-small mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">
                    {category.name}
                  </span>
                ))}
              </td>
              <td>{post.createdAt}</td>
              <td>
                <Link
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-small rounded-lg text-sm px-2 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  to={`/posts/edit/${post._id}`}
                >
                  Edit
                </Link>{" "}
                <button
                  type="button"
                  class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-small rounded-lg text-sm px-2 py-1 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  onClick={() => handleDelete(post._id)}
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

export default PostList;