import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactElement, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { PicturesType } from "../../context/PhotosProvider";
import { ReducerAction, ReducerActionType } from "../../context/CartProvider";
import cl from "./index.module.scss";

import {
  faS,
  faHeart,
  faPlus,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(faS, faHeart, far, faPlus, faCheck);

type PropsType = {
  picture: PicturesType;
  className?: string;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  inCart: boolean;
  onFavorite: (id: string) => void;
};

export const Picture = ({
  picture,
  className,
  dispatch,
  REDUCER_ACTIONS,
  inCart,
  onFavorite,
}: PropsType): ReactElement => {
  const [isHovered, setIsHovered] = useState(false);

  const onAdd = () => {
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...picture } });
  };

  const onRemove = () => {
    dispatch({ type: REDUCER_ACTIONS.REMOVE, payload: { ...picture } });
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${className} ${cl.picture}`}
    >
      <img src={picture.url} className={cl.picture__image} />
      {isHovered && (
        <div className={cl.picture__icons}>
          <div className={cl.picture__add}>
            {inCart ? (
              //check Icon
              <FontAwesomeIcon
                onClick={onRemove}
                icon={["fas", "check"]}
                className={cl.picture__check}
              />
            ) : (
              //plus Icon
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
            <FontAwesomeIcon
              icon={[`${picture.isFavorite ? "fas" : "far"}`, "heart"]}
              className={cl.picture__heart}
            />
          </div>
        </div>
      )}
    </div>
  );
};
