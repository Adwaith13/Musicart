import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Back from "../Components/Back";
import HomeLogo from "../Components/HomeLogo";
import bag from "../assets/logos/bag.svg";
import cartStyles from "../styles/cart.module.css";
import { fetchCart } from "../api/fetchCart";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const loginToken = localStorage.getItem("loginToken");
  console.log("login", loginToken);
  const registerToken = localStorage.getItem("registerToken");
  console.log("register", registerToken);
  let token;

  if (loginToken) {
    token = loginToken;
  } else if (registerToken) {
    token = registerToken;
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUserCart = async () => {
      try {
        const response = await fetchCart(token);
        console.log(response.products);
        setData(response.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserCart();
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <HomeLogo />
      <Back />
      <h1 className={cartStyles.header}>
        <img src={bag} width={30} className={cartStyles.image}></img>My Cart
      </h1>
      <div className={cartStyles.container}>
        <div className={cartStyles.left}>
          <table className={cartStyles.productTable}>
            <thead>
              <tr>
                <th className={cartStyles.head}></th>
                <th className={cartStyles.head}></th>
                <th className={cartStyles.head}>Price</th>
                <th className={cartStyles.head}>Quantity</th>
                <th className={cartStyles.head}>Total</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.product._id}>
                  <td className={cartStyles.tableImage}>
                    <img
                      src={item.product.image}
                      alt={item.product.product_name}
                      width={300}
                    />
                  </td>
                  <td className={cartStyles.productName}>
                    {item.product.product_name}
                    <br />
                    Color - {item.product.product_color}
                    <br />
                    {item.product.availability}
                  </td>
                  <td className={cartStyles.price}>
                    {item.product.product_price}
                  </td>
                  <td className={cartStyles.quantity}>{item.count}</td>
                  <td>
                    {parseInt(item.product.product_price) *
                      parseInt(item.count)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {data.map((item) => (
          <div className={cartStyles.right} key={item.product._id}>
            <h3 className={cartStyles.rightHead}>Price Details</h3>
            <p className={cartStyles.detail}>
              Total MRP - <span className={cartStyles.numbers}>₹{item.product.product_price}</span>
            </p>
            <p className={cartStyles.detail}>
              Discount on MRP <span className={cartStyles.numbers}>₹0</span>
            </p>
            <p className={cartStyles.detail}>
              Convenience Fee <span className={cartStyles.numbers}>₹45</span>
            </p>
            <p className={cartStyles.detail}>
              Total Amount -{" "}
              <span className={cartStyles.numbers}>₹{parseInt(item.product.product_price) + 45}</span>
            </p>
          </div>
        ))}
      </div>
      <button
        className={cartStyles.placeOrderCart}
        onClick={() => navigate("/checkout")}
      >
        Place Order
      </button>
      <Footer />
    </div>
  );
}
