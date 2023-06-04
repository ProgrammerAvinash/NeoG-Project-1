import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import Filter from "./Filter";
export const Products = () => {
  const { state } = useContext(ProductContext);
  const { handleCartUpdate } = useContext(CartContext);
  const Navigate = useNavigate();

  return (
    <div
      className="container"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Filter />
      {state?.products?.map((item) => {
        function handleAddToCartClick(item) {
          handleCartUpdate(item);
        }
        return (
          <div>
            <div className="imgContainer">
              <div key={item.id}>
                <img
                  onClick={() => Navigate(`/products/${item.id}`)}
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
