import axios from "axios";

export const fetchSelectedColor = async (color) => {
  const URL = import.meta.env.VITE_BACKEND_URL;
  try {
    const payload = await axios.get(`${URL}/selectedColor?selectedColor=${color}`);
    return payload.data;
  } catch (error) {
    console.log(error);
  }
};
