

// import axios from "axios";

// // ✅ Centralized Axios instance
// const API = axios.create({
//   baseURL: "http://127.0.0.1:5000", // Flask backend URL
//   timeout: 10000, // 10 seconds timeout for safety
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // ✅ Fetch recommendations by category
// export const fetchRecommendations = async (category) => {
//   try {
//     const response = await API.get(`/recommend/${category.toLowerCase()}`);
//     return response;
//   } catch (error) {
//     console.error(`❌ Error fetching recommendations for ${category}:`, error);
//     throw error;
//   }
// };


import axios from "axios";

// ✅ Centralized Axios instance for API calls
const API = axios.create({
  // 👇 Use your deployed Render backend URL
  baseURL: "https://backend-gnn-model.onrender.com",
  timeout: 10000, // 10-second timeout to prevent hanging requests
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Fetch influencer recommendations by category
export const fetchRecommendations = async (category) => {
  try {
    const response = await API.get(`/recommend/${category.toLowerCase()}`);
    return response;
  } catch (error) {
    console.error(`❌ Error fetching recommendations for ${category}:`, error);
    throw error;
  }
};

