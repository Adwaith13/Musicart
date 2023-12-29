import axios from "axios";

export const signUpApi = async (userData) => {
  const URL = import.meta.env.VITE_BACKEND_URL;
  try {
    const payload = await axios.post(`${URL}/register`, userData);
    if (!payload) {
      throw new Error("Registration Failed");
    }
    const registerToken = payload.data.token;
    localStorage.setItem("registerToken", registerToken);
    return payload.data;
  } catch (error) {
    console.log(error);
  }
};
