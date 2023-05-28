import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();
export const ProductDataProvider = ({ children }) => {
  const [responseProductData, setResponseProductData] = useState();
  const getProductData = async () => {
    try {
      const resp = await fetch("/api/products");
      setResponseProductData(await resp.json());
      console.log(responseProductData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);
  return (
    <ProductContext.Provider value={{ responseProductData }}>
      {children}
    </ProductContext.Provider>
  );
};
