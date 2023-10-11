import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL; 

// Create an Axios instance with a base URL
const api = axios.create({
  baseURL: `${API_BASE_URL}/posts`, // Assuming your posts API endpoint is at /posts
});

// Define your post-related service methods

export const getPosts = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPostById = async (postId) => {
  try {
    const response = await api.get(`/${postId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to create a new post
export const createPost = async (postData) => {
  try {
    const response = await api.post("/", postData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to update a post by ID
export const updatePost = async (postId, postData) => {
  try {
    const response = await api.put(`/${postId}`, postData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to delete a post by ID
export const deletePost = async (postId) => {
  try {
    const response = await api.delete(`/${postId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const postService = {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};

export default postService;
