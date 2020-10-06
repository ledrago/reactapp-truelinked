import axios from "axios";
import { environment } from '../environment';
const baseUrl = `${environment.baseUrl}/users`

const getUsers = () => {
  return axios.get(`${baseUrl}`);
};

const getUser = (id) => {
  return axios.get(`${baseUrl}/${id}`);
};

export default {
  getUsers,
  getUser,
};
