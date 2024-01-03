import axios from "axios";

export const fetchSelectedBrand = async (brand) => {
  const URL = import.meta.env.VITE_BACKEND_URL;
  try {
    const payload = await axios.get(`${URL}/selectedBrand?selectedBrand=${brand}`);
    return payload.data;
  } catch (error) {
    console.log(error);
  }
};
