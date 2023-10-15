// BaseService.js
import Api from "../utils/API";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const token = cookies.get("TOKEN");

const headers = {
  Authorization: `Bearer ${token}`,
};


// Define common methods for CRUD operations
export const create = (resource, data) => Api.post(`/${resource}`, { headers, data });
export const get    = (resource, id) => Api.get(`/${resource}/${id}`);
export const getAll = (resource) => Api.get(`/${resource}`);
export const update = (resource, id, data) => Api.put(`/${resource}/${id}`, { headers , data});
export const remove = (resource, id) =>  Api.delete(`/${resource}/${id}`, { headers });

const apiService = {
  create,
  get,
  getAll,
  update,
  remove,
};

export default apiService;
