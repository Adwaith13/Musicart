import { useEffect, useState } from "react";
import { fetchProducts } from "../api/fetchProducts";
import gridStyles from "../styles/grid.module.css";
import cart from "../assets/logos/cart.svg";
import Product from "../pages/Product";
import { useNavigate } from "react-router-dom";
import { addtoCart } from "../api/addtoCart";

export default function List() {
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
    <div className={gridStyles.listContainer}>
      {data.map((item, index) => (
        <div
          key={index}
          className={gridStyles.listProduct}
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
                navigate("/cart")
              } catch (error) {
                console.log(error);
              }
            }}
          />
          <div className={gridStyles.listcontainer}>
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
            <div className={gridStyles.detailcontainer}>
              <p className={gridStyles.name}>{item.product_name}</p>
              <p className={gridStyles.listdetail}>
                Price - ₹{item.product_price}
              </p>
              <p className={gridStyles.listdetail}>
                {item.product_color} | {item.product_type}
              </p>
              <p className={gridStyles.listdetail}>{item.product_head}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
