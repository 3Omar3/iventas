import { create } from "apisauce";

const apiClient = create({
  baseURL: process.env.SERVER_URI,
});

export default apiClient;
