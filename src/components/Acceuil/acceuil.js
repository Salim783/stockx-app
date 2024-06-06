// src/components/Acceuil.js
import React from 'react';
import { useFavorites } from '../../context/FavoriteContext';
import { useAuth } from '../../context/authContext';
import AddCard from '../AddCard/addCard';
import './acceuil.css';

function Acceuil() {
    const { cards, addCard, addFavorite } = useFavorites();
    const { user } = useAuth();

    const handleAddFavorite = (card) => {
        addFavorite(card);
    };

    return (
        <>
            {user ? (
                <>
                    <h1>Ajouter une nouvelle carte</h1>
                    <AddCard onAddCard={addCard} />
                </>
            ) : (
                <p>Vous devez être connecté pour ajouter une annonce.</p>
            )}

            <h1>Cartes créées par les utilisateurs</h1>
            <div className='card1'>
                {cards.map((card, index) => (
                    <div className='card2' key={index}>
                        <img src={card.imgUrl} className='imgacceuil' alt="" />
                        <p>{card.description}</p>
                        <div>
                            <p className='price'>{card.price} €</p>
                            <button type='button' onClick={() => handleAddFavorite(card)}>
                                <img src="path/to/favoris/icon" alt='' />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Acceuil;
