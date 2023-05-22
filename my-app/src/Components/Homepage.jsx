import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";

const Homepage = () => {
  const { responseData } = useContext(DataContext);
  return (
    <div>
      <h2>Welcome to Homepage</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {responseData?.products?.map(
          ({ id, title, author, price, imageURL }) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexWrap: "nowrap",
                  alignContent: "center",
                }}
              >
                <div
                  key={id}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <img
                    src={imageURL}
                    style={{
                      cursor: "pointer",
                      height: "10rem",
                      width: "10rem",
                      padding: "10px",
                      border: "1px solid black",
                      borderRadius: "2px",
                      margin: "2px",
                    }}
                  />
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
