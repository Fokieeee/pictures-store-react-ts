import { useState } from "react";
import useCart from "../../hooks/useCart";
import { CartItem } from "../cartItem/CartItem";
import cl from "./index.module.css";

export const Cart = () => {
	
  const [buttonText, setButtonText] = useState<string>("Place Order");

  const { dispatch, REDUCER_ACTIONS, cart } = useCart();

  const order = () => {
    setButtonText("Ordering...");
    setTimeout(() => {
      dispatch({ type: REDUCER_ACTIONS.SUBMIT });
      setButtonText("Place Order");
    }, 3000);
  };

  return (
    <div className={cl.cart}>
      <h1 className={cl.cart__title}>Check Out</h1>
      <ul className={cl.list}>
        {cart.map((item) => {
          return (
            <CartItem
              key={item.id}
              dispatch={dispatch}
              item={item}
              REDUCER_ACTIONS={REDUCER_ACTIONS}
            />
          );
        })}
      </ul>
      <button
        disabled={!cart.length && true}
        onClick={order}
        className={cl.cart__submitButton}
      >
        {buttonText}
      </button>
    </div>
  );
};
