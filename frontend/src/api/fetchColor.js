import axios from "axios";

export const fetchColor = async () => {
  const URL = import.meta.env.VITE_BACKEND_URL;
  try {
    const payload = await axios.get(`${URL}/color`);
    return payload.data;
  } catch (error) {
    console.log(error);
  }
};
