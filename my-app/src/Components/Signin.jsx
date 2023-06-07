import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
export const Signin = () => {
  const { isLoggedIn, handleLogin } = useContext(DataContext);
  // const [signInData, setSignInData] = useState({ email: "", password: "" });

  // const handelSubmit = (e) => {
  //   e.preventDefault();

  //   setSignInData({ email: "", password: "" });
  // };
  // const handleChange = (e) => {
  //   console.log(e.target.value);
  // };

  return (
    <div className="signIn">
      <h2> I have already an account </h2>
      <span>Sign i with your Email and Password</span>

      <input type="email" name="email" required />
      <label>Email</label>
      <input type="password" name="password" required />

      <label>Password</label>
      <input type="submit" value="submit form" />

      <button onClick={() => handleLogin(!isLoggedIn)}>
        {!isLoggedIn ? "Login Guest" : "Logout"}
      </button>
      {console.log(isLoggedIn)}
      {/* </form> */}
    </div>
  );
};
