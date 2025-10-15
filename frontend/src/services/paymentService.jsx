const getPaymentsByClient = async (clientId) => {
  const res = await axios.get(`${BASE_URL}/payments/client/${clientId}`);
  return res.data;
};

const getPaymentsByFreelancer = async (freelancerId) => {
  const res = await axios.get(
    `${BASE_URL}/payments/freelancer/${freelancerId}`
  );
  return res.data;
};

export default {
  getPaymentsByClient,
  getPaymentsByFreelancer,
};
