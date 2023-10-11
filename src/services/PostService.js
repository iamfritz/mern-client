// PostService.js
import apiService from "./BaseService";

const resource = "posts"; // Replace with your specific resource name

export const create = (data) => apiService.create(resource, data);
export const getAll = () => apiService.getAll(resource);
export const getPost = (id) => apiService.get(resource, id);
export const update = (id, data) => apiService.update(resource, id, data);
export const deleteItem = (id) => apiService.remove(resource, id);

const postService = {
  getAll,
  getPost,
  create,
  update,
  deleteItem,
};

export default postService;
