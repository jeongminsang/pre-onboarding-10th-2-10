import axios from 'axios';

// const instance = axios.create({
//   baseURL: process.env.REACT_APP_API_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

export const getSearch = ({ text }) => {
  return axios.get(`/api/v1/search-conditions/?name=${text}`);
};
