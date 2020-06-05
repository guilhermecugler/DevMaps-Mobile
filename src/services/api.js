import axios from "axios";

const api = axios.create({
  baseURL: "http://devmaps-api.herokuapp.com"
});

export default api;
