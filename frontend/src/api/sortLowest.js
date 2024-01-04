import axios from "axios";

export const sortLowest = async () => {
  const URL = import.meta.env.VITE_BACKEND_URL;
  try {
    const payload = await axios.get(`${URL}/lowest`);
    return payload.data;
  } catch (error) {
    console.log(error);
  }
};
