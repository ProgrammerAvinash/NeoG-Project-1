import React, { createContext, useEffect, useState } from "react";
export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [responseData, setResponseData] = useState();
  const getData = async () => {
    try {
      const resp = await fetch("/api/categories");
      setResponseData(await resp.json());
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <DataContext.Provider value={{ responseData }}>
      {children}
    </DataContext.Provider>
  );
};
