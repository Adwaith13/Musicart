import axios from "axios";

export const fetchCart = async (token) => {
  const URL = import.meta.env.VITE_BACKEND_URL;
  try {
    const payload = await axios.get(`${URL}/checkout`, {
      headers: { token },
    });
    return payload.data;
  } catch (error) {
    console.log(error);
  }
};
