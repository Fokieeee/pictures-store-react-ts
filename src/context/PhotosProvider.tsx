import React, { createContext, ReactElement, useEffect, useState } from "react";
//https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json
export type PicturesType = {
  url: string;
  id: string;
  isFavorite: boolean;
};

export type ContextType = { pictures: PicturesType[] };

const PicturesContext = createContext<ContextType>({ pictures: [] });

type ChildrenType = {
  children?: ReactElement | ReactElement[];
};

export const PhotosProvider = ({ children }: ChildrenType): ReactElement => {
  const [pictures, setPictures] = useState<PicturesType[]>([]);

  useEffect(() => {
    try {
      const fetchProducts = async (): Promise<void> => {
        const res = await fetch(
          "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
        );
        const data = await res.json();
        setPictures(data);
      };
      fetchProducts();
    } catch (e: any) {
      alert(e);
    }
  });

  return (
    <PicturesContext.Provider value={{ pictures }}>
      {children}
    </PicturesContext.Provider>
  );
};

export default PicturesContext;
