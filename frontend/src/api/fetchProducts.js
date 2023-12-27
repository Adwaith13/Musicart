import axios from "axios";

export const fetchProducts = async () => {
  const URL = import.meta.env.VITE_BACKEND_URL;
  try {
    const payload = await axios.get(`${URL}/products`);
    if(!payload){
        throw new Error("Something is wrong");
    }
    return payload.data
  } catch (error) {
    console.log(error);
  }
};
