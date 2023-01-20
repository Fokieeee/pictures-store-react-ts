import React from "react";
import { CartItemType, ReducerAction } from "../../context/CartProvider";

type PropsType = {
  dispatch: React.Dispatch<ReducerAction>;
  item: CartItemType;
};

export const CartItem = ({ dispatch, item }: PropsType) => {
  return (
    <div>
      <img src={item.url} alt="" />
    </div>
  );
};
