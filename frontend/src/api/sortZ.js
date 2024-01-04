import axios from "axios";

export const sortZ = async () => {
  const URL = import.meta.env.VITE_BACKEND_URL;
  try {
    const payload = await axios.get(`${URL}/sortZ`);
    return payload.data;
  } catch (error) {
    console.log(error);
  }
};
