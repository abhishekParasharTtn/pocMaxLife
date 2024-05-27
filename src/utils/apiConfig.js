import axiosInstance from "./config/axiosInstance";

const get = (url, queryParams) => {
  return axiosInstance.get(url, { params: queryParams }).then((res) => res);
};

const post = (url, body, queryParams, cookies = {}) => {
  return axiosInstance
    .post(url, body, {
      params: queryParams,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...cookies,
      },
    })
    .then((res) => res.data || res);
};

const put = (url, body, queryParams, cookies = {}) => {
  return axiosInstance
    .put(url, body, {
      params: queryParams,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...cookies,
      },
    })
    .then((res) => res.data);
};

export default { get, post, put };
