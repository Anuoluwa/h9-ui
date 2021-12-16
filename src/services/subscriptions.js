import api from "../utils/api";

export const createSubscriptions = async (payload) => {
  const response = await api.post(`users/subscriptions`, payload);
  return response.data;
};
