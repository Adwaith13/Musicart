import axios from "axios";

export const sortA = async () => {
  const URL = import.meta.env.VITE_BACKEND_URL;
  try {
    const payload = await axios.get(`${URL}/sortA`);
    return payload.data;
  } catch (error) {
    console.log(error);
  }
};
