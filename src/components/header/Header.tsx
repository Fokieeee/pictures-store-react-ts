import React from "react";
import cl from "./index.module.css";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faS,
  faCartShopping,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
library.add(faS, faCartShopping, faImage);

type THeader = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Header = ({ viewCart, setViewCart }: THeader) => {
  const { totalItems, totalPrice } = useCart();

  return (
    <header className={cl.header}>
      <div onClick={() => setViewCart(false)} className={cl.header__titleBar}>
        <Link to="/pictures-store-react-ts/">
          <h1>Pictures Store</h1>
        </Link>
      </div>
      <div className={cl.header__rightSide}>
        <div className={cl.header__priceBox}>
          <h3>Total Items: {totalItems}</h3>
          <h3>Total Price: {totalPrice}</h3>
        </div>
        <div
          className={cl.header__nav}
          onClick={() => setViewCart((prev) => !prev)}
        >
          {viewCart ? (
            <Link to="/pictures-store-react-ts/">
              <FontAwesomeIcon
                icon={["fas", "image"]}
                className={cl.header__imageIcon}
              />
            </Link>
          ) : (
            <Link to="/pictures-store-react-ts/cart">
              <FontAwesomeIcon
                icon={["fas", "cart-shopping"]}
                className={cl.header__cartIcon}
              />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
