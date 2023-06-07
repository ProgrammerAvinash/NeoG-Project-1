import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

const Checkout = () => {
  const {
    state: { cart },
  } = useContext(DataContext);

  let valueCart = cart?.reduce(
    (acc, item) => {
      return { ...acc, total: acc.total + item.price };
    },
    { total: 0 }
  );
  let OrignalvalueCart = cart?.reduce(
    (acc, item) => {
      return { ...acc, total: acc.total + item.orignalPrice };
    },
    { total: 0 }
  );
  console.log(valueCart);
  console.log(OrignalvalueCart);
  if (valueCart.total !== 0) {
    return (
      <div className="CheckOutContainer">
        <h4>M.R.P : {OrignalvalueCart.total}</h4>
        <h4>Discount : - {OrignalvalueCart.total - valueCart.total} </h4>
        <h4>Total Cart Value : {valueCart.total}</h4>
        <button>CheckOut</button>
      </div>
    );
  }
};

export default Checkout;
