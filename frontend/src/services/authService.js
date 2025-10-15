import axios from "axios";
import BASE_URL from "../config";

const API = `${BASE_URL}/auth`;

const login = async ({ email, password }) => {
  const response = await axios.post(`${API}/login`, { email, password });
  return response.data;
};

const register = async ({ name, email, password, role }) => {
  const response = await axios.post(`${API}/register`, {
    name,
    email,
    password,
    role,
  });
  return response.data;
};

const authService = { login, register };
export default authService;
