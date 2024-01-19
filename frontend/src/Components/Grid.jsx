import { useEffect, useState } from "react";
import { fetchProducts } from "../api/fetchProducts";
import gridStyles from "../styles/grid.module.css";
import cart from "../assets/logos/cart.svg";
import Product from "../pages/Product";
import { useNavigate } from "react-router-dom";
import { addtoCart } from "../api/addtoCart";
import MobileFooter from "./MobileFooter";

export default function Grid() {
  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const payload = await fetchProducts();
        setData(payload.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, []);

  const navigate = useNavigate();
  const handleProduct = (productData) => {
    setSelectedProduct(productData);
    navigate("/product", { state: { productData } });
  };

  const loginToken = localStorage.getItem("loginToken");
  const registerToken = localStorage.getItem("registerToken");
  let token;

  if (loginToken) {
    token = loginToken;
  } else if (registerToken) {
    token = registerToken;
  }

  return (
    <>
      <div className={gridStyles.container}>
        {data.map((item, index) => (
          <div
            key={index}
            className={gridStyles.product}
            onClick={() => handleProduct(item)}
          >
            <img
              src={cart}
              className={gridStyles.cart}
              alt="Add to Cart"
              onClick={async (e) => {
                e.stopPropagation();
                try {
                  if (!token) {
                    navigate("/login");
                  }
                  const response = await addtoCart(token, item._id);
                  console.log(response);
                  navigate("/cart");
                } catch (error) {
                  console.log(error);
                }
              }}
            />
            {item.image.map((imageUrl, imageIndex) => (
              <img
                className={gridStyles.image}
                src={imageUrl}
                key={imageIndex}
                alt="product-image"
                width={250}
                height={250}
              ></img>
            ))}
            <br />
            <p className={gridStyles.detail}>{item.product_name}</p>
            <br />
            <p className={gridStyles.detail}>Price - ₹{item.product_price}</p>
            <br />
            <p className={gridStyles.detail}>
              {item.product_color} | {item.product_type}
            </p>
          </div>
        ))}
        {selectedProduct && <Product productData={selectedProduct} />}
      </div>
      <MobileFooter />
    </>
  );
}
