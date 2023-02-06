import { ReactElement } from "react";
import useCart from "../../hooks/useCart";
import { usePictures } from "../../hooks/usePictures";
import { Picture } from "../picture/Picture";
import cl from "./index.module.scss";

export const PicturesList = () => {
  const { pictures, onFavorite } = usePictures();
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();

	//Picture sizing function
  const getClass = (i: number) => {
    if (i % 5 === 0) {
      return "big";
    } else if (i % 6 === 0) {
      return "wide";
    }
  };

  let pageContent: ReactElement | ReactElement[] = (
    <h1 className={cl.pictureList__loading}>Loading...</h1>
  );

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
          onFavorite={onFavorite}
        />
      );
    });
  }

  return <div className={cl.pictureList}>{pageContent}</div>;
};
