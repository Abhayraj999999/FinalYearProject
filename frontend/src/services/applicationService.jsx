const applyToJob = async (applicationData) => {
  const res = await axios.post(`${BASE_URL}/applications`, applicationData);
  return res.data;
};

const getApplicationsByClient = async (clientId) => {
  const res = await axios.get(`${BASE_URL}/applications/client/${clientId}`);
  return res.data;
};

const getApplicationsByFreelancer = async (freelancerId) => {
  const res = await axios.get(
    `${BASE_URL}/applications/freelancer/${freelancerId}`
  );
  return res.data;
};

export default {
  applyToJob,
  getApplicationsByClient,
  getApplicationsByFreelancer,
};
