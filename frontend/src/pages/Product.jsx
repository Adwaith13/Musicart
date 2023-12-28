import Navbar from "../Components/Navbar";
import HomeLogo from "../Components/HomeLogo";
import Back from "../Components/Back";
import AddCartBtn from "../Components/AddCartBtn";
import BuyNow from "../Components/BuyNow";
import Footer from "../Components/Footer";
import { useLocation } from "react-router-dom";
import productStyle from "../styles/product.module.css";

export default function Product() {
  const location = useLocation();
  const { productData } = location.state;
  console.log(productData);

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
      <AddCartBtn />
      <BuyNow />
      <Footer />
    </div>
  );
}
