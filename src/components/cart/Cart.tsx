import React, { useState } from "react";
import useCart from "../../hooks/useCart";
import { CartItem } from "../cartItem/CartItem";
import cl from "./index.module.css";

export const Cart = () => {
  const [confirm, setConfirm] = useState<boolean>(false);
  const [buttinText, setButtonText] = useState<string>("Place Order");
  const { dispatch, totalItems, totalPrice, REDUCER_ACTIONS, cart } = useCart();

  const order = () => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT });
    setConfirm(true);
  };

  return (
    <div className={cl.cart}>
      <ul className={cl.list}>
        {cart.map((item) => {
          return <CartItem key={item.id} dispatch={dispatch} item={item} />;
        })}
      </ul>
    </div>
  );
};
