import { API_URL } from "./urls";

export const api = {
  get: async (endpoint, query) => {
    console.log('endpoint',endpoint, query)
    try {
      const encodedQuery = encodeURIComponent(query);
      const url = endpoint ? endpoint : `/graphql?query=${encodedQuery}`;
  
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(`${API_URL}${url}`, options);
      const data = await response.json();
      return data;
    
    } catch (error) {
      console.log(error);
    }
  }
};
