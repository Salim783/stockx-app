// src/components/AddCard.js
import React, { useState } from 'react';

function AddCard({ onAddCard }) {
    const [imgUrl, setImgUrl] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddCard({ imgUrl, description, price });
        setImgUrl('');
        setDescription('');
        setPrice('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="URL de l'image" 
                value={imgUrl} 
                onChange={(e) => setImgUrl(e.target.value)} 
                required 
            />
            <input 
                type="text" 
                placeholder="Description" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                required 
            />
            <input 
                type="number" 
                placeholder="Prix" 
                value={price} 
                onChange={(e) => setPrice(e.target.value)} 
                required 
            />
            <button type="submit">Ajouter une carte</button>
        </form>
    );
}

export default AddCard;
