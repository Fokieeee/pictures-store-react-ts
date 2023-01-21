import React, { ReactElement } from "react";
import useCart from "../../hooks/useCart";
import { usePictures } from "../../hooks/usePictures";
import { Picture } from "../picture/Picture";
import cl from "./index.module.css";

export const PicturesList = () => {
  const { pictures, setPictures, onFavorite } = usePictures();
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();

  const getClass = (i: number) => {
    if (i % 5 === 0) {
      return "big";
    } else if (i % 6 === 0) {
      return "wide";
    }
  };
  // console.log(pictures);
  let pageContent: ReactElement | ReactElement[] = <h3>Loading...</h3>;

  if (pictures?.length) {
    pageContent = pictures.map((picture, i) => {
      const inCart: boolean = cart.some((item) => item.id === picture.id);

      return (
        <Picture
          dispatch={dispatch}
          REDUCER_ACTIONS={REDUCER_ACTIONS}
          picture={picture}
          key={picture.id}
          className={getClass(i)}
          inCart={inCart}
          cart={cart}
          onFavorite={onFavorite}
        />
      );
    });
  }

  return <div className={cl.catalog}>{pageContent}</div>;
};
