import { useState } from "react";
import Navbar from "../Components/Navbar";
import HomeLogo from "../Components/HomeLogo";
import Back from "../Components/Back";
import BuyNow from "../Components/BuyNow";
import Footer from "../Components/Footer";
import { useLocation } from "react-router-dom";
import productStyle from "../styles/product.module.css";
import { addtoCart } from "../api/addtoCart";
import cartbtnStyles from "../styles/cartbtn.module.css";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const location = useLocation();
  const { productData } = location.state;

  const productID = productData._id;

  const loginToken = localStorage.getItem("loginToken");
  const registerToken = localStorage.getItem("registerToken");
  let token;

  if (loginToken) {
    token = loginToken;
  } else if (registerToken) {
    token = registerToken;
  }

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const addProduct = async () => {
    try {
      if (!token) {
        navigate("/login");
      }
      const response = await addtoCart(token, productID);
      if (response) {
        console.log("added");
        setMessage("Product added to cart");
      } else {
        setMessage("Failed to add product to cart");
      }
    } catch (error) {
      console.error(error);
      setMessage("Error adding product to cart");
    }
  };

  return (
    <div>
      <Navbar />
      <HomeLogo />
      <Back />
      <div className={productStyle.container}>
        <h1 className={productStyle.head}>{productData.product_head}</h1>
        <div className={productStyle.productContainer}>
          <img
            src={productData.image}
            width={400}
            className={productStyle.image}
          ></img>
          <div>
            <h2 className={productStyle.name}>{productData.product_name}</h2>
            <p className={productStyle.price}>
              Price - ₹{productData.product_price}
            </p>
            <p className={productStyle.color}>
              {productData.product_color} | {productData.product_type}
            </p>
            <p className={productStyle.about}>About this Item:</p>
            <p className={productStyle.description}>
              {productData.product_description}
            </p>
            <p className={productStyle.availability}>
              Availibility - {productData.availability}
            </p>
            <p className={productStyle.brand}>Brand - {productData.brand}</p>
          </div>
        </div>
      </div>
      <button className={cartbtnStyles.addcartbtn} onClick={addProduct}>
        Add to Cart
      </button>
      {message}
      <BuyNow />
      <Footer />
    </div>
  );
}
