import axios from "axios";
import { environment } from '../environment';
const baseUrl = `${environment.baseUrl}/posts`

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
