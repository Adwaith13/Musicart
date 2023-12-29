import axios from "axios";

export const addtoCart = async (token, productID) => {
  const URL = import.meta.env.VITE_BACKEND_URL;
  try {
    const payload = await axios.post(
      `${URL}/addtocart/${productID}`,
      {},
      {
        headers: {
          token: `${token}`,
        },
      }
    );
    return payload.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to add product to cart");
  }
};
