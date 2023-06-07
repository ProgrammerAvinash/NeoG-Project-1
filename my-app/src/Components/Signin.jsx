import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { useLocation, useNavigate } from "react-router-dom";
import "./SignIn.css";
import { ToastContainer, toast } from "react-toastify";
export const Signin = () => {
  const { isLoggedIn, handleTestLogin, emailData, passwordData } =
    useContext(DataContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    navigate(location?.state?.from?.pathname);
  };
  return (
    <div className="signIn">
      <h4>SignIn with your Email and Password</h4>
      <label>Email</label>
      <input
        className="signInInput"
        type="email"
        placeholder="Enter Your Email"
        name="email"
        required
        value={emailData}
      />
      <label>Password</label>
      <input
        className="signInInput"
        type="password"
        placeholder="Enter Password"
        name="password"
        value={passwordData}
        required
      />

      <button onClick={handleLogin}>login</button>

      <button onClick={() => handleTestLogin(!isLoggedIn)}>
        {!isLoggedIn ? "Click Here For Test Credientials " : ` Logout`}
      </button>
      <h4>{isLoggedIn ? "TEST USER LOGGED IN" : ""}</h4>
      <ToastContainer />
    </div>
  );
};
