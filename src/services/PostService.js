import axios from "axios";
const baseUrl = "https://jsonplaceholder.typicode.com/posts";

const getPosts = () => {
  return axios.get(`${baseUrl}`);
};

const getPost = (id) => {
  return axios.get(`${baseUrl}/${id}`);
};

export default {
  getPosts,
  getPost,
};
