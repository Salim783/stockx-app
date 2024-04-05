// AnnonceCard.js

import React from 'react';

function Annonce() {
    return (
    <>
        <div className="card-annoce">
            <h2>Créer une annonce</h2>
            <form action="#" method="post">
                <label htmlFor="titre">Titre :</label>
                <input type="text" id="titre-annonce" name="titre" required />

                <label htmlFor="description">Description :</label>
                <textarea id="description-annonce" name="description" rows="4" required></textarea>

                <label htmlFor="prix">Prix :</label>
                <input type="text" id="prix-annonce" name="prix" required />

                <label htmlFor="image">Image :</label>
                <input type="text" id="image-annonce" name="image" />

                <input type="submit" value="Créer l'annonce" />
            </form>
        </div>
    </>
    );
}

export default Annonce;
