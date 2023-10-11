// BaseService.js
import Api from "../utils/API";

// Define common methods for CRUD operations
export const create = (resource, data) => Api.post(`/${resource}`, data);
export const get = (resource, id) => Api.get(`/${resource}/${id}`);
export const getAll = (resource) => Api.get(`/${resource}`);
export const update = (resource, id, data) =>  Api.put(`/${resource}/${id}`, data);
export const remove = (resource, id) =>  Api.delete(`/${resource}/${id}`);

const apiService = {
  create,
  get,
  getAll,
  update,
  remove,
};

export default apiService;
