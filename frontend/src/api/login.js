import axios from "axios";

export const loginApi = async (userData) => {
  const URL = import.meta.env.VITE_BACKEND_URL;
  try {
    const payload = await axios.post(`${URL}/login`, userData);
    if (!payload) {
      throw new Error("Login Failed");
    }
    const loginToken = payload.data.token;
    localStorage.setItem("loginToken", loginToken);
    return payload.data;
  } catch (error) {
    console.log(error);
  }
};
