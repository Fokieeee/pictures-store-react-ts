import React from "react";
import { CartItemType, ReducerAction, ReducerActionType } from "../../context/CartProvider";

import cl from "./index.module.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faS, faTrashCan } from "@fortawesome/free-solid-svg-icons";
library.add(faS, faTrashCan);

type PropsType = {
  dispatch: React.Dispatch<ReducerAction>;
  item: CartItemType;
  REDUCER_ACTIONS: ReducerActionType;
};

export const CartItem = ({ dispatch, item, REDUCER_ACTIONS }: PropsType) => {

  const cost = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(6.99);

  const onRemove = () => {
    dispatch({ type: REDUCER_ACTIONS.REMOVE, payload: { ...item } });
  };
	
  return (
    <div className={cl.cartItem}>
      <div className={cl.cartItem__picture}>
        <FontAwesomeIcon
          icon={["fas", "trash-can"]}
          className={cl.cartItem__trashIcon}
          onClick={onRemove}
        />
        <img src={item.url} alt="" className={cl.cartItem__image} />
      </div>
      <h3 className={cl.cartItem__cost}>{cost}</h3>
      <hr className={cl.cartItem__hr} />
    </div>
  );
};
