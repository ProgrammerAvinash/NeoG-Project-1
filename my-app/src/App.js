import { Route, Routes } from "react-router-dom";
import "./App.css";

import Homepage from "./Components/Homepage";
import Mockman from "mockman-js";
import Navbar from "./Components/Navbar";
import { Cart } from "./Components/Cart";
import { Wishlist } from "./Components/Wishlist";
import { Signin } from "./Components/Signin";
import { ProductsComponent } from "./Components/ProductsComponent";
import { ProductDetail } from "./Components/ProductDetail";
import Footer from "./Components/footer";
import { RequiresAuth } from "./Components/RequiresAuth";
import Error from "./Components/Error";
const { isLoggedIn } = RequiresAuth;
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/*" element={<Error />} />
        <Route
          path="/cart"
          element={
            <RequiresAuth isLoggedIn={isLoggedIn}>
              <Cart />
            </RequiresAuth>
          }
        />

        <Route
          path="/Wishlist"
          element={
            <RequiresAuth isLoggedIn={isLoggedIn}>
              {" "}
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Products" element={<ProductsComponent />} />
        <Route path="/Products/:productId" element={<ProductDetail />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
