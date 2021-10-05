import React, { createContext, useState } from "react";

export const FavoritesContext = createContext({
  favorites: [],
  addToFavorites: (_restaurant: string) => {
    return;
  },
  removeFromFavorites: (_restaurant: string) => {
    return;
  },
});

export const FavoritesContextProvider = ({ children }: { children: any }) => {
  const [favorites, setFavorites] = useState([]);

  const add = (restaurant: any) => {
    setFavorites([...favorites, restaurant]);
  };

  const remove = (restaurant: any) => {
    const newFavorites = favorites.filter(
      (favorite: any) => favorite.placeId !== restaurant.placeId
    );
    setFavorites([newFavorites]);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites: add,
        removeFromFavorites: remove,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
