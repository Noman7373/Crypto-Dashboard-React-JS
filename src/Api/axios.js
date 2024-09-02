import axios from "axios";

const Axios = axios.create({
  // To access .env file
  baseURL: process.env.BACKEND_URL,
  withCredentials: true,
  //handle authentication and send cookie
});

export default Axios;
