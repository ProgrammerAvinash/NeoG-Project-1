import React, { useContext, useState } from "react";
import { DataContext } from "../Context/DataContext";
// import { ProductContext } from "../Context/ProductContext";
import { categories } from "../backend/db/categories";
import "./Filter.css";
export default function Filter() {
  const { state } = useContext(DataContext);

  const {
    dispatch,
    state: {
      filter: { sort, rating, price, selectedCategory },
    },
  } = useContext(DataContext);
  const [priceRange, setPriceRange] = useState();
  const handleRangeFilter = (e) => {
    setPriceRange(e.target.value);
    dispatch({ type: "PRICE_BY_RANGE", payload: e.target.value });
  };
  const handleRating = (num) => {
    dispatch({ type: "FILTER_RATING", payload: num });
  };
  return (
    <div className="filter">
      <div className="filterHead">
        <b>Filter</b>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => dispatch({ type: "CLEAR_FILTER" })}
        >
          clear
        </span>
        <div className="filterContent">
          <div className="filterPrice">
            <h4>Price</h4>
            <div className="priceRange">
              <span
                style={{
                  padding: "2px",
                  fontSize: priceRange == 200 ? "Large" : "",
                }}
              >
                200
              </span>
              <span
                style={{
                  fontSize: priceRange == 400 ? "Large" : "",
                  padding: "2px",
                }}
              >
                400
              </span>
              <span
                style={{
                  padding: "2px",
                  fontSize: priceRange == 600 ? "Large" : "",
                }}
              >
                600
              </span>
              <span
                style={{
                  padding: "2px",
                  fontSize: priceRange == 800 ? "Large" : "",
                }}
              >
                800
              </span>
            </div>
            <div className="filterPriceInput">
              <input
                type="range"
                list="tickmark"
                min="200"
                max="800"
                step="200"
                value={priceRange}
                onChange={handleRangeFilter}
              />
            </div>
          </div>
          <div className="category">
            <h4>Category</h4>
            {state?.categories?.map((data) => {
              return (
                <div className="filterCheckbox">
                  <label>
                    <input
                      type="checkbox"
                      onChange={() =>
                        dispatch({
                          type: "CATEGORY_FILTER",
                          payload: data.categoryName,
                        })
                      }
                      checked={selectedCategory.includes(data.categoryName)}
                    />
                    <span>{data.categoryName}</span>
                  </label>
                </div>
              );
            })}
          </div>
          <div className="rating">
            <h4>rating</h4>
            <div className="raido-rating">
              {[1, 2, 3, 4, 5].map((num) => {
                return (
                  <div>
                    <label key={num}>
                      <input
                        type="radio"
                        value={num}
                        onChange={() => handleRating(num)}
                        checked={rating === num}
                      />{" "}
                      {num} star
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="sort-by">
            <h4>sort-by</h4>
            <input
              type="radio"
              onChange={() => {
                dispatch({ type: "FILTER_SORTBY", payload: "High-to-Low" });
              }}
              checked={"High-to-Low" === sort}
            />
            <label htmlFor="">High-to-Low</label>

            <input
              type="radio"
              onChange={() => {
                dispatch({ type: "FILTER_SORTBY", payload: "Low-to-High" });
              }}
              checked={sort === "Low-to-High"}
            />
            <label htmlFor="">Low-to-High</label>
          </div>
        </div>
      </div>
    </div>
  );
}
