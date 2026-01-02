import axios from "axios";

export const api = axios.create({
  //   baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api-scanm.anolabs.site",
  baseURL: "https://api-scanm.anolabs.site",
  timeout: 10000,
});

// export const get = (url: string, options = {}) => api.get(url, options);
// export const post = (url: string, data = {}, options = {}) =>
//   api.post(url, data, options);
// export const put = (url: string, data = {}, options = {}) =>
//   api.put(url, data, options);
// export const del = (url: string, options = {}) =>
//   api.delete(url, options);
