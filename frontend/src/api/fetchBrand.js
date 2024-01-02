import axios from "axios";

export const fetchBrand = async () => {
  const URL = import.meta.env.VITE_BACKEND_URL;
  try {
    const payload = await axios.get(`${URL}/brand`);
    return payload.data;
  } catch (error) {
    console.log(error);
  }
};
