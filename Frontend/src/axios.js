import axios from "axios";

const instance = axios.create({
  baseURL: "https://random-thoughts-backend-ouqw.onrender.com",
});

// 🔑 Add token automatically to every request
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
