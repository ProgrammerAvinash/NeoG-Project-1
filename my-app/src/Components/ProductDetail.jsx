import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const { state } = useContext(DataContext);
  const { productId } = useParams();

  const getProductDetails = (productId, state) =>
    state?.products?.find(({ id }) => id === productId);

  const productFound = getProductDetails(productId, state);

  return (
    <div>
      <div className="imageContainer">
        <img
          src={productFound.imageURL}
          alt="imgs"
          style={{ height: "30em" }}
        />
      </div>
      <h1>{productFound.Name}</h1>
      <h4 style={{ margin: 0, padding: 0 }}>Price : {productFound.price} Rs</h4>
      <h4>
        Orignal Price:
        <span style={{ textDecoration: "line-through", margin: 0, padding: 0 }}>
          {productFound.orignalPrice}Rs{" "}
        </span>{" "}
      </h4>
    </div>
  );
};
