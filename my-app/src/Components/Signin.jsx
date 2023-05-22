import React, { useState } from "react";

export const Signin = () => {
  const [signInData, setSignInData] = useState({ email: "", password: "" });
  const handelSubmit = (e) => {
    e.preventDefault();

    setSignInData({ email: "", password: "" });
  };
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="signIn">
      <h2> I have already an account </h2>
      <span>Sign i with your Email and Password</span>

      <form onSubmit={handelSubmit}>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={signInData.email.value}
          required
        />
        <label>Email</label>
        <input
          type="password"
          name="password"
          value={signInData.password.value}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input type="submit" value="submit form" />

        <p>{signInData.email.valueOf}</p>
        <p>{signInData.password.valueOf}</p>
      </form>
    </div>
  );
};
