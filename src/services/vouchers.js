import api from "../utils/api";

export const listVouchers = async () => {
  const response = await api.get("house9/vouchers");
  return response.data.data;
};
