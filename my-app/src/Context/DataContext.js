import React, { createContext, useEffect, useReducer, useState } from "react";
import { dataReducer, initialState } from "../Reducers/DataReducer";
import { useLocation, useNavigate } from "react-router-dom";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [emailData, setEmailData] = useState();
  const [passwordData, setPasswordData] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  const getData = async () => {
    try {
      const resp = await fetch("/api/categories");

      const { categories } = await resp.json();
      dispatch({ type: "INITIALIZE_CATEGORIES", payload: categories });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getProductData = async () => {
    try {
      const resp = await fetch("/api/products");
      const { products } = await resp.json();

      dispatch({ type: "INITILIZE_PRODUCTS", payload: products });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  const handleCartUpdate = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const handleRemoveCart = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  const handleWishlistUpdate = (item) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: item });
  };
  const handleRemoveWishlist = (item) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item });
  };
  const handleTestLogin = () => {
    const emailDummy = "TestUser@123";
    const passDummy = "123456";
    setEmailData(emailDummy);
    setPasswordData(passDummy);
    setIsLoggedIn(!isLoggedIn);
    navigate(location?.state?.from?.pathname);
  };
  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        handleCartUpdate,
        handleRemoveCart,
        handleWishlistUpdate,
        handleRemoveWishlist,
        isLoggedIn,
        handleTestLogin,
        emailData,
        setEmailData,
        passwordData,
        setPasswordData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
