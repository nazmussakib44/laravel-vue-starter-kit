import axios from "axios";
import config from "../config";

export const service = axios.create({
  baseURL: config.apiUrl + "/api",
  timeout: 1000 * 60 * 10,
  headers: getApiClientHeader(),
});

service.interceptors.request.use(
  (config) => {
    if (localStorage.getItem("token")) {
      config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

function getApiClientHeader() {
    let header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };
    return header;
}

export default {
  logout() {
    return service.post("/logout");
  },
  async get_user() {
    return service.get("/user");
  },
};
