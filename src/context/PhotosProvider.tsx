import React, { createContext, ReactElement, useEffect, useState } from "react";

export type PicturesType = {
  url: string;
  id: string;
  isFavorite: boolean;
};

export type ContextType = {
  pictures: PicturesType[];
  setPictures: React.Dispatch<React.SetStateAction<PicturesType[]>>;
  onFavorite: (id: string) => void;
};

const PicturesContext = createContext<ContextType>({
  pictures: [],
  setPictures: () => {},
  onFavorite: () => {},
});

type ChildrenType = {
  children?: ReactElement | ReactElement[];
};

export const PhotosProvider = ({ children }: ChildrenType): ReactElement => {

  const [pictures, setPictures] = useState<PicturesType[]>([]);

  const onFavorite = (id: string) => {

    const favoriteChanged = pictures.map((item) =>
      item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
    );

    setPictures(favoriteChanged);
  };

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
  }, []);

  return (
    <PicturesContext.Provider value={{ pictures, setPictures, onFavorite }}>
      {children}
    </PicturesContext.Provider>
  );
};

export default PicturesContext;
