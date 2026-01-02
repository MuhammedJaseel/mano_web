import axios from "axios";

export const getTransactions = async () => {
  return axios.get("https://api-scanm.anolabs.site/api/transactions");
};
