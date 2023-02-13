import axios from "axios";
import config from '../config';

export const authService = axios.create({
  baseURL: config.apiUrl + '/api',
  timeout: 1000 * 60 * 10,
  headers: getApiClientHeader(),
});

function getApiClientHeader() {
  let header = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  };
  return header;
}

export default {
  login(payload) {
    return authService.post("/login", payload);
  },
  register(payload) {
    return authService.post("/register", payload);
  },
};

