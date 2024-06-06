// src/components/Favorites.js
import React from 'react';
import { useFavorites } from '../../context/FavoriteContext';

function Favorites() {
    const { favorites } = useFavorites();

    return (
        <div>
            <h1>Vos favoris</h1>
            <div className='card1'>
                {favorites.map((favorite, index) => (
                    <div className='card2' key={index}>
                        <img src={favorite.imgUrl} className='imgacceuil' alt="" />
                        <p>{favorite.description}</p>
                        <p className='price'>{favorite.price} €</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Favorites;
