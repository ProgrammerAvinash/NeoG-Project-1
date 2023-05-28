import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import { CartContext } from "../Context/CartContext";
export const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div
      className="container"
      style={{ display: "flex", justifyContent: "center" }}
    >
      {cart.map((item) => {
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
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
