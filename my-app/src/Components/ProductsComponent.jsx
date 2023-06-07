import React, { useContext } from "react";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useNavigate } from "react-router-dom";
import Filter from "./Filter";
import { DataContext } from "../Context/DataContext";
import "./ProductsComponent.css";
export const ProductsComponent = () => {
  const {
    state: { filter, products, cart, wishlist },
    handleCartUpdate,
    handleWishlistUpdate,
  } = useContext(DataContext);

  const Navigate = useNavigate();

  const { searchValue, sort, selectedCategory, price } = filter;
  const transformData = () => {
    let filteredData = [...products];

    if (searchValue) {
      filteredData = filteredData.filter((product) =>
        product.Name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    if (price) {
      filteredData = filteredData.filter((product) => product.price <= price);
    }

    if (sort) {
      filteredData = filteredData.sort((a, b) =>
        sort === "Low-to-High" ? a.price - b.price : b.price - a.price
      );
    }
    if (selectedCategory.length > 0) {
      filteredData = filteredData.filter((prod) =>
        selectedCategory.some((category) => category === prod.category)
      );
    }
    return filteredData;
  };

  return (
    <div className="ProductContainer">
      <div className="filter">
        <Filter />
      </div>
      <div className="ProductListing">
        {transformData()?.map((item) => {
          return (
            <div>
              <div className="imgContainer">
                <div key={item.id}>
                  <div className="wishlistContainer">
                    {wishlist.some((data) => data.id === item.id) ? (
                      <span onClick={() => handleWishlistUpdate(item)}>
                        <FontAwesomeIcon
                          icon={icon({ name: "heart" })}
                          size="xl"
                          style={{ color: "#f1795c" }}
                        />{" "}
                      </span>
                    ) : (
                      <span onClick={() => handleWishlistUpdate(item)}>
                        <FontAwesomeIcon
                          icon={icon({ name: "heart" })}
                          size="xl"
                          style={{ color: "grey" }}
                        />{" "}
                      </span>
                    )}
                  </div>

                  <img
                    onClick={() => Navigate(`/products/${item.id}`)}
                    src={item.imageURL}
                    alt="productImage"
                    className="imgclass"
                  />
                  <h2 style={{ margin: "0" }}>{item.Name}</h2>
                  <h4 style={{ margin: "0" }}>
                    Deal Price:<b> {item.price} Rs</b>
                  </h4>
                  <p>
                    {" "}
                    Orignal Price :
                    <span style={{ textDecoration: "line-through red 2px" }}>
                      {item.orignalPrice} Rs
                    </span>
                  </p>

                  <div className="btnCart">
                    {cart?.some((data) => data.id === item.id) ? (
                      <NavLink to="/cart">
                        <button style={{ cursor: "pointer" }}>
                          Go To Cart
                        </button>
                      </NavLink>
                    ) : (
                      <button
                        onClick={() => handleCartUpdate(item)}
                        style={{ cursor: "pointer" }}
                      >
                        Add To Cart{" "}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
