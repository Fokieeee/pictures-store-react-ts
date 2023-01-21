import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactElement, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { PicturesType } from "../../context/PhotosProvider";
import cl from "./index.module.css";
import {
  faS,
  faHeart,
  faPlus,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(faS, faHeart, far, faPlus, faCheck);
import {
  CartItemType,
  ReducerAction,
  ReducerActionType,
} from "../../context/CartProvider";

type PropsType = {
  picture: PicturesType;
  className?: string;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  inCart: boolean;
  cart: CartItemType[];
  onFavorite: (id: string) => void;
};

export const Picture = ({
  picture,
  className,
  dispatch,
  REDUCER_ACTIONS,
  inCart,
  cart,
  onFavorite,
}: PropsType): ReactElement => {
  const [isHovered, setIsHovered] = useState(false);

  const onAdd = () => {
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...picture } });
    console.log(cart);
  };

  const onRemove = () => {
    dispatch({ type: REDUCER_ACTIONS.REMOVE, payload: { ...picture } });
    console.log(cart);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${className} ${cl.picture}`}
    >
      <img src={picture.url} alt="" className={cl.picture__image} />
      {isHovered && (
        <div className={cl.picture__icons}>
          <div className={cl.picture__add}>
            {inCart ? (
              <FontAwesomeIcon
                onClick={onRemove}
                icon={["fas", "check"]}
                className={cl.picture__check}
              />
            ) : (
              <FontAwesomeIcon
                onClick={onAdd}
                icon={["fas", "plus"]}
                className={cl.picture__plus}
              />
            )}
          </div>
          <div
            onClick={() => onFavorite(picture.id)}
            className={cl.picture__favorite}
          >
            {picture.isFavorite ? (
              <FontAwesomeIcon
                icon={["fas", "heart"]}
                className={cl.picture__faFilled}
              />
            ) : (
              <FontAwesomeIcon
                icon={["far", "heart"]}
                className={cl.picture__faEmpty}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
