import axios from "axios";
import BASE_URL from "../config";

const getJobsByClient = async (clientId) => {
  const res = await axios.get(`${BASE_URL}/jobs/client/${clientId}`);
  return res.data;
};

const getRecommendedJobs = async (freelancerId) => {
  const res = await axios.get(`${BASE_URL}/jobs/recommended/${freelancerId}`);
  return res.data;
};

const postJob = async (jobData) => {
  const res = await axios.post(`${BASE_URL}/jobs`, jobData);
  return res.data;
};

const getJobById = async (id) => {
  const res = await axios.get(`${BASE_URL}/jobs/${id}`);
  return res.data;
};

const getAllJobs = async () => {
  const res = await axios.get(`${BASE_URL}/jobs`);
  return res.data;
};

export default {
  postJob,
  getJobsByClient,
  getRecommendedJobs,
  getJobById,
  getAllJobs,
};

// import axios from 'axios';
// import { BASE_URL } from '../config';

// export default {
//   getAllJobs
// };
