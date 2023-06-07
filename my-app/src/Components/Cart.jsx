import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import "./Cart.css";
export const Cart = () => {
  const {
    state: { cart },
    handleRemoveCart,
  } = useContext(DataContext);
  return (
    <div
      className="container"
      style={{ display: "flex", justifyContent: "center" }}
    >
      {cart?.map((item) => {
        return (
          <div className="CartContainer">
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
                <button onClick={() => handleRemoveCart(item)}>Remove </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
