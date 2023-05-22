import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/"> Home </NavLink>
        <input htmlFor="buttonSearch" placeholder="Search" type="text" />
        <NavLink to="/cart"> Cart </NavLink> ||
        <NavLink to="/Wishlist"> Wish List </NavLink> ||
        <NavLink to="/Signin"> Signin </NavLink>
      </nav>
    </div>
  );
};
export default Navbar;
