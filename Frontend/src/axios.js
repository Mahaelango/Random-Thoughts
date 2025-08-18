// src/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // ← important
  withCredentials: false, // set true only if you use cookies/sessions
});

export default instance;
