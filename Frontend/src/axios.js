import axios from "axios";

const instance = axios.create({
  baseURL: "https://random-thoughts-backend-ouqw.onrender.com",
});

export default instance;
