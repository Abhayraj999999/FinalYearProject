const leaveReview = async (data) => {
  const res = await axios.post(`${BASE_URL}/reviews`, data);
  return res.data;
};

const getReviewsForFreelancer = async (freelancerId) => {
  const res = await axios.get(`${BASE_URL}/reviews/freelancer/${freelancerId}`);
  return res.data;
};

const getAllFreelancers = async () => {
  const res = await axios.get(`${BASE_URL}/users/freelancers`);
  return res.data;
};

export default {
  leaveReview,
  getReviewsForFreelancer,
  getAllFreelancers,
};
