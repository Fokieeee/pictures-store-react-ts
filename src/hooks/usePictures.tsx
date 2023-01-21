import { useContext } from "react";
import PicturesContext, { ContextType } from "../context/PhotosProvider";

export const usePictures = (): ContextType => {
  return useContext(PicturesContext);
};
