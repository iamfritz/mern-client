import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import postService from "../../services/PostService";
import PageLoader from "../../components/PageLoader";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true);
    // Fetch all posts when the component mounts
    postService
      .getPosts()
      .then((response) => {
        setPosts(response.data); 
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setIsLoading(false);
      });
  }, []);

  const handleDelete = (postId) => {
    if (!window.confirm("Are you sure you want to delete the record?")) {
      return false;
    }    

    setIsLoading(true);
    // Call the deletePost function from the post service
    postService.deletePost(postId)
      .then(() => {
        // Remove the deleted post from the state
        setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
        setIsLoading(false);     
      })
      .catch((error) => console.error('Error deleting post:', error));
  };

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div class="container mx-auto">
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
              Position
            </th>
            <th scope="col" className="px-6 py-4">
              Created
            </th>
            <th scope="col" className="px-6 py-4">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr>
              <td>{post.title}</td>
              <td>{post.image}</td>
              <td>
                {post.category.map((category) => (
                  <span class="bg-gray-100 text-gray-800 text-xs font-small mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">
                    {category.name}
                  </span>
                ))}
              </td>
              <td>{post.image}</td>
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
}

export default PostList;