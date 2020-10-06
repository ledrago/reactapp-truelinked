import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/users";

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
