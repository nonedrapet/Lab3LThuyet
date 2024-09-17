// context/FavoritesContext.js
import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (meal) => {
    setFavorites((prevFavorites) => [...prevFavorites, meal]);
  };

  const removeFavorite = (mealId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((meal) => meal.id !== mealId)
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
