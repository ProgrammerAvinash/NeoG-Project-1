import React, { createContext, useEffect, useReducer } from "react";
import { dataReducer, initialState } from "../Reducers/DataReducer";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  // const [responseData, setResponseData] = useState();
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const getData = async () => {
    try {
      const resp = await fetch("/api/categories");

      const { categories } = await resp.json();
      dispatch({ type: "INITIALIZE_CATEGORIES", payload: categories });
    } catch (error) {
      console.error(error);
    }
  };
  console.log(state);
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
    // setCart((cart) => [...cart, item]);
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
  // const filterCategories = () => {};
  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        handleCartUpdate,
        handleRemoveCart,
        handleWishlistUpdate,
        handleRemoveWishlist,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
