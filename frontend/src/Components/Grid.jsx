import { useEffect, useState } from "react";
import { fetchProducts } from "../api/fetchProducts";
import gridStyles from "../styles/grid.module.css";

export default function Grid() {
  const [data, setData] = useState([]);
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
  console.log(data);

  return (
    <div className={gridStyles.container}>
      {data.map((item, index) => (
        <div key={index} className={gridStyles.product}>
          {item.image.map((imageUrl, imageIndex) => (
            <img className={gridStyles.image}
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
    </div>
  );
}
