import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import { CartContext } from "../Context/CartContext";
export const Products = () => {
  const { responseProductData } = useContext(ProductContext);
  const { handleCartUpdate } = useContext(CartContext);
  return (
    <div
      className="container"
      style={{ display: "flex", justifyContent: "center" }}
    >
      {responseProductData?.products?.map((item) => {
        function handleAddToCartClick(item) {
          handleCartUpdate(item);
        }
        return (
          <div>
            <div className="imgContainer">
              <div key={item.id}>
                <img
                  src={item.imageURL}
                  alt="productImage"
                  className="imgclass"
                />
                <h2 style={{ margin: "0" }}>{item.Name}</h2>
                <p style={{ margin: "0" }}>
                  <b>{item.price} Rs</b>
                </p>
                <button
                  onClick={() => handleAddToCartClick(item)}
                  style={{ cursor: "pointer" }}
                >
                  Add To Cart{" "}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
