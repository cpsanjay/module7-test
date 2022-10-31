import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="extra">No of items in cart: {cart.cartTotalQuantity}</div>
  );
};

export default Cart;
