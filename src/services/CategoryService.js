// CategoryService.js
import apiService from "./BaseService";

const resource = "categories"; // Replace with your specific resource name

export const create = (data) => apiService.create(resource, data);
export const getAll = () => apiService.getAll(resource);
export const get = (id) => apiService.get(resource, id);
export const update = (id, data) => apiService.update(resource, id, data);
export const deleteItem = (id) => apiService.remove(resource, id);

const categoryService = {
  getAll,
  get,
  create,
  update,
  deleteItem,
};

export default categoryService;
