import api from "../utils/api";

export const createSubscriptions = async (payload) => {
  const response = await api.post(`users/subscriptions`, payload);
  console.log("response", response);
  return response.data;
};
