import { API_URL } from "./urls";

export const fetchDataFromAPI = async (endpoint) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${API_URL}${endpoint}`, options);
  const data = await response.json();
  return data;
};
