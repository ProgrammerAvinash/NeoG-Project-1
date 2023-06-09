import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { DataProvider, DataContext } from "./Context/DataContext";
// import { ProductDataProvider } from "./Context/ProductContext";

// Call make Server
makeServer();
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        {/* <ProductDataProvider> */}
        <App />
        {/* </ProductDataProvider> */}
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
