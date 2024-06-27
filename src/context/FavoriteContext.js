// src/context/FavoritesContext.js
import React, { createContext, useState, useContext } from 'react';
import { useAuth } from './authContext';

const FavoritesContext = createContext();


export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const [cards, setCards] = useState([]);
    const { user } = useAuth();

    const addFavorite = (item) => {
        if (!user) {
            alert('Vous devez être connecté pour ajouter aux favoris');
            return;
        }
        setFavorites((prevFavorites) => [...prevFavorites, item]);
    };

    const addCard = (card) => {
        if (!user) {
            alert('Vous devez être connecté pour créer une annonce');
            return;
        }
        setCards((prevCards) => [...prevCards, card]);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, cards, addCard }}>
            {children}
        </FavoritesContext.Provider>
    );
};
export const useFavorites = () => useContext(FavoritesContext);