import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Homepage";
import Mockman from "mockman-js";
import Navbar from "./Components/Navbar";
import { Cart } from "./Components/Cart";
import { Wishlist } from "./Components/Wishlist";
import { Signin } from "./Components/Signin";
import { Products } from "./Components/ProductsComponent";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
