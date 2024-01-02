import axios from "axios";

export const fetchType = async () => {
  const URL = import.meta.env.VITE_BACKEND_URL;
  try {
    const payload = await axios.get(`${URL}/type`);
    return payload.data;
  } catch (error) {
    console.log(error);
  }
};
