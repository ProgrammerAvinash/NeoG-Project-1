import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const { state } = useContext(DataContext);
  const { productId } = useParams();

  const getProductDetails = (productId, state) =>
    state?.products?.find(({ id }) => id === productId);

  const productFound = getProductDetails(productId, state);
  console.log(productFound, "a");
  return (
    <>
      <img src={productFound.imageURL} alt="imgs" />
      <h1>{productFound.Name}</h1>
    </>
  );
};
