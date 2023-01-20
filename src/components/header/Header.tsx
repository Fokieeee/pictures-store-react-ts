import React, { useState } from "react";
import cl from "./index.module.css";

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Header = ({ viewCart, setViewCart }: PropsType) => {
  return (
    <header className={cl.header}>
      <div className={cl.header__titleBar}>
        <h1>Pictures Store</h1>
      </div>
      <div className={cl.header__priceBox}>
        <h3>Total Items: 12</h3>
        <h3>Total Price: 123$</h3>
      </div>
      <button
        onClick={() => setViewCart((prev) => !prev)}
        className={cl.header__navButton}
      >
        {viewCart ? "View Pictures" : "View Cart"}
      </button>
    </header>
  );
};
