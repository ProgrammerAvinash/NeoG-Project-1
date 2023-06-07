import { NavLink } from "react-router-dom";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Navbar.css";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
const Navbar = () => {
  const {
    state: { cart, wishlist },
    dispatch,
  } = useContext(DataContext);

  const handleProductSearch = (e) => {
    // navigate("./ProductsComponent.jsx");

    dispatch({ type: "SEARCH_PRODUCT", payload: e.target.value });
  };
  return (
    <div className="nav-container">
      <nav>
        <NavLink to="/">
          {" "}
          <img
            src="https://i.ibb.co/PwmgnPy/SC-LOGO.jpg"
            alt="SC-LOGO"
            style={{
              height: "4rem",
              width: "4rem",
              position: "relative",
              padding: "5px",
              float: "left",
            }}
          />{" "}
        </NavLink>
        <FontAwesomeIcon
          icon={icon({ name: "search" })}
          size="xl"
          style={{ color: "#f1795c" }}
        />{" "}
        <input
          className="searchbar"
          htmlFor="buttonSearch"
          placeholder="Search"
          type="text"
          onChange={handleProductSearch}
        />
        <nav style={{ float: "right", margin: "1rem" }}>
          <NavLink to="/Signin">
            {" "}
            <FontAwesomeIcon
              icon={icon({ name: "user" })}
              size="xl"
              style={{ color: "#f1795c", margin: "5px" }}
            />{" "}
          </NavLink>{" "}
          <NavLink to="/Wishlist">
            <FontAwesomeIcon
              icon={icon({ name: "heart" })}
              size="xl"
              style={{ color: "#f1795c", margin: "5px" }}
            />{" "}
            <span>{wishlist.length === 0 ? "" : wishlist.length}</span>
          </NavLink>{" "}
          <NavLink to="/cart">
            {" "}
            <FontAwesomeIcon
              icon={icon({ name: "cart-shopping" })}
              size="xl"
              style={{ color: "#f1795c", margin: "5px" }}
            />
            <span>{cart.length === 0 ? "" : cart.length}</span>
          </NavLink>{" "}
        </nav>
      </nav>
    </div>
  );
};
export default Navbar;
