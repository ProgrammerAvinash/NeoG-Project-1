import React, { useContext, useReducer } from "react";
import { DataContext } from "../Context/DataContext";
import "./Homepage.css";
import { useNavigate, Link } from "react-router-dom";
import VideoHome from "../Assets/VideoHome.mp4";
const Homepage = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(DataContext);

  const handleCategoryClick = (title) => {
    navigate("/Products");
    dispatch({ type: "CLEAR_FILTER" });
    dispatch({
      type: "CATEGORY_FILTER",
      payload: title,
    });
  };
  return (
    <div className="container">
      <div className="videoHome">
        <video width="100%" autoPlay loop>
          <source src={VideoHome} type="video/mp4" />
        </video>
        <div className="buttonShop">
          <Link to="./products">
            <button className="btnShop">Shop Now</button>{" "}
          </Link>
        </div>
      </div>
      <div className="container">
        {state?.categories?.map(
          ({ id, title, author, price, imageURL, categoryName }) => {
            return (
              <div className="imgContainer">
                <div key={id} onClick={() => handleCategoryClick(title)}>
                  <img
                    src={imageURL}
                    alt="productImage"
                    className="imgclassHome"
                  />
                  <h2>{title}</h2>
                  {console.log(state)}
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
