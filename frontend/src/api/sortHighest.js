import axios from "axios";

export const sortHighest = async () => {
  const URL = import.meta.env.VITE_BACKEND_URL;
  try {
    const payload = await axios.get(`${URL}/highest`);
    return payload.data;
  } catch (error) {
    console.log(error);
  }
};
