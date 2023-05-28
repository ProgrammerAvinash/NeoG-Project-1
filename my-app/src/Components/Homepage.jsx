import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import "./Homepage.css";

const Homepage = () => {
  const { responseData } = useContext(DataContext);
  return (
    <div>
      <h2>Welcome to SC</h2>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {responseData?.categories?.map(
          ({ id, title, author, price, imageURL }) => {
            return (
              <div className="imgContainer">
                <div key={id}>
                  <img src={imageURL} alt="productImage" className="imgclass" />
                  <h2>{title}</h2>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
export default Homepage;
