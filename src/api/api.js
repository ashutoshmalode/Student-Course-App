import axios from "axios";

const API_URL = "https://dummyjson.com/products";

export const fetchCourses = async () => {
  const response = await axios.get(API_URL);
  return response.data.products;
};

export const fetchCourseDetails = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
