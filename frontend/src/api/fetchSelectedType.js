import axios from "axios";

export const fetchSelectedType = async (type) => {
  const URL = import.meta.env.VITE_BACKEND_URL;
  try {
    const payload = await axios.get(`${URL}/selectedType?selectedType=${type}`);
    return payload.data;
  } catch (error) {
    console.log(error);
  }
};
