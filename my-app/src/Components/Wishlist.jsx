import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";

export const Wishlist = () => {
  const {
    state: { wishlist },
    handleRemoveWishlist,
  } = useContext(DataContext);
  return (
    <div
      className="container"
      style={{ display: "flex", justifyContent: "center" }}
    >
      {wishlist?.length === 0 && <h1> Your Wish List is Empty </h1>}
      {wishlist?.map((item) => {
        return (
          <div className="WishlistContainer">
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
                <button onClick={() => handleRemoveWishlist(item)}>
                  {" "}
                  Remove{" "}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
